import http from "http";

function onRequest(req, res) {
  let { url } = req;

  let data;
  let statusCode = 200;
  console.log(url, " this is the url");

  //   using switch cases
  switch (url) {
    case "/": {
      data = "Welcome to the node server";
      break;
    }
    case "/users": {
      data = "Jhon, jane, amhamd, ali";
      break;
    }
    case "/products": {
      data = "Cars, Groceries, TVs, Radios";
      break;
    }
    case "/articles": {
      data = "Good is great, what is happeing, Servers are expensive";
      break;
    }
    default: {
      statusCode = 404;
      data = "No resouce found here ";
    }
  }

  //   using if / else if /else
  //   if (url === "/users") {
  //     //load the user
  //     data = "Jhon, jane, amhamd, ali";
  //   } else if (url === "/products") {
  //     data = "Cars, Groceries, TVs, Radios";
  //     // load the products data
  //   } else if (url === "/articles") {
  //     // load the products data
  //     data = "Good is great, what is happeing, Servers are expensive";
  //   } else {
  //     // res.writeHead(404);
  //     statusCode = 404;
  //     data = "resource not found";
  //     // show 404
  //   }
  res.writeHead(statusCode);
  res.end(data);
  console.log(`recieved a request : ${req.method} ${req.url}`);
}

//   res.setHeader("Content-Type", "Application/json");
//   res.writeHead(200, {
//     // "Content-Type": "application/json",
//     "X-something": "Hello",
//   });
//   console.log("page not found");
//   res.write("hello !! ");
//   res.end("hello from node server");
// }

let server = http.createServer(onRequest);

server.listen(8080, () => {
  console.log("Server running on port http://127.0.0.1:8080");
});
