const express = require('express');
const app = express();

const port = process.env.PORT || 8080;

const path = require('path'),
    fs = require('fs');

const cors = require('cors');
app.use(cors());

const { htmlToText } = require('html-to-text');

app.get('*', (req, res) => {
    var file = fs.readFileSync(path.resolve(__dirname, 'public', 'noscript.html'));
    file = htmlToText(file);
    file = file.replace(
        "FLASH IS DEAD\n\nBut it wasn't always that way.",
        "-------- flashisdead.xyz --------\n\nFLASH IS DEAD\nBut it wasn't always that way.\n\n---------------"
    );
    file = file.split('\n\nONE THING YOU CAN DO IS PLACE A NICE BADGE ON YOUR PAGE.')[0];
    file = file.replace(/\s\[.*\]/g, '');
    file = file.replace(/HAS\nREACHED/g, 'HAS REACHED');
    file = file.replace(/\n\n\n/g, '\n\n---------------\n\n');
    file = file + '\n-------- flashisdead.xyz --------\n';
    res.send(file);
});

app.listen(port, () => {
    console.log(`Server is up at port ${port}`);
});
