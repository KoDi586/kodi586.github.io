
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    login VARCHAR(50) NOT NULL,
    password VARCHAR(32) NOT NULL,
    email VARCHAR(100) NOT NULL,
    name VARCHAR(50) NOT NULL
);

INSERT INTO users (login, password, email, name) VALUES
('user1', MD5('password123'), 'user1@example.com', 'Иван Иванов'),
('user2', MD5('secret456'), 'user2@example.com', 'Мария Петрова'),
('user3', MD5('test789'), 'user3@example.com', 'Алексей Смирнов');