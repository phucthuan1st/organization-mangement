import React, { useEffect, useState } from 'react';
import './Forms.css';
// test templates
import bienban from "./bienban.tex";
import courseRegistrationTemplate from "./course_registration.tex";
import personalInformationTemplate from "./personal_information.tex";
const PdfTextEngine = require('./SwiftLaTeX/PdfTeXEngine').default;

// Sample templates (replace with actual logic to read from files)
const initialTemplates = [
    { name: 'Personal Information', file: personalInformationTemplate },
    { name: 'Course Registration', file: courseRegistrationTemplate },
    { name: 'Bien ban hop chi doan', file: bienban },
    // Add more templates as needed
];

const Forms = () => {
    const [templates, setTemplates] = useState([]);
    const [selectedTemplate, setSelectedTemplate] = useState(null);
    const [templateContent, setTemplateContent] = useState(null);

    // fetch from database
    useEffect(() => {
        setTemplates(initialTemplates);
    }, []);

    const TemplatesList = () => {
        return (
            <div className='templates'>
                <h3>Template List</h3>
                <ul>
                    {templates.map((template, index) => (
                        <li
                            key={index}
                            className={template.name === selectedTemplate ? 'selected' : ''}
                            onClick={() => handleTemplateSelect(template)}>
                            {template.name}
                        </li>
                    ))}
                </ul>
            </div>
        );
    };

    const Form = () => {
        const generatePDF = async () => {
            if (!selectedTemplate || !templateContent) return;

            let content = templateContent;

            const inputElements = document.querySelectorAll('.form-fields input');

            inputElements.forEach((input) => {
                const fieldName = input.previousElementSibling.innerText.slice(0, -1);
                const value = input.value;
                const regex = new RegExp(`\\[${fieldName}\\]`, 'g');
                content = content.replace(regex, value);
            });
            console.log(content);

            const engine = new PdfTextEngine();
            await engine.loadEngine();

            engine.writeMemFSFile(`${selectedTemplate.name}.tex`, content);

            engine.setEngineMainFile(`${selectedTemplate.name}.tex`);
            let r = await engine.compileLaTeX(); // r contains PDF binray and compilation log.

            const pdfUrl = URL.createObjectURL(r.binray);
            window.open(pdfUrl, '_blank');

            // // Post data to the server
            // try {
            //     const response = await fetch('/compile', {
            //         method: 'POST',
            //         headers: {
            //             'Content-Type': 'application/x-tex',
            //         },
            //         body: content,
            //     });

            //     if (!response.ok) {
            //         throw new Error(`Server error: ${response.statusText}`);
            //     }

            //     // Read the PDF content from the response
            //     const pdfBlob = await response.blob();

            //     // Open the PDF in a new browser window (triggering the download)
            //     const pdfUrl = URL.createObjectURL(pdfBlob);
            //     window.open(pdfUrl, '_blank');
            // } catch (error) {
            //     console.error('Error generating PDF:', error);
            // }
        };

        const renderFormFields = () => {
            if (!selectedTemplate || !templateContent) return null;

            // Regular expression to match fields marked with square brackets, e.g., [field]
            const fieldRegex = /\[([^\]]+)\]/g;
            const fields = templateContent.match(fieldRegex) || [];

            return (
                <form>
                    <section className="form-fields">
                        {fields.map((field, index) => {
                            const fieldName = field.slice(1, -1); // Remove square brackets
                            return (
                                <div key={index}>
                                    <label>{fieldName}:</label>
                                    <input type='text' />
                                </div>
                            );
                        })}
                    </section>
                    <button type='button' onClick={generatePDF}>
                        Generate PDF
                    </button>
                </form>
            );
        };

        return (
            <div className='form'>
                {renderFormFields()}
            </div>
        );
    };

    const handleTemplateSelect = (template) => {
        // Fetch .tex content from the server (replace with actual logic)
        fetchTexContent(template.file); // Assuming template names are lowercase and match file names
        setSelectedTemplate(template.name);
    };

    const fetchTexContent = async (templateName) => {
        try {
            // Adjust the path to match your file structure
            const response = await fetch(templateName);
            const content = await response.text();
            setTemplateContent(content);
        } catch (error) {
            console.error('Error fetching .tex content:', error);
        }
    };

    return (
        <div className='forms'>
            <TemplatesList />
            <Form />
        </div>
    );
};

export default Forms;
