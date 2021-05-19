const express = require('express');
const db = require('./db');
const app = express();
const port = 3000;

app.use(express.static(`${__dirname}/../client/dist`));
app.use(express.json());


app.get('/springs/:stateCode', (req, res) => {
    const { stateCode } = req.params;
    db.query(`SELECT * FROM springs WHERE sc = '${stateCode.toUpperCase()}';`, (err, data) => {
        if (err) {
            console.log('Error accessing database :( ', err);
        } else {
            console.log(data);
            res.send(data.rows);
        }
    })
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});