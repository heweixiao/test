const express = require('express');
const app = new express();
app.use(express.static('./'))
app.get('/', function(req, res) {
  res.render(__dirname + '/index.html');
});
app.get('/test',function(req, res) {
  console.log(req);
})
app.listen(3000);