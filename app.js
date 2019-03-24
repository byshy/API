const express = require('express');

const app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/', function(req, res){
  const data = {
  "120160513": {
    "name": "Basel N. ABuhadrous",
    "lvl": 3,
    "major": "Comp. Sci."
  },
  "120160000": {
    "name": "Mohammed Mortaga",
    "lvl": 3,
    "major": "Comp. Sci."
  },
  "120160555": {
    "name": "Someone something",
    "lvl": 3,
    "major": "Comp. Sci."
  }
};
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.send(data);
})


app.listen(app.get('port'), function(){
  console.log('app running');
})
