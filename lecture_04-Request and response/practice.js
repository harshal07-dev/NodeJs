const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  //   easy for debugging
  console.log(req.url, req.method);
  if (req.url === "/" || req.url === "/practice") {
    // serve html files
    const filePath = path.join(__dirname, "practice.html");
    res.writeHead(200, { "Content-Type": "text/html" });

    const readStream = fs.createReadStream(filePath);
    readStream.pipe(res);

    return;
  }
  res.writeHead(200, { "Content-Type": "text/html" });
  if (req.url === "/home") {
    res.write("<h1>Welcome to Home page</h1>");
  } else if (req.url === "/men") {
    res.write("<h1>Welcome to Mens page</h1>");
  } else if (req.url === "/women") {
    res.write("<h1>Welcome to Womens page</h1>");
  } else if (req.url === "/kids") {
    res.write("<h1>Welcome to Kids page</h1>");
  } else if (req.url === "/cart") {
    res.write("<h1>Welcome to Cart page</h1>");
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>404 - Page Not Found</h1>");
  }
});

const PORT = 3000;

server.listen(PORT, () => console.log(`Listening on the port ${PORT}`));
