import { fetchData } from "../../utils/postgres.js";

const GETCOMPANYID = `
    select 
        *
    from
        company
    where 
        company_id = $1
`;

const GETCOMPANYCOMPLEX = `
    select 
        c.company_id,
        c.company_name,
        c.company_img,
        l.complex_id,
        l.complex_name
    from
        company c 
    inner join 
        complex l
    on
        c.company_id = l.complex_id
`;

const GETCOMPANY = `
    select * from company
`;

const POSTCOMPANY = `
    insert into company(company_name, company_img) values($1, $2)
`;

const DELETECOMPANY = `
    delete from company where company_id = $1
`;

export const company = () => fetchData(GETCOMPANY);
export const companyid = (id) => fetchData(GETCOMPANYID, id);
export const postcompany = (company_name, company_img) =>
  fetchData(POSTCOMPANY, company_name, company_img);
export const deletecompany = (id) => fetchData(DELETECOMPANY, id);
export const companieslex = () => fetchData(GETCOMPANYCOMPLEX);
