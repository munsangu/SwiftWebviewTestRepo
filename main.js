// let hTag = document.querySelector("#title");
import { createServer } from "http";
import { parse } from "querystring";

createServer(function (req, res) {
  if (req.method === "POST" && req.url === "/uuid") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      const uuid = parse(body).uuid;
      alert(`iOS 기기의 UUID: ${uuid}`);

      res.end("UUID를 받았음");
    });
  }
}).listen(3000);
