var http = require("http");

var server = http.createServer(function (req ,res) {

    res.writeHead(200,{"Content-type":"text/plain"});
    res.write("ok dc roi!");
    res.end();
});

server.listen(3000 ,  function () {
    console.log("runnning!");
});