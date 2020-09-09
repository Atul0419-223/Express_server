const express = require('express');


const PORT = process.env.port || 3000;
const app = express();

app.use(express.static(__dirname + '/build'));
app.get('*', (req, res) => {
   res.sendFile(path.join(__dirname + '/build', 'index.html'));
});
app.listen(PORT, () => console.log(`listening at ${PORT}`));
