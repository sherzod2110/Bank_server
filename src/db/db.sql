drop table if exists company cascade;

create table company(
    company_id uuid default uuid_generate_v4() primary key,
    company_name varchar(64) not null company_img varchar not null
);

alter table
    company
add
    column company_img varchar;

update
    company
set
    company_img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3oQa8gjyfAgPY1EshuRQ2Qf7hhfBMIQhGbA&usqp=CAU'
where
    company_id = '5e6e102e-9183-4119-bcc3-c3297c6a61be';

update
    company
set
    company_img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRheuiEQYXF6FTfH4vW7Mni51W46HAYzmzkqg&usqp=CAU'
where
    company_id = 'aa9195f9-6870-4941-8901-fd1cf88f9688';

insert into
    company(company_name, company_img)
values
(
        'Toshkent city',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3oQa8gjyfAgPY1EshuRQ2Qf7hhfBMIQhGbA&usqp=CAU'
    ),
    (
        'Golden house',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRheuiEQYXF6FTfH4vW7Mni51W46HAYzmzkqg&usqp=CAU'
    );

drop table if exists complex cascade;

create table complex(
    complex_id uuid default uuid_generate_v4() primary key,
    complex_name varchar(64) not null,
    company_id uuid,
    foreign key(company_id) references company(company_id) on delete cascade
);

insert into
    complex(complex_name, company_id)
values
(
        'Chilonzor',
        'b5f525c7-b9fb-4243-a929-26c55fb4907c'
    );

insert into
    complex(complex_name, company_id)
values
(
        'Olmazor',
        '64357b6f-bbb2-40ad-b7f4-b5814a2dd748'
    );

update
    complex
set
    complex_name = 'Golden complex'
where
    complex_id = '6181c4bb-e0da-46db-b779-3448184b872b';

drop table rooms;

create table rooms(
    room_id uuid default uuid_generate_v4() primary key,
    room_number int not null,
    room_meter_square int not null,
    room_sum_square bigint not null,
    complex_id uuid not null,
    foreign key(complex_id) references complex(complex_id) on delete cascade
);

insert into
    rooms(
        room_number,
        room_meter_square,
        room_sum_square,
        complex_id
    )
values
    (
        2,
        50,
        5000000,
        '4d59c5c6-6d58-4830-9de0-8f78326e4919'
    ),
    (
        3,
        40,
        4000000,
        '4d59c5c6-6d58-4830-9de0-8f78326e4919'
    ),
    (
        4,
        50,
        30000000,
        '4d59c5c6-6d58-4830-9de0-8f78326e4919'
    );

create table banks(
    bank_id uuid default uuid_generate_v4() primary key,
    bank_name varchar(64) not null,
    bank_max_sum bigint not null,
    bank_percent int not null,
    bank_max_year int not null
);

insert into
    banks(
        bank_name,
        bank_max_sum,
        bank_percent,
        bank_max_year
    )
values
    ('Bank 19', 1500000000000, 5, 12);


update banks set bank_max_year = 5 where bank_id = 'f2f57e86-62fa-44d7-8073-e74f74c814e8';

SELECT
    rooms.room_id,
    rooms.room_number,
    rooms.room_meter_square,
    rooms.room_sum_square,
    complex.complex_name,
    company.company_name,
    company.company_img
FROM
    company
    JOIN complex ON company.company_id = complex.company_id
    JOIN rooms ON complex.complex_id = rooms.complex_id;

SELECT
    complex.complex_id,
    complex.complex_name,
    company.company_name,
    company.company_img
FROM
    company
    JOIN complex ON company.company_id = complex.company_id;

select
    c.company_id,
    c.company_name,
    c.company_img,
    l.complex_id,
    l.complex_name
from
    company c
    inner join complex l on c.company_id = l.complex_id;




    -------------------


    update banks set bank_max_year = 15 where bank_id = 'd150d096-d9ec-4842-bfe5-71ae8cea626b';
    update banks set bank_max_year = 10 where bank_id = 'ab8e9734-d28b-4640-aefb-2be84223e411';
    update banks set bank_max_year = 5 where bank_id = 'c6368448-8892-43f7-8ed3-62df9bfb0f10';
    update banks set bank_max_year = 15 where bank_id = '7fd8d21d-51fb-4ea6-9fc9-0e2667ef08de';
    update banks set bank_max_year = 10 where bank_id = '803875a2-d830-4e59-a6ae-1a5ebf493249';
    update banks set bank_max_year = 15 where bank_id = 'a0e22b54-f211-4179-8952-db0bb262c918';

    update banks set bank_max_year = 5 where bank_id = '276a6d72-4ba6-46ff-9252-d3f41c237137';
    update banks set bank_max_year = 15 where bank_id = 'd19a1b9d-8105-4305-ba1c-654fe1719fa6';
    update banks set bank_max_year = 5 where bank_id = 'dd2415f5-5e1a-43f4-bad7-f016c527bf8a';
    update banks set bank_max_year = 10 where bank_id = '75ed60c6-ed2d-4fa3-87da-84140d35371c';
    update banks set bank_max_year = 5 where bank_id = 'cb87d3f8-b495-4141-b5ae-11db6d0de32d';
