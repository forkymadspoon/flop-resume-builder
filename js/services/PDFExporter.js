class PDFExporter {
    constructor(options = {}) {
        this.options = {
            filename: 'flop-resume.pdf',
            margin: [10, 10],
            image: { 
                type: 'jpeg', 
                quality: 0.98 
            },
            html2canvas: { 
                scale: 2,
                useCORS: true,
                letterRendering: true
            },
            jsPDF: { 
                unit: 'mm', 
                format: 'a4', 
                orientation: 'portrait' 
            },
            ...options
        };
    }

    async exportToPDF(elementId) {
        const element = document.getElementById(elementId);
        if (!element) {
            throw new Error(`Element with id "${elementId}" not found`);
        }

        try {
            // Create a clone of the preview to avoid modifying the original
            const clone = element.cloneNode(true);
            clone.style.width = '210mm'; // A4 width
            clone.style.padding = '20mm';
            clone.style.backgroundColor = 'white';
            document.body.appendChild(clone);

            // Generate PDF
            await html2pdf()
                .set(this.options)
                .from(clone)
                .save();

            // Remove the clone
            document.body.removeChild(clone);

            return true;
        } catch (error) {
            console.error('Error generating PDF:', error);
            throw error;
        }
    }
}
