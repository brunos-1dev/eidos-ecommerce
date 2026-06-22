import { createPool } from 'mariadb';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, '../../.env') });

const pool = createPool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  connectionLimit: 10,
  allowPublicKeyRetrieval: true,
});

export async function query(sql, params = []) {
  let connection;
  try {
    connection = await pool.getConnection();
    return await connection.query(sql, params);
  } finally {
    if (connection) connection.release();
  }
}

export default pool;
