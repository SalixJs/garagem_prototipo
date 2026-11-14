create table users(
	id_user int auto_increment primary key,
    `name` varchar(150) not null,
    email varchar(150) not null unique,
    password_hash varchar(225),
    city varchar(100),
    created_at datetime not null default current_timestamp,
    updated_at datetime not null default current_timestamp on update current_timestamp
);

create table enthusiast(
	id_enthusiast bigint unsigned auto_increment primary key,
	constraint fk_enthusiast_user foreign key (id_enthusiast) references users(id_user)
);

create table preferences (
	id_preference bigint unsigned auto_increment primary key,
    language varchar(35) not null default 'pt-br',
    font_size smallint unsigned not null default 16,
    color varchar(30),
    source varchar(50),
    fk_user bigint unsigned not null unique,
    constraint fk_preferences_user foreign key (fk_user) references user(id_user)
)
