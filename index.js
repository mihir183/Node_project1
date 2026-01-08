const http = require("http");
const fs = require("fs");
const path = require("path");
const PORT = 5000;

const app = http.createServer((req, res) => {
  switch (req.url) {
    case "/src/assets/img.png":
      fs.readFile(path.join(__dirname, "src/assets/img.png"), (err, data) =>
        err ? console.log(err) : res.end(data)
      );
      break;

    case "/":
      fs.readFile(path.join(__dirname, "src/index.html"), (err, data) =>
        err ? console.log(err) : res.end(data)
      );
      break;

    case "/about":
      fs.readFile(path.join(__dirname, "src/about.html"), (err, data) =>
        err ? console.log(err) : res.end(data)
      );
      break;

    case "/contact":
      fs.readFile(path.join(__dirname, "src/contect.html"), (err, data) =>
        err ? console.log(e) : res.end(data)
      );
      break;

    case "/feedback":
      fs.readFile(path.join(__dirname, "src/feedback.html"), (err, data) =>
        err ? console.log(e) : res.end(data)
      );
      break;

    default:
      fs.readFile(path.join(__dirname, "src/error.html"), (err, data) =>
        err ? console.log(err) : res.end(data)
      );
  }
});

app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
