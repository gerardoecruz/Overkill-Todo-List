-- THIS IS ALL MY DATABASE BUILDING 


CREATE DATABASE TodoList;

CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);

CREATE TABLE users(
    user_id VARCHAR(255) PRIMARY KEY,
    password VARCHAR(255)
);

ALTER TABLE todo
    ADD COLUMN user_id VARCHAR(255)
    REFERENCES users(user_id);