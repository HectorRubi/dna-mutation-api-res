const mysql = require('mysql');
require('dotenv').config();
const { env } = process;

class Database {
  constructor() {
    console.log(env)
    this.conn = mysql.createConnection({
      host: env.HOST,
      user: env.USERNAME,
      password: env.PASSWORD,
      database: env.DATABASE
    })
    this.startConnection()
  }

  addMutation() {
    return new Promise((resolve, reject) => {
      this.conn.query('INSERT INTO mutations (type) VALUES ("1")', function(err, results) {
        if (err) reject(err.message)
        resolve(results)
      })
    })
  }

  addNoMutation() {
    return new Promise((resolve, reject) => {
      this.conn.query('INSERT INTO mutations (type) VALUES ("0")', function(err, results) {
        if (err) reject(err.message)
        resolve(results)
      })
    })
  }

  getCountMutations() {
    return new Promise((resolve, reject) => {
      this.conn.query('SELECT COUNT(*) AS count FROM mutations WHERE TYPE = "1"', function(err, results) {
        if (err) reject(err.message)
        if(results) resolve(results[0].count)
      })
    })
  }

  getCountNoMutations() {
    return new Promise((resolve, reject) => {
      this.conn.query('SELECT COUNT(*) AS count FROM mutations WHERE TYPE = "0"', function(err, results) {
        if (err) reject(err.message)
        if(results) resolve(results[0].count)
      })
    })
  }

  startConnection() {
    this.conn.connect()
  }

  endConnection() {
    this.conn.end()
  }
}

module.exports = Database