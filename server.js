var express = require('express'),
    app = express(),
    port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/build'));

app.listen(port, ()=>{
  console.log('listening on port: ' + port)
});
