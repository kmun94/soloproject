CREATE DATABASE todos_database;

--\c into todo_database
--\dt

CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    text VARCHAR(255),
    completed BOOLEAN DEFAULT FALSE
);

--/psql -d <url from elephantSQL> -f starwars_postgres_create.sql
