import path from 'path';

module.exports = {
    entry: './src/index.js',

    output: {
        path: path.resolve(__dirname, 'dist'), // or your preferred output directory
        filename: 'PdfTextEngine.bundle.js', // or your preferred output filename
        libraryTarget: 'umd',
        library: 'PdfTextEngine',
    },
};