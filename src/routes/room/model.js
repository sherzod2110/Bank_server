import { fetchData } from "../../utils/postgres.js";


const GETROOM = `
    SELECT
        r.room_id,
        r.room_number,
        r.room_meter_square,
        r.room_sum_square,
        cl.complex_name,
        c.company_name,
        c.company_img
    FROM
        company c
    JOIN
        complex cl
    ON
        c.company_id = cl.company_id
    JOIN
        rooms r
    ON
        cl.complex_id = r.complex_id;
`;

const GETROOMIDCL = `
    select
        r.room_id,
        r.room_number,
        r.room_meter_square,
        r.room_sum_square,
        c.complex_name,
        c.company_id
    from
        complex c
    join
        rooms r
    on
        c.complex_id = r.complex_id
    where 
        r.complex_id = $1
`

const GETIDROOM = `
    select
        c.complex_name,
        c.company_id,
        r.room_id,
        r.room_number,
        r.room_meter_square,
        r.room_sum_square
    from
        complex c
    join
        rooms r
    on
        c.complex_id = r.complex_id
    where 
        r.room_id = $1
`

const POSTROOM = `
    insert into rooms(room_number, room_meter_square, room_sum_square, complex_id) values($1, $2, $3, $4)
`

const DELETEROOM = `
    delete from rooms where room_id = $1
`


export const getroom = () => fetchData(GETROOM);
export const postroom = (room_number, room_meter_square, room_sum_square, complex_id) => fetchData(POSTROOM, room_number, room_meter_square, room_sum_square, complex_id)
export const deleteroom = (id) => fetchData(DELETEROOM, id)
export const getroomcl = (id) => fetchData(GETROOMIDCL, id)
export const getroomid = (id) => fetchData(GETIDROOM, id)