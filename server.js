const express = require('express');


const PORT = process.env.port || 3000;
const app = express();

app.use(express.static(__dirname + '/build'));

app.listen(PORT, () => console.log(`listening at ${PORT}`));