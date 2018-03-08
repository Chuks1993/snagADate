USE snagadate_db;

CREATE TABLE dates
(
    id INT NOT NULL
    AUTO_INCREMENT,
	name varchar
    (255) NOT NULL,
    gender varchar
    (50) NOT NULL,
	photo varchar
    (300) NOT NULL,
    traits varchar
    (50) NOT NULL,
    tier INTEGER
    (2) NOT NULL,
    quote varchar(300) NOT NULL,
	PRIMARY KEY
    (id)
);


