CREATE DATABASE if not exists Mastercamp;
USE Mastercamp;
-- drop table User;
CREATE TABLE User ( 
	ID int auto_increment primary key,
    User_created datetime,
	User_prenom varchar(20) not null,
    User_nom varchar(20) not null,
	User_mail varchar(50) not null,
    -- User_role varchar(20) not null,
	User_password varchar(200) not null
);

INSERT INTO User VALUES
(1,now(),'Jean','Vallejean','Jean.Vallejean@efrei.net', sha2(concat(now(), 'Jeanpass'), 224) ),
(2,now(),'Nicolas','Coco','nicolas.coco@efrei.net', sha2(concat(now(), 'Nicolpass'), 224) );

select * from User;
