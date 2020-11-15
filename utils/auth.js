const fs = require('fs');
const os = require('os');

class Auth {
  static readFile(path) {
    return new Promise((resolve, reject) => {
      fs.readFile(path, (err, data) => {
        if(err) reject(err)
        resolve(data)
      })
    })
  }

  static async getAuthData() {
    try {
      const home = os.homedir()
      const fileName = '/auth.dat'
      const dir = home + fileName
      const data = await Auth.readFile(dir)
      const connection = JSON.parse(data)

      return connection
    } catch (error) {
      throw error
    }
  }
}

module.exports = Auth