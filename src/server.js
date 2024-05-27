import http from "http";

function onRequest(req, res) {
  console.log(`recieved a request : ${req.method} ${req.url}`);
  res.end("hello from node server");
}

let server = http.createServer(onRequest);

server.listen(8080, () => {
  console.log("Server running on port http://127.0.0.1:8080");
});
