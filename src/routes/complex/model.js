import { fetchData } from "../../utils/postgres.js";

const GETCOMPLEXCOMPANYID = `
     select
          *
     from
         company c
     right join
         complex cl
     on
         c.company_id = cl.company_id
     where 
          cl.company_id = $1
     `;

const GETCOMPLEX = `
    SELECT
         complex.complex_id,
         complex.complex_name,
         company.company_name,
         company.company_img
    FROM
         company
    JOIN
         complex
    ON
         company.company_id = complex.company_id
`;

const POSTCOMPLEX = `
    insert into complex(complex_name, company_id) values($1, $2)
`;

const DELETECOMPLEX = `
    delete from complex where complex_id = $1
`;

const RoomID = `
    SELECT 
        *
    from 
        rooms 
    where 
        complex_id = $1
`;

const ComplexId = `
  SELECT * from complex where complex_id = $1
`

export const complex = () => fetchData(GETCOMPLEX);
export const postcomplex = (complex_name, company_id) => fetchData(POSTCOMPLEX, complex_name, company_id);
export const deletecomplex = (id) => fetchData(DELETECOMPLEX, id);
export const getcomplexcompanyid = (id) => fetchData(GETCOMPLEXCOMPANYID, id);
export const Roomid = (id) => fetchData(RoomID, id);
export const complexid = id => fetchData(ComplexId, id)
