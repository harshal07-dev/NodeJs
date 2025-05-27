const http = require("http");

const server = http.createServer((req, res) => {
  res.write("Hola from nodejs");
  res.end();
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Listening on the ${PORT}`);
});
