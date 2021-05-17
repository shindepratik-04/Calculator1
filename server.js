const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname+"/index.html");
});

app.post("/", function(req, res){
  var n1 = Number(req.body.num1);
  var n2 = Number(req.body.num2);
  var result = n1 + n2;
  res.send("<h1 style='height: 25vh; position: relative;margin: 20px;margin-left: 150px;'>The Answer is: " + result + "</h1>");
});



app.listen(3000, function(){
  console.log("Server has Started on Port 3000")
});
