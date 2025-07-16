create table if not exists user(

    id varchar(30) primary key,
    username varchar(50) unique,
    email varchar(50) unique not null,
    password varchar(50) not null
);

ALTER TABLE user MODIFY id varchar(50);
