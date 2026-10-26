const http = require("http");
const port = process.env.PORT || 8080;
http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ ok: true, app: "dock-control-test" }));
}).listen(port, "0.0.0.0", () => console.log("dock-control-test listening on", port));
