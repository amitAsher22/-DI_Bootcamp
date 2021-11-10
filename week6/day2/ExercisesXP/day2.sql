-- Database: public

-- DROP DATABASE public;

-- CREATE DATABASE public
--     WITH 
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'Hebrew_Israel.1252'
--     LC_CTYPE = 'Hebrew_Israel.1252'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1;

-- All items, ordered by price (lowest to highest).
-- SELECT * FROM items ORDER BY Small_Desk DESC;

-- Items with a price above 80 (80 included), ordered by price (highest to lowest).
-- SELECT * FROM items ORDER BY small_desk >= '80' ASC ;

-- The first 3 customers in alphabetical order (A-Z) – exclude ‘id’ from the results.
-- SELECT * FROM customers ORDER BY  first_name ASC LIMIT 3;

-- All last names (no other columns!), in reverse alphabetical order (Z-A)
-- SELECT last_name FROM customers ORDER BY last_name DESC;

-- /////////////////////////////////////////////

-- Create a table named purchases. It should have 2 columns : customer_id and item_id. These columns are references from the tables customers and items. Edit the data of the purchases table:
-- Add a row which references a customer by ID, but does not reference an item by ID (leave it blank). Does this work? Why/why not?
-- Add 5 rows which reference existing customers and items.




-- Add a row which references a customer by ID, but does not reference an item by ID (leave it blank). Does this work? Why/why not?
-- this is work - because we dont write NOT NULL after type 


-- Add 5 rows which reference existing customers and items.

-- CREATE TABLE purchases(
-- 	customer_id SMALLINT,
-- 	item_id SMALLINT
-- );

-- INSERT INTO purchases(customer_id, item_id) VALUES (1,3), (2,2), (3,2), (4,1), (5,3);
-- SELECT * FROM purchases;

-- All purchases. Is this information useful to us? NO useful

-- All purchases, joining with the customers table

-- SELECT customers.id_customer, customers.first_name, customers.last_name
-- FROM customers
-- INNER JOIN purchases
-- ON customers.id_customer = purchases.customer_id;






