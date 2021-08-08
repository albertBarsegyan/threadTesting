const FgGreen = '\x1b[32m';
const express = require('express');
const app = express();
app.use(express.static(__dirname + '/')); //__dir and not _dir
const port = 8000;
app.listen(port);

console.log(FgGreen, `http://localhost:${port} is running`);
