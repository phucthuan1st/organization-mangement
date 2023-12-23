const express = require('express');
const bodyParser = require('body-parser');
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3001;

app.use(bodyParser.text({ type: 'application/x-tex' }));

app.post('/compile', (req, res) => {
    const texContent = req.body;

    // Create a temporary directory to store the TeX file
    const tempDir = path.join(__dirname, 'temp');
    if (!fs.existsSync(tempDir)) {
        fs.mkdirSync(tempDir);
    }

    const texFilePath = path.join(tempDir, 'input.tex');
    const pdfFilePath = path.join(tempDir, 'output.pdf');

    // Write the TeX content to a file
    fs.writeFileSync(texFilePath, texContent);

    // Compile the TeX file to PDF using pdflatex
    const command = `pdflatex -output-directory=${tempDir} ${texFilePath}`;
    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`Compilation error: ${error.message}`);
            return res.status(500).send('Error compiling LaTeX');
        }

        // Read the generated PDF file
        const pdfContent = fs.readFileSync(pdfFilePath);

        // Send the PDF as a response
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename=output.pdf');
        res.send(pdfContent);

        // Clean up: remove temporary files
        fs.unlinkSync(texFilePath);
        fs.unlinkSync(pdfFilePath);
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
