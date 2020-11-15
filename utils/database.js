const mysql = require('mysql');

class Database {
  constructor() {
    this.conn = mysql.createConnection({
      host: '',
      user: '',
      password: '',
      database: ''
    })
  }

  addMutation() {
    this.conn.connect()
    conn.query('INSERT INTO mutations (type) VALUES ("1")', function(err, results) {
      if (err) console.log(err.message)
      if(results) console.log(results)
    })
    this.conn.end()
  }

  addNoMutation() {
    this.conn.connect()
    this.conn.query('INSERT INTO mutations (type) VALUES ("0")', function(err, results) {
      if (err) console.log(err.message)
      if(results) console.log(results)
    })
    this.conn.end()
  }
}

module.exports = Database