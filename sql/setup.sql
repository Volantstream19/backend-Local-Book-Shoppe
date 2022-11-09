-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS authors_books;

DROP TABLE IF EXISTS books;

DROP TABLE IF EXISTS authors;

CREATE TABLE books (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title VARCHAR,
    released BIGINT,
);

CREATE TABLE authors (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR,
    dob VARCHAR,
    pob VARCHAR
);

INSERT INTO
    books (title, released)
VALUES
    ('Harry Potter', 1998),
    ('Lord of the Rings', 1954),
    ('Hobbit', 1937),
    ('Fable Haven', 2006),
    ('To kill a Mockingbird', 1998);

INSERT INTO
    authors (name, dob, pob)
VALUES
    ('J. K. Rowling', 1965, 'Yate, United Kingdom'),
    (
        'J. R. R. Tolkien',
        1892,
        'Bloemfontein, South Africa'
    ),
    (
        'J. R. R. Tolkien',
        1892,
        'Bloemfontein, South Africa'
    ),
    ('Brandon Mull', 1974, 'Utah'),
    ('Harper Lee', 1926, 'Monroeville, Alabama');

    CREATE TABLE authors_books(
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    author_id BIGINT,
    book_id BIGINT,
    FOREIGN KEY (author_id) REFERENCES authors(id),
    FOREIGN KEY (book_id) REFERENCES books(id)
    );

INSERT INTO 
    authors_books (author_id, book_id)
VALUES
    (1, 1),
    (2, 2),
    (3, 3),
    (4, 4),
    (5, 5);