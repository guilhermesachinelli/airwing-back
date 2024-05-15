CREATE DATABASE airwingback;

\c airwingback;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    datanascimento DATE NOT NULL,
    idade INTEGER NOT NULL,
    email VARCHAR(50) NOT NULL, 
    cpf VARCHAR(11) NOT NULL,
    telephone VARCHAR(11) NOT NULL,
    sexo VARCHAR(1) NOT NULL,
    senha VARCHAR(50) NOT NULL
);

CREATE TABLE voos(
    id SERIAL PRIMARY KEY,
    origem VARCHAR(50) NOT NULL,
    destino VARCHAR(50) NOT NULL,
    data DATE NOT NULL,
    horario TIME NOT NULL,
    preco DECIMAL(10,2) NOT NULL,
    companhia VARCHAR(50) NOT NULL
);

CREATE TABLE hotel(
    id SERIAL PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    endereco VARCHAR(50) NOT NULL,
    preco DECIMAL(10,2) NOT NULL,
    telefone VARCHAR(11) NOT NULL
);

CREATE TABLE reservavoo(
    id SERIAL PRIMARY KEY,
    id_voo INTEGER NOT NULL,
    id_usuario INTEGER NOT NULL,
    FOREIGN KEY (id_voo) REFERENCES voos(id),
    FOREIGN KEY (id_usuario) REFERENCES users(id)
);
CREATE TABLE reservahotel(
    id SERIAL PRIMARY KEY,
    id_hotel INTEGER NOT NULL,
    id_usuario INTEGER NOT NULL,
    FOREIGN KEY (id_hotel) REFERENCES hotel(id),
    FOREIGN KEY (id_usuario) REFERENCES users(id)
);
CREATE TABLE pacote(
    id SERIAL PRIMARY KEY,
    id_reservavoo INTEGER NOT NULL,
    id_reservahotel INTEGER NOT NULL,
    preco DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (id_reservavoo) REFERENCES reservavoo(id),
    FOREIGN KEY (id_reservahotel) REFERENCES reservahotel(id)
);
