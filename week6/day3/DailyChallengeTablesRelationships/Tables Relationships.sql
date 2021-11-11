



-- CREATE TABLE Customer (
--   Customer_id SERIAL PRIMARY KEY,
--   fullName VARCHAR(30) NOT NULL,
--   city text NOT NULL
-- );



-- CREATE TABLE Customer_profile (
--   profile_id SERIAL REFERENCES Customer(Customer_id),
--   first_name VARCHAR(45) NOT NULL,
--   last_name VARCHAR(45) NOT NULL,
--   customer_date DATE 
-- );


-- INSERT INTO Customer (fullName ,city )
-- VALUES('amit asher' , 'herzeliya'),
-- ('moshe cohen' , 'haifa')



-- INSERT INTO Customer_profile (first_name ,last_name ,customer_date )
-- VALUES
-- ('amit' , 'asher' , '1995-01-29'),
-- ('nadav' , 'levi' , '1995-03-20');





-- ///////////////////////////////////////////////


-- SELECT *
-- FROM Customer
-- FULL OUTER JOIN Customer_profile
-- ON Customer.Customer_id = Customer_profile.profile_id;


-- SELECT *
-- FROM Customer
-- Left Join Customer_profile
-- ON Customer.Customer_id = Customer_profile.profile_id;


-- SELECT *
-- FROM Customer
-- Right Join Customer_profile
-- ON Customer.Customer_id = Customer_profile.profile_id;


-- SELECT *
-- FROM Customer
-- Full Outer Join Customer_profile
-- ON Customer.Customer_id = Customer_profile.profile_id;


 


-- ///////////////////////////////////////////////////////////////////////////////////////////////////
-- Create 2 other tables : Product and Order. Order is a table with a Many to Many relationship with the Customer and Product tables. Use all the types of Joins to display the data.


-- CREATE TABLE product  (
--    product_id SERIAL PRIMARY KEY,
--    title text,
--    price money
-- );

-- CREATE TABLE orderAll (
--    order_id SERIAL PRIMARY KEY,
--    order_number bigint ,
-- 	 order_date DATE
-- );

-- CREATE TABLE product_order(

--    orderAll_id_fk INTEGER  NOT NULL REFERENCES orderAll (order_id)
--    ON DELETE CASCADE 
--    ON UPDATE CASCADE,

--    product_id_fk INTEGER  NOT NULL REFERENCES product (product_id)
--    ON DELETE CASCADE 
--    ON UPDATE CASCADE
	

--   )

-- SELECT * FROM product;




-- /////////////////// inser into


-- INSERT INTO product ( title , price)
-- VALUES
-- ('phone' , 2500),
-- ('glass' , 40)



-- INSERT INTO orderAll (order_number , order_date)
-- VALUES(124 , '2021-04-23'),
-- (154 , '2021-06-25')





-- INSERT INTO product_order (orderAll_id_fk, product_id_fk)
-- VALUES
-- (
-- 	(SELECT order_id FROM orderAll WHERE order_id = 1),
-- 	(SELECT product_id FROM product WHERE title='phone')

-- )






-- SELECT title
-- FROM  product_order
-- INNER JOIN product ON product_id = product_id_fk
-- INNER JOIN orderAll ON  order_id = orderAll_id_fk
-- WHERE title = 'phone'
-- GROUP BY title












