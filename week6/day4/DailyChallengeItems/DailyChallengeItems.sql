

-- There should be a one to many relationship between the orders table and the items table. An order can have many items, but an item can belong to only one order

CREATE TABLE items (
  item_id SERIAL PRIMARY KEY,
  price bigint NOT NULL,
  title VARCHAR(30) NOT NULL
);


CREATE TABLE orders (
  costumerfisrtname TEXT NOT NULL,
  costumerlastname VARCHAR(45) NOT NULL,
  orderDate date NOT NULL,
  ordercountry text NOT NULL,
	  fk_order_items INTEGER PRIMARY KEY,
  FOREIGN KEY ( fk_order_items) REFERENCES items(item_id) ON DELETE CASCADE
);


INSERT INTO orders ( costumerfisrtname , costumerlastname ,orderDate , ordercountry)
VALUES
('amit' , 'asher' , '2021-02-10' ,'israel' ),
('dudi' , 'asher' , '2021-03-15' ,'israel'  );



SELECT * FROM orders;