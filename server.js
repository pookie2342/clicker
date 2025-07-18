const express = require('express')
const app = express();
const port = process.env.port || 3000;


app.use(express.static('static'));


app.listen(port, () => {
    console.log('listening on port http://localhost:${port}')
})