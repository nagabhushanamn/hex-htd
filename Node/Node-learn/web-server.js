



let http = require('http');
let fs = require('fs');

let server = http.createServer();

server.on('request', function (req, resp) {

    // process request..
    // resp.write('Response from server whicj is running on Node.js');
    // resp.end();

    // Non Blocking IO server

    // fs.readFile('./all-levels node.pdf', function (err, fileData) {
    //     resp.writeHead(200, { 'Content-Type': 'application/pdf' });
    //     resp.write(fileData);
    //     resp.end();
    // });

    let rs = fs.createReadStream('./all-levels node.pdf');
    resp.writeHead(200, { 'Content-Type': 'application/pdf' });

    rs.on('data', function (chunk) {
        console.log('data-event');
        resp.write(chunk);
    })
    rs.on('end', function () {
        resp.end();
    })


});


server.listen(8080, function () {
    console.log('server at http://localhost:8080');
})
