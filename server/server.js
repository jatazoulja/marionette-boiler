// DEPENDENCIES
// ============
var express = require('express'),
    app = express(),
    fs = require('fs'),
    request = require('request'),
    handlebars = require('handlebars'),
    http = require("http"),
    port = (process.env.PORT || 8001);
    // fooJson = require('path/to/foo.json');;

app.get('/', function(req, res){
        fs.readFile('public/index.html', function(err, data){
            if (!err) {
                console.log("loading");
                // make the buffer into a string
                var source = data.toString();
                // call the render function
                return res.send(renderToString(source, {}));
            } else {
                // handle file read error
            }
        }
    );
});
app.get('/api/stocks/', function(req, res){
    fs.readFile('public/api/stocks.json', function(err, data){

        if (!err) {
            console.log("loading");
            // make the buffer into a string
            var source = data.toString();
            // call the render function
            return res.send(renderToString(source, {}));
        } else {
            // handle file read error


        }
    });

});

app.get('/api/stocks/:code', function(req, res){
    console.log(req.params.code);
    var code = req.params.code || "";
    if(code!=="") {
        var request = http.get("http://api.manilainvestor.com/v1/stocks/" + code, function (response) {
            // data is streamed in chunks from the server
            // so we have to handle the "data" event
            var buffer = "",
                data,
                route;

            response.on("data", function (chunk) {
                res.send(chunk);
            });

            response.on("end", function (err) {
            });
        });
    }
});
app.get('/api/hdata/:code', function(req, res){
    console.log(req.params.code);
    var code = req.params.code || "";
    if(code!=="") {
        console.log("http://api.manilainvestor.com/v1/stocks/hdata/" + code);
        request("http://api.manilainvestor.com/v1/stocks/hdata/" + code, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                res.send(body) // Print the google web page.
            }
        })
    }
});
app.get('/api/ticker/', function(req, res){

        console.log("http://api.manilainvestor.com/v1/stocks/ticker/");
        request("http://api.manilainvestor.com/v1/stocks/ticker/", function (error, response, body) {
            if (!error && response.statusCode == 200) {
                res.send(body) // Print the google web page.
            }
        })
});
app.use(express.static('public'));

app.listen(4000);


// get your data into a variable


// read the file and use the callback to render


// this will be called after the file is read
function renderToString(source, data) {
    var data = data || {};
    var template = handlebars.compile(source);
    var outputString = template(data);
    return outputString;
}