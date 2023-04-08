
-	dbms - database management system

- 2 types of databases:
	- Relational databases (SQL)
	- Non-relational databases (NoSQL)

### Commands:

- **psql *db_name* *username***
	- connect to a database
	- e.g.: "psql test andreiz"


- **sudo su postgres**
	- connect to postgres account


- **CREATE TABLE table_name (col_1 datatype, col_2 datatype, col_3 datatype);**
	- create table called "table_name" with 3 columns, each of type "datatype"
	- e.g.: "CREATE TABLE users(name text, age smallint, birthday date)"
	- e.g.: "CREATE TABLE login(id serial NOT NULL PRIMARY KEY, secret VARCHAR(100) NOT NULL, name text UNIQUE NOT NULL)"


- **INSERT INTO table_name (col_1, col_2, col_3) VALUES (val_1, val_2, val_3);**
	- insert into table_name values corresponding to columns
	- e.g. "INSERT INTO users (name, age, birthday) VALUES ('andrei', 27, '1992-05-15')"


- **SELECT col_1, col_2, col_3 FROM table_name;**
	- select columns from table table
	- e.g. "SELECT name, age FROM users"


- **ALTER TABLE table_name ADD column datatype;**
	- add another column to table
	- e.g. "ALTER TABLE users ADD score smallint"


- **UPDATE table_name SET some_col = some_value WHERE some_col = some_value;**
	- updates a column with new value
	- e.g.: "UPDATE users SET score=30 WHERE name='andrei'"


- **SELECT * FROM table_name WHERE col LIKE 'condition';**
	- e.g. "SELECT * FROM users WHERE name LIKE 'a%'"
		- selects all users that name start with 'a'


- **SELECT * FROM table_name ORDER BY col ASC/DESC;**


- **SELECT *FUNC*(col) FROM table_name;**
	- *FUNC* -> SUM(), AVG(), COUNT()
	- e.g. "SELECT AVG(age) FROM users;"


- **SELECT * FROM table_1 JOIN table_2 ON table_1.col_x = table_2.col_y;**
	- creates table from 2 tables based on what is specified as common
	- e.g. "SELECT * FROM users JOIN login ON users.name = login.name;"


- **DELETE FROM table_name WHERE col_x=value_x;**
	- deletes a value from the *table_name* table
	- e.g. "DELETE FROM users WHERE name='andrei';"

- **\d, \du, \q**
	- show tables, show users, exit


- useful keywords
	- **NOT NULL**
	- **PRIMARY KEY**
	- **UNIQUE**
