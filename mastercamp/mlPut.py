import spacy
import pytextrank
import sys
import json
from transformers import PegasusForConditionalGeneration, PegasusTokenizer
from transformers import pipeline

# Définir les valeurs par défaut
event_first_player = "Ruud"
event_second_player = "Djokovic"
event_final_result = "7.7-6.1, 6-3, 7-5"
event_winner = "Djokovic"
scores = "6-3, 6-3, 6-3"
event_date = "2023-06-11"
tournament_name = "ATP French Open"

# Vérifier si des arguments sont passés
# if len(sys.argv) > 1:
#     # Récupérer les arguments de ligne de commande
# event_first_player = sys.argv[1]
# event_second_player = sys.argv[2]
# event_final_result = sys.argv[3]
# event_winner = sys.argv[4]
# scores = sys.argv[5]
# event_date = sys.argv[6]
# tournament_name = sys.argv[7]

# Load the large English language model
nlp = spacy.load("en_core_web_lg")

# Add TextRank algorithm to the pipeline
nlp.add_pipe("textrank")

texte2 = """The Serb was crowned for the third time in his career after 2016 and 2021, on the Parisian clay, on Sunday.
The Serb didn't tremble for long. Despite a contested first set, won in the tie-break – a sector in which he excels – Novak Djokovic prevailed in three sets (7-6 [7-1], 6-3, 7-5) against the Norwegian Casper Ruud on Sunday, June 11th.
He who will reclaim the number 1 spot in the world on Monday was crowned for the third time in his career at Roland-Garros, after a controlled match.
The third member of the 'Big 3' was particularly up to the challenge of this historic event.
Initially hindered by the power of a fearless Casper Ruud, the Belgradian made unusual mistakes (we notably think of those two completely missed smashes) before showcasing his experience.
He gradually took control of the exchanges, opportunistically capitalizing on any weaknesses and gaining the upper hand – as he often does – by tightening his game in crucial moments.
Thanks to this victory, he secured the 23rd Grand Slam title of his career and the record for the most Major titles won by a male player.
He is now just one step away from Margaret Court and her 24 titles."""""
# Execute the Spacy pipeline with the TextRank algorithm
doc = nlp(texte2)

# Create a list to store the summary sentences
summary_sentences = []

# Store the summary sentences generated by TextRank
for sent in doc._.textrank.summary(limit_phrases=50, limit_sentences=50):
    summary_sentences.append(sent.text)


# Create a dictionary to store the summary data
summary_data = {
    "summary_sentences": summary_sentences,
    "event_first_player": event_first_player,
    "event_second_player": event_second_player,
    "event_final_result": event_final_result,
    "event_winner": event_winner,
    "scores": scores,
    "event_date": event_date,
    "tournament_name": tournament_name
}

# Convert the summary data to JSON format
summary_json = json.dumps(summary_data)

# Print the summary data
# print(summary_json)

# Pick the Pegasus model
model_name = "google/pegasus-xsum"
# Load the pretrained tokenizer
pegasus_tokenizer = PegasusTokenizer.from_pretrained(model_name)
# Define the Pegasus model
pegasus_model = PegasusForConditionalGeneration.from_pretrained(model_name)
# Create tokens for the Pegasus model
tokens = pegasus_tokenizer(texte2, truncation=True,
                           padding="longest", return_tensors="pt")
# Generate the summary using Pegasus
# Use max_new_tokens instead of max_length
encoded_summary = pegasus_model.generate(**tokens, max_new_tokens=700)
# Decode the summarized text
decoded_summary = pegasus_tokenizer.decode(
    encoded_summary[0],
    skip_special_tokens=True
)
print("\n Petit resume :          \n")
print(decoded_summary)

# Define the pipeline for the summary
summarizer = pipeline(
    "summarization",
    model=model_name,
    tokenizer=pegasus_tokenizer,
    framework="pt"
)

# Create a longer summary using the pipeline
summary = summarizer(texte2, min_length=50, max_length=150,
                     do_sample=True, temperature=1.5)

print("\n Grand resume :          \n")
print("                   ")
print(summary[0]["summary_text"])
