let express = require('express');
let app = express();

app.get('/', function (req, res) {
    res.send('umt!');
});

app.listen(3000, function () {
    console.log('app listening on port 3000!');
});