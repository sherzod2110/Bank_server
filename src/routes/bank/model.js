import { fetchData } from "../../utils/postgres.js";


const GETBANK = `
    select * from banks
`

const POSTBANK = `
    insert into banks(bank_name, bank_max_sum, bank_percent, bank_max_year) values($1, $2, $3, $4)
`

const DELETEBANK = `
    delete from banks where bank_id = $1
`

const GETBANKID =  `
    select * from banks where bank_max_year = $1
`

const GETBANKID2 = `
    select * from banks where bank_max_year = $1 order by bank_max_sum;
`

export const getbank = () => fetchData(GETBANK) 
export const postbank = (bank_name, bank_max_sum, bank_percent, bank_max_year) => fetchData(POSTBANK, bank_name, bank_max_sum, bank_percent, bank_max_year)
export const deletebank = (id) => fetchData(DELETEBANK, id)
export const getbankid = (id) => fetchData(GETBANKID, id)
export const getbankid2 = (id) => fetchData(GETBANKID2, id)