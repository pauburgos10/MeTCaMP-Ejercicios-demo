const http = require('http');

const server = http.createServer((req, res) => {
  res.status = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.write(JSON.stringify({"pau": "dev"}));
  res.end()
});

server.listen(3000, () => {
  console.log('Serve on port 3000');
})