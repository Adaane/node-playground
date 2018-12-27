const http = require('http')
const fs = require('fs')

//Create server
const port = 3000;
const serverUrl = 'localhost';
let counter = 0;


//call back when req HTTP is trigger
let server = http.createServer((request, response) => {
  counter++

  console.log(`Request: ${serverUrl} (${counter})`);

  if (request.url === "/example.html") {
    fs.readFile("example.html", (err, text) => {
      response.setHeader("Content-Type", "text/html");
      response.end(text)
    });
    return;
  }

  response.setHeader("Content-Type", "text/html");
  const html = `<p>Hello World ! Request counter ${counter}</p>`
  response.end(html)
});

console.log(`Starting web server at: ${serverUrl}:${port}`);
server.listen(port, serverUrl); // listen HTTP request


