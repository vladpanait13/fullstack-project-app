CREATE DATABASE invoice_db;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    name VARCHAR(100)
);

CREATE TABLE invoices (
    id SERIAL PRIMARY KEY,
    vendor_name VARCHAR(255) NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    due_date DATE NOT NULL,
    description TEXT,
    user_id INT REFERENCES users(id),
    paid BOOLEAN DEFAULT FALSE
);

GRANT ALL PRIVILEGES ON DATABASE invoice_db TO <username>;

