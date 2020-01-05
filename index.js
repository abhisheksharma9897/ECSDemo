const http = require("http");

const server = http.createServer((req, res) => {
    res.end("Its a result of a pipeline");
});

server.listen(8080, () => {
    console.log("server running on port 8080");
})
