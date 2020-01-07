const http = require("http");

const server = http.createServer((req, res) => {
    res.end("hey its a new world");
});

server.listen(8080, () => {
    console.log("server running on port 8080");
})
