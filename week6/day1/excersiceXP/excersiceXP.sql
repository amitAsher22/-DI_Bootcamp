-- Database: Hollywood

--  DROP DATABASE "Hollywood"

--  CREATE DATABASE "Hollywood"
--     OWNER = postgres
--   LC_COLLATE = 'Hebrew_Israel.1252'
--   LC_CTYPE = 'Hebrew_Israel.1252'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1;
	
-- 	CREATE TABLE citys (
--  		name_city VARCHAR (50) NOT NULL,
--  		people_city VARCHAR (50) NOT NULL,
-- 		age_city SMALLINT NOT NULL
--  	)
	
-- 	SELECT * FROM citys;


--    SELECT age_city , people_city 
--    FROM citys;

--   INSERT INTO citys (name_city , people_city , age_city)
--   VALUES ('herzeliya' , 100000 , 30),
--   ('tel aviv' , 300000 , 20);
  
--   SELECT 
--   name_city ,
--   people_city ,
--   age_city
  
--   FROM 
--   citys;
  
  
SELECT * FROM citys LIMIT 4;
  
 
  
  
  
  