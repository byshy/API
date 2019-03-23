const express = require('express');

const app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/', function(req, res){
  const data = [{name: "basil", age:"19"}, {name:"mohammed", age:"21"}];
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.send(data);
})


app.listen(app.get('port'), function(){
  console.log('app running');
})
