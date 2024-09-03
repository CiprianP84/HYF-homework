-- Table Customers
CREATE TABLE Customers (
    customer_id INT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(100),
    phone_number VARCHAR(20),
    driver_license_number VARCHAR(50)
);

-- Table Cars
CREATE TABLE Cars (
    car_id INT PRIMARY KEY,
    brand VARCHAR(50),br
    model VARCHAR(50),
    year INT,
    license_plate VARCHAR(20),
    daily_rental_rate DECIMAL(10, 2),
    branch_id INT,
    FOREIGN KEY (branch_id) REFERENCES Branches(branch_id)
);

-- Table [Rental] Branches
CREATE TABLE Branches (
    branch_id INT PRIMARY KEY,
    branch_name VARCHAR(100),
    location VARCHAR(100)
);

-- Table Rentals 
-- Many-to-Many relationship between Customers and Cars
CREATE TABLE Rentals (
    rental_id INT PRIMARY KEY,
    customer_id INT,
    car_id INT,
    rental_date DATE,
    return_date DATE,
    total_amount DECIMAL(10, 2),
    FOREIGN KEY (customer_id) REFERENCES Customers(customer_id),
    FOREIGN KEY (car_id) REFERENCES Cars(car_id)
);

-- Table Maintenance Log
-- One-to-Many relationship with Cars
CREATE TABLE MaintenanceLogs (
    maintenance_id INT PRIMARY KEY,
    car_id INT,
    maintenance_date DATE,
    details TEXT,
    cost DECIMAL(10, 2),
    FOREIGN KEY (car_id) REFERENCES Cars(car_id)
);

-- Table Payments
-- One-to-Many relationship with Rentals
CREATE TABLE Payments (
    payment_id INT PRIMARY KEY,
    rental_id INT,
    payment_date DATE,
    amount DECIMAL(10, 2),
    payment_method VARCHAR(50),
    transaction_id VARCHAR(50),
    FOREIGN KEY (rental_id) REFERENCES Rentals(rental_id)
);

-- Table Insurance
-- One-to-Many relationship with Cars
CREATE TABLE Insurance (
    insurance_id INT PRIMARY KEY,
    car_id INT,
    insurance_company VARCHAR(100),
    policy_number VARCHAR(50),
    coverage_amount DECIMAL(10, 2),
    start_date DATE,
    end_date DATE,
    FOREIGN KEY (car_id) REFERENCES Cars(car_id)
);
