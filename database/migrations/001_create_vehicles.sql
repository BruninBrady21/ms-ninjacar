CREATE TABLE vehicles (

    id SERIAL PRIMARY KEY,
    brand VARCHAR(100) NOT NULL,
    model VARCHAR(100) NOT NULL,
    manufacture_year INTEGER NOT NULL,
    plate VARCHAR(10) NOT NULL UNIQUE,
    color VARCHAR(100) NOT NULL

);