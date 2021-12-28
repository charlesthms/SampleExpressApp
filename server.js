const express = require('express');
const path = require('path');
const ip = require('ip');
const { env } = require('process');

const PORT = 4000 || process.env.PORT;
const initial_path = path.join(__dirname, '/');
const app = express();

app.use(express.static(initial_path + "/client"));

app.get('/', (req, res) => {
    res.status(200).sendFile('/client/index.html');
});

app.listen(PORT, () => {
    console.log("\x1b[35m" ,`Serveur lancé:\n`);
    console.log("\x1b[32m", `   - http://localhost:${PORT}/\n    - http://${ip.address()}:${PORT}/`);
});