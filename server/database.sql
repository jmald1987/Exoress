CREATE DATABASE favlinks;

CREATE TABLE links (
    ID SERIAL PRIMARY KEY,
    name VARCHAR(50),
    URL VARCHAR(50)
);