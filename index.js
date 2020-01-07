const http = require("http");

const server = http.createServer((req, res) => {
    res.end("Lets check its updating or not");
});

server.listen(8080, () => {
    console.log("server running on port 8080");
})
