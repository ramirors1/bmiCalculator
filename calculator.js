const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

//setting up home route
app.get("/", function(request, response){
    response.sendFile(__dirname + "/bmiCalculator.html");
});

//callback function, what is returned when user clicks button
app.post("/bmiCalculator", function(req, res) {

   var weight = parseFloat(req.body.weight);
   var height = parseFloat(req.body.height);

   var bmi = weight / (height * height);

   res.send("Your calculated BMI is " + bmi)
});

//sets up server
app.listen(3000, function() {
    console.log("Server started on port 3000.");
});