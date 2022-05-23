const express = require('express');
const app = express();

const port = process.env.PORT || 8081;

const path = require('path'),
    fs = require('fs');

const cors = require('cors');
app.use(cors());

const { htmlToText } = require('html-to-text');

app.get('*', (req, res) => {
    const validHeaders = ['curl', 'wget', 'axios'];
    if (validHeaders.some((key) => req.rawHeaders[3].includes(key))) {
        var file = fs.readFileSync(path.resolve(__dirname, 'public', 'noscript.html'));
        file = htmlToText(file);
        file = file.replace(
            "FLASH IS DEAD\n\nBut it wasn't always that way.",
            "-------- flashisdead.xyz --------\n\nFLASH IS DEAD\nBut it wasn't always that way.\n\n---------------"
        );
        file = file
            .split('\n\nONE THING YOU CAN DO IS PLACE A NICE BADGE ON YOUR PAGE.')[0]
            .replace(/\s\[.*\]/g, '')
            .replace(/HAS\nREACHED/g, 'HAS REACHED')
            .replace(/\n\n\n/g, '\n\n---------------\n\n');
        file = file + '\n-------- flashisdead.xyz --------\n';
        return res.send(file);
    }
});

app.listen(port, async () => {
    console.log(`Server is up at port ${port}`);
});
