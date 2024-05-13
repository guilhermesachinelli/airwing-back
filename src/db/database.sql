CREATE DATABASE airwingback;
\c airwingback;
CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    datanascimento DATE NOT NULL,
    email VARCHAR(50) NOT NULL, 
    cpf VARCHAR(11) NOT NULL,
    telephone VARCHAR(11) NOT NULL,
    sexo VARCHAR(1) NOT NULL,
    senha VARCHAR(50) NOT NULL
);
CREATE TABLE viagens(
    id SERIAL PRIMARY KEY,
    origem VARCHAR(50) NOT NULL,
    destino VARCHAR(50) NOT NULL,
    data DATE NOT NULL,
    horario TIME NOT NULL,
    preco REAL NOT NULL,
    id_usuario INTEGER NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES users(id)
);