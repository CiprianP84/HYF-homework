-- 1. Create new database
CREATE DATABASE db_school;
USE db_school;
-- 2. Create class table
CREATE TABLE `Class` (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    begins DATE,
    ends DATE
);
-- 3. Create students table
CREATE TABLE Student (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255),
    phone VARCHAR(20),
    class_id INT,
    FOREIGN KEY (class_id) REFERENCES `Class`(id)
);

-- 4. Create an index on the name column of the student table.
CREATE INDEX idx_student_name ON Student(name);

-- 5. Add status column to class table 
ALTER TABLE `Class`
ADD COLUMN status ENUM('not-started', 'ongoing', 'finished') NOT NULL DEFAULT 'not-started';

