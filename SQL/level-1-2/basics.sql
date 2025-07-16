create database college;

create database if not exists instagram;


-- we use use key word to indicate to the current data base-- 

use instagram;

create table users(

id INT PRIMARY KEY,
age INT,
name VARCHAR(30) NOT NULL,
username VARCHAR(50) UNIQUE,
followers INT default 0,
following INT default 0,
constraint age_check CHECK (age >= 18)

);

CREATE TABLE posts(
id INT PRIMARY KEY,
content VARCHAR(100),
user_id INT,
FOREIGN KEY (user_id) REFERENCES users(id)
);

-- if we want to insert data(rows) into the table then we use insert command--  

insert into users
(id,age,name,username,followers,following)
values
(1,25,"Aas","aas@gmail,com",100,28),
(2,34,"bob","bob@gmail,com",200,100),
(3,32,"jimmy","jimmy@gmail,com",102,200),
(4,32,"nethan","nethan@gmail,com",1002,100),
(5,20,"Elis","elis@gmail,com",12,23);

-- if we want to get a perticular columns data then we can use select-- 

select id, name , email from users;

select * from users
where followers >= 200; 

select * from users
where age >= 30 and followers >= 200;

--  limit means it shows that we only have limit number rows not more than that.-- 

select id, name, followers from users
limit 2;

select * from users
order by followers desc;

-- aggregitae -> aggrigate function gives us a single value after performing an opration to a single column-- 

select max(followers) from users;

select age, count(id) from users
group by age;

select age, max(followers) from users
group by age
having max(followers) >= 200;

-- update -> we use udate to update all the rows for a perticar column on some given condition or without it
update users
set followers = 500
where id >= 1;

set SQL_SAFE_UPDATES = 0;

select * from users;


--  delete -> it will delete the entire row if the condition meet and if we use it without condition then it will delete all rows 

delete from users
where id = 5;


-- alter query -> when we want to update columns, such as add update or delete a column-- 

alter table users
add column city varchar(30) default "Delhi";

select * from users;

alter table users
drop column age;

alter table users
change column username email varchar(50) default "Not found";

-- change vs modify we use method when we have to change column name but use modify when only have to change data type or r default value--  

insert into users
(id,name,email,followers,following)
values
(6,"Elis","elis@gmail,com",12,23);


alter table users
modify column city varchar(50) default "Mumbai";










