import http from "http";

function onRequest(req, res) {
  console.log(`recieved a request : ${req.method} ${req.url}`);

  res.setHeader("Content-Type", "Application/json");
  res.writeHead(200, {
    // "Content-Type": "application/json",
    "X-something": "Hello",
  });
  console.log("page not found");
  res.write("hello !! ");
  res.end("hello from node server");
}

let server = http.createServer(onRequest);

server.listen(8080, () => {
  console.log("Server running on port http://127.0.0.1:8080");
});
