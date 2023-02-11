import pg from 'pg';

const { Pool } = pg;

const pool = new Pool({
  user: "ainwissk",
  host: "otto.db.elephantsql.com",
  database: "ainwissk",
  password: "Xx5Sn-OteE3ipjO07kc0WBXcfZoBWamt",
  port: "5432"
}
);

export const fetchData = async (SQL, ...params) => {
  const client = await pool.connect();

  try{
    const { rows } = await client.query(SQL, params.length ? params : null);
    return rows;
  }finally{
    client.release()
  }
}