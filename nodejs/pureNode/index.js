import fs from 'fs'
import * as http from "http";

import users from "./users.json " assert { type: "json" };



const hostname = "127.0.0.1";
const PORT = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");

  const pathName = req.url;
  const path = pathName === '/'

  if(pathName === '/'){
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.readFile('public/index.html',function(err,data){
        if(err){
            res.writeHead(404)
            res.write('Error: File Not Found')
        }else{
            res.write(data)
        }
        res.end()
    })
    return;
    // fs.readFile('index.html',function(err,data){
    //     if(err){
    //         res.writeHead(404)
    //         res.write('Error: File Not Found')
    //     }else{
    //         res.write(data)
    //     }
    //     res.end()
    // })
    // return;
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
