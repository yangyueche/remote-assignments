const express = require('express');//express 套件載入到程式中
const cookieParser = require('cookie-parser');
const { render } = require('pug');

const app = express();//產生 Express Application 物件

app.use(cookieParser());
app.set('view engine', 'pug');


//<Assignment 1>
app.get('/', (req, res) => {
  res.render("index")
});



//<Assignment 2>
app.get('/data', (req, res) => {
  if (!req.query.number) {//檢查變數是否存在
    res.send("<h1>Lack of Parameter<h1>");
  } else if (isNaN(req.query.number)) {
    res.send("<h1>Wrong Parameter<h1>");
  } else if (req.query.number) {
    const result = ((1 + Number(req.query.number)) * Number(req.query.number)) / 2;
    res.send(`<h1>${result}<h1>`);
  }
})



//<Assignment 3>
app.use(express.static('public'));//如果要提供影像、CSS 檔案和 JavaScript 檔案等之類的靜態檔案，請使用 Express 中的 express.static 內建中介軟體函數。

app.get('/sum.html', (req, res) => {
  if (!req.query.number) {//檢查變數是否存在
    res.send("<h1>Lack of Parameter<h1>");
  } else if (isNaN(req.query.number)) {
    res.send("<h1>Wrong Parameter<h1>");
  } else if (req.query.number) {
    const result = ((1 + Number(req.query.number)) * Number(req.query.number)) / 2;
    res.send(`<h1>${result}<h1>`);
  }
})


//<Assignment 4>
app.get('/myName', (req, res) => {
  res.render('myName', { name: req.cookies.username });

});

app.get('/trackName', (req, res) => {
  res.cookie('username', req.query.username);
  res.redirect('/myName');
}
  // 為什麼不能用 res.render('myName', { name: req.cookies.username });
);

app.listen(3000);