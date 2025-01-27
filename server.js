const http = require("http");
const fs = require("fs");
const url = require("url");

http
  .createServer(function (req, res) {
    const q = url.parse(req.url, true);
    const filename = "." + q.pathname;

    fs.readFile(filename, function (err, data) {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write();
        return res.end(fs.readFile("./404.html"));
      }

      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  })
  .listen(8080);
