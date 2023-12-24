const path = require('path');

module.exports = {
    entry: './PdfTextEngine.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'PdfTextEngine.js',

        library: "PdfTextEngine",
    },
};