import spacy
import pytextrank
from transformers import PegasusForConditionalGeneration, PegasusTokenizer
from transformers import pipeline

nlp = spacy.load("en_core_web_lg")

# modifie la pipeline pour inclure l'algorithme TextRank
nlp.add_pipe("textrank")

texte = """
Le Serbe a été sacré pour la troisième fois de sa carrière après 2016 et 2021, sur l'ocre parisienne, dimanche.
Le Serbe n'a pas tremblé longtemps. Malgré un premier set disputé, remporté au tie-break – secteur dans lequel il excelle – Novak Djokovic s'est imposé en trois sets (7-6 [7-1], 6-3, 7-5) contre le Norvégien Casper Ruud, dimanche 11 juin.
Celui qui retrouvera la place de numéro 1 mondial lundi a été sacré pour la troisième fois de sa carrière à Roland-Garros, au terme d'un match maîtrisé.
Le troisième larron du "Big 3" a surtout été à la hauteur de son rendez-vous avec l'histoire. 
D'abord gêné par la puissance d'un Casper Ruud loin d'être inhibé par l'enjeu, le Belgradois a enchaîné les fautes inhabituelles (on pense notamment à ces deux smashs complètement loupés), avant de faire valoir son expérience.
Il s'est progressivement installé dans les échanges, croquant avec opportunisme la moindre faille et prenant l'ascendant – comme souvent – en resserrant le jeu dans les moments décisifs.
Grâce à cette victoire, il s'est offert le 23e titre du Grand Chelem de sa carrière et le record du nombre de sacres en Majeur qui l'accompagne chez les hommes.
Il n'est plus qu'à une longueur de Margaret Court et ses 24 titres.
"""

# Exécutez la pipeline Spacy avec l'algorithme TextRank
doc = nlp(texte)

for sent in doc._.textrank.summary(limit_sentences=16):
    print(sent)

# Examinez les 16 meilleures phrases classées dans le texte

# phrases_and_ranks = [(phrase.chunks[0],phrase.rank) for phrase in doc._.phrases]
# print(phrases_and_ranks[:16])

# Choisissez un modèle
model_name = "google/pegasus-xsum"

# Chargez un tokenizer pré-entraîné
pegasus_tokenizer = PegasusTokenizer.from_pretrained(model_name)

# Définissez le modèle Pegasus
pegasus_model = PegasusForConditionalGeneration.from_pretrained(model_name)

# Création des jetons (tokens)
tokens = pegasus_tokenizer(texte, truncation=True, padding='longest', return_tensors='pt')

# Résumé du texte assez court
encoded_summary = pegasus_model.generate(**tokens)

# Décodage du résumé du texte
decoded_summary = pegasus_tokenizer.decode(encoded_summary[0], skip_special_tokens=True)

print("\n Petit résumé :\n")
print(decoded_summary)

# Création d'un nouveau résumé plus long

# Définir la pipeline pour le résumé
summarizer = pipeline("summarization", model=model_name, tokenizer=pegasus_tokenizer, framework="pt")

# Création du résumé
summary = summarizer(texte, min_length=40, max_length=150)

print("\n Grand résumé :\n")
print(summary[0]['summary_text'])