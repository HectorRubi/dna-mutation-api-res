const mysql = require('mysql');

class Database {
  constructor() {
    this.conn = mysql.createConnection({
      host: '',
      user: '',
      password: '',
      database: ''
    })
    this.startConnection()
  }

  addMutation() {
    this.conn.query('INSERT INTO mutations (type) VALUES ("1")', function(err, results) {
      if (err) console.log(err.message)
      if(results) console.log(results)
    })
  }

  addNoMutation() {
    this.conn.query('INSERT INTO mutations (type) VALUES ("0")', function(err, results) {
      if (err) console.log(err.message)
      if(results) console.log(results)
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