const http = require('http');
const counterController = require('./counterController');

const server = http.createServer(async (req, res) => {
    if (req.url === '/api/getCount' ) {
        await counterController.GetCount(req, res);
    }
});

server.listen(5000, () => console.log("Server running on port 5000"));