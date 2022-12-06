import * as http from "http";

import users from "./users.json " assert { type: "json" };



const hostname = "127.0.0.1";
const PORT = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");

  const pathName = req.url;
  if(pathName === '/'){
    res.end("Hello World");
  }
  if (pathName === "/raw-html") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Welcome</h1>");
  } else if (pathName === "/users") {
    res.writeHead(200, { "Content-Type": "application/json" });

    return res.end(JSON.stringify(users));
  } else {
    res.writeHead(404, {
      "Content-Type": "text/html",
    });
    res.end("Page Not Found");
  }

});

server.listen(PORT, hostname, () => {
  console.log(`server running on port ${PORT}`);
});
