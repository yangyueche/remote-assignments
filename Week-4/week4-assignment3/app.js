const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'pug');

//create connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'assignment'
});

// Check if Connected
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySql Connected...');
});

app.get('/home', (req, res) => {
  res.render('homePage');
});

app.post('/sign_in', (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  let sql = `SELECT * FROM user WHERE email = '${email}' AND password = '${password}';`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    if (result[0] == undefined) {
      res.render('homePage', { message: 'Incorrect Email or Password' });
    } else {
      res.redirect('/member');
    }
  })
});

app.post('/sign_up', (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  let sql = `SELECT * from user WHERE email='${email}';`
  db.query(sql, (err, result) => {
    if (err) throw err;
    if (result[0]) {
      res.render('homepage', { message: 'Email has been used' });
    } else {
      let sql = `INSERT INTO user (email, password) VALUES ('${email}', '${password}');`;
      db.query(sql, (err, result) => {
        if (err) throw err;
        res.redirect('/member');
      })
    }
  })
});

app.get('/member', (req, res) => {
  res.render('memberPage');
})

app.listen(3000);