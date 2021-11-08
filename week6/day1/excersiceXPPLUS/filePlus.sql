-- Database: bootcamp.

-- DROP DATABASE "bootcamp.";

-- CREATE DATABASE "bootcamp."
--     WITH 
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'Hebrew_Israel.1252'
--     LC_CTYPE = 'Hebrew_Israel.1252'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1;
	
	
-- 	CREATE TABLE students(
-- 	id_students SERIAL,
-- 	last_name VARCHAR(50),
-- 	first_name VARCHAR(50),	
-- 	birth_date DATE
		
		
		
-- 	)
	
-- 	SELECT * FROM students
	
-- 	/////////////////////////////////////////// insert

-- Insert the data seen above to the students table. Find the most efficient way to insert the data.
-- Insert your last_name, first_name and birth_date to the students table (Take a look at the id given).


-- ///
-- For the following questions, only fetch the first_names and last_names of the students.
-- INSERT INTO students (first_name,last_name,birth_date)
-- VALUES('amit', 'asher', '29/01/1995');
-- ///


-- INSERT INTO students(last_name,first_name,birth_date)
-- VALUES 
-- ('Benichou' ,'Marc','02/11/1998'),
-- ('Cohen','Yoan','03/12/2010'),
-- ('Benichou','Lea','27/07/1987'),
-- ('Dux','Amelia','07/04/1996'),
-- ('Grez','David','14/06/2003'),
-- ('Simpson','Omer','03/10/1980');



-- //////////////////////////////////////////////// Select

-- Fetch all of the data from the table.
-- Fetch all of the students first_names and last_names.
-- For the following questions, only fetch the first_names and last_names of the students.
-- Fetch the student which id is equal to 2.
-- Fetch the student whose last_name is Benichou AND first_name is Marc.
-- Fetch the students whose last_names are Benichou OR first_names are Marc.
-- Fetch the students whose first_names contain the letter a.
-- Fetch the students whose first_names start with the letter a.
-- Fetch the students whose first_names end with the letter a.
-- Fetch the students whose second to last letter of their first_names are a (Example: Leah).
-- Fetch the students whose id’s are equal to 1 AND 3 .

-- Fetch the students whose birth_dates are equal to or come after 1/01/2000. (show all their info).
-- ////
-- Fetch all of the data from the table.
-- SELECT * FROM students;
-- ///


-- ////
-- Fetch all of the students first_names and last_names.
-- SELECT first_name,last_name FROM students;
-- ///

-- ///
-- Fetch the student which id is equal to 2.
-- SELECT first_name,last_name FROM students WHERE id_students = '2';
-- ///

-- ////
-- Fetch the student whose last_name is Benichou AND first_name is Marc.
-- SELECT * FROM students WHERE last_name = 'Benichou' AND first_name = 'Marc';
-- ///

-- ///
-- Fetch the students whose last_names are Benichou OR first_names are Marc
--  SELECT * FROM students WHERE last_name = 'Benichou' OR first_name = 'Marc';
-- ///


-- ///
-- Fetch the students whose first_names contain the letter a.
-- SELECT * FROM students WHERE first_name LIKE '%a%';
-- ///

-- ///
-- Fetch the students whose first_names start with the letter a.
-- SELECT * FROM students WHERE first_name LIKE 'a%';
-- ///

-- ///
-- Fetch the students whose first_names end with the letter a
-- SELECT * FROM students WHERE first_name LIKE '%a';
-- ///


-- ///
-- Fetch the students whose second to last letter of their first_names are a (Example: Leah).
-- SELECT * FROM students WHERE first_name LIKE '%a%' OFFSET 2 
-- /// I DONT KNOW THE ANSWER


-- ////
-- Fetch the students whose id’s are equal to 1 AND 3
-- SELECT * FROM students WHERE id_students = '3' OR id_students = '1';
-- ///


-- ////4
-- Fetch the students whose birth_dates are equal to or come after 1/01/2000. (show all their info).
SELECT * FROM students WHERE birth_date = '1/01/2000' or birth_date > '1/01/2000';




