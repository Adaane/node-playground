const http = require('http')

//Create server
const port = 3000;
const serverUrl = 'localhost';


//call back when req HTTP is trigger
let server = http.createServer((request, response) => {
  console.log('Request: ', serverUrl);

  const now = new Date();
  const html = `<p>Hello World ! The time is ${now}`
  response.end(html)
});

console.log(`Listening at: ${serverUrl}:${port}`);
server.listen(port, serverUrl); // listen HTTP request


