var express = require('express');
var app =  express();

app.use(express.static(__dirname + '/www'));

app.listen(process.env.PORT || 3000,function(err){
    console.log('server listening ');
});