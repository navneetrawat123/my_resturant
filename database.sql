-- Run this file once in phpMyAdmin / MySQL CLI to set up the database.
CREATE DATABASE IF NOT EXISTS restaurant_db;
USE restaurant_db;

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at DATETIME NOT NULL
);

CREATE TABLE IF NOT EXISTS sessions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    token VARCHAR(64) NOT NULL UNIQUE,
    created_at DATETIME NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS contact_messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL,
    message TEXT NOT NULL,
    created_at DATETIME NOT NULL
);

CREATE TABLE IF NOT EXISTS menu_items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(120) NOT NULL,
    description VARCHAR(255),
    price DECIMAL(8,2) NOT NULL,
    category VARCHAR(60) NOT NULL,
    image VARCHAR(255)
);

INSERT INTO menu_items (name, description, price, category, image) VALUES
('Paneer Tikka Masala', 'Grilled cottage cheese in a rich tomato-butter gravy', 249.00, 'Starters', 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=400'),
('Tandoori Chicken', 'Char-grilled chicken marinated in yogurt and spices', 329.00, 'Starters', 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=400'),
('Butter Chicken', 'Slow-cooked chicken in creamy tomato sauce', 349.00, 'Main Course', 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=400'),
('Dal Makhani', 'Black lentils simmered overnight with butter and cream', 229.00, 'Main Course', 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=400'),
('Veg Biryani', 'Fragrant basmati rice layered with spiced vegetables', 259.00, 'Main Course', 'https://images.unsplash.com/photo-1563379091339-03246963d96c?q=80&w=400'),
('Gulab Jamun', 'Soft milk dumplings soaked in rose-cardamom syrup', 129.00, 'Desserts', 'https://images.unsplash.com/photo-1666190092208-2d3993ba7cbe?q=80&w=400'),
('Masala Chai', 'Classic spiced Indian tea', 79.00, 'Beverages', 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?q=80&w=400');
