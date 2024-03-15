const http = require("http");
const port = 5000;

const server = http.createServer((req, res) => {
  const url = req.url;
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
    res.write("<h2>Index Sayfasına hoşgeldiniz.</h2>");
  } else if (req.url === "/hakkimda") {
    res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
    res.write("<h2>Hakkımda Sayfasına hoşgeldiniz.</h2>");
  } else if (req.url === "/iletisim") {
    res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
    res.write("<h2>İletişim Sayfasına hoşgeldiniz.</h2>");
  } else {
    res.writeHead(404, { "Content-Type": "text/html; charset=UTF-8" });
    res.write("<h2>404 Böyle bir sayfa yok.</h2>");
  }
  res.end();
});

server.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor.`);
});
