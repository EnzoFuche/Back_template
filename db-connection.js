require("dotenv").config();

const mysql = require("mysql2");

const config = {
database : process.env.DB_NAME,
port : rocess.env.DB_PORT,
user : process.env.DB_USER,
password : process.env.DB_PASSWORD,
host : process.env.DB_HOST,
};

if (process.env.NODE_ENV === "test") {
    config = {
        database : process.env.DB_NAME,
        port : rocess.env.DB_PORT,
        user : process.env.DB_USER,
        password : process.env.DB_PASSWORD,
        host : process.env.DB_HOST,
    };
}

const connection = mysql.createPool(config);

const query = (...args) => {
    return new Promise((resolve, reject) => {
      connection.query(...args, (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  };

  const closeConnection = () => {
    return new Promise((resolve, reject) => {
      if (connection) {
        connection.end((err) => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
      } else {
        resolve();
      }
    });
  };

module.exports = {connection, closeConnection, query}; 