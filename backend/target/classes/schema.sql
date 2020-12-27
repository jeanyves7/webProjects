Drop table if exists items;

Create Table items(
    id SERIAL ,
    name varchar(50),
    type Varchar(50),
    price varchar(70),
    description varchar (1000),
    img varchar(50), PRIMARY KEY (id)
);


Drop table if exists clients;
Create TABLE IF NOT EXISTS clients(
    idC SERIAL,
    email VARCHAR(1000),
    password varchar(50),
    firstN VARCHAR(50),
    lastN VARCHAR(50),
    primary key (idC)
);

