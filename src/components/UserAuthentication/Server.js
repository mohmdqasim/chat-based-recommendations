// Server.js
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./users.db');

db.serialize(() => {
  db.run("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT UNIQUE)");
});

const insertUser = (email) => {
  db.run(`INSERT INTO users (email) VALUES (?)`, [email], function(err) {
    if (err) {
      return console.log(err.message);
    }
    console.log(`A row has been inserted with email: ${email}`);
  });
};

module.exports = { insertUser };
