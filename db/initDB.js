require('dotenv').config();

const { getConnection } = require('./db');

async function main() {
  let connection;

  try {
    connection = await getConnection();

    console.log('Borrando tablas existentes');
    await connection.query('DROP TABLE IF EXISTS users');
    await connection.query('DROP TABLE IF EXISTS links');
    await connection.query("DROP TABLE IF EXISTS votes");


    console.log('Creando tablas');

    await connection.query(`
      CREATE TABLE users (
        id INTEGER PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR (100) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        password VARCHAR(100) NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );
    `);

    await connection.query(`
    CREATE TABLE link (
      id INTEGER PRIMARY KEY AUTO_INCREMENT,
      user_id INTEGER NOT NULL,
      url VARCHAR(280) NOT NULL,
      created_link DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users(id)
      );
  `);

  await connection.query(`
      CREATE TABLE votes (
        id INTEGER PRIMARY KEY AUTO_INCREMENT,
        link_id INTEGER NOT NULL,
        vote TINYINT NOT NULL,
        date DATETIME NOT NULL,
        user_id INTEGER NOT NULL,
        lastUpdate DATETIME NOT NULL,
        FOREIGN KEY (user_id) REFERENCES users(id),
        FOREIGN KEY (link_id) REFERENCES link(id)
      )
    `);


  } catch (error) {
    console.error(error);
  } finally {
    if (connection) connection.release();
    process.exit();
  }
}

main();
