// DEPENDENCIES
// ============
var express = require('express'),
    app = express(),
    fs = require('fs'),
    handlebars = require('handlebars'),
    http = require("http"),
    Client = require('node-rest-client'),
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
app.get('/api/stocks/:code', function(req, res){
    var code = req.params.code || "";
    if(code!=="") {
        var client = new Client();

        client.get("http://api.manilainvestor.com/v1/stocks/" + code, function (data, response) {
            // parsed response body as js object
            console.log(data);
            // raw response
            console.log(response);
        });
    } else {
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
    }
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