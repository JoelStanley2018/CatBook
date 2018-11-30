var express = require("express");
var app = express();

app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');


app.get('/catbook', function(request,response) {

    response.render('catbook');


}) 

app.get('/cuddles', function(request, response) {
    var name = "Cuddles";
    var favourite = "Snuggles with his owners";
    var age = "2";
    var sleeping_spots = [
        'Couch',
        'Bed'
    ]
    var picture = "cat1.jpg";

    response.render("details", {name: name, favourite: favourite, age: age, sleeping_spots: sleeping_spots, picture: picture} );

})

app.get('/fluffy', function(request,response) {
    var name = "Fluffy";
    var favourite = "Running outside";
    var age = "5";
    var sleeping_spots = [
        'Bookcase',
        'Window',
        'Bed',
        
        
    ]
    var picture = "cat2.jpg";

    response.render("details", {name: name, favourite: favourite, age: age, sleeping_spots: sleeping_spots, picture: picture} );

   
})


app.get('/smokey', function(request,response) {
    var name = "Smokey";
    var favourite = "Snuggles with Joel and Tianna";
    var age = "2";
    var sleeping_spots = [
        'Carpet Floor',
        'Bed',
        'Grass Outside',
        'On Your Face'
    ]
    var picture = "cat3.jpg";

    response.render("details", {name: name, favourite: favourite, age: age, sleeping_spots: sleeping_spots, picture: picture} );
})



app.listen(8000, function() {
    console.log("listening on port 8000");
  })
