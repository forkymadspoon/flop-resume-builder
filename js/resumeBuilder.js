class ResumeBuilder {
    constructor() {
        this.initializeComponents();
        this.setupForm();
        this.setupEventListeners();
    }

    initializeComponents() {
        // Initialize form manager
        this.formManager = new FormManager();

        // Initialize PDF exporter
        this.pdfExporter = new PDFExporter();

        // Initialize success modal
        this.successModal = new Modal('successModal', {
            dismissible: true,
            escapeToClose: true,
            showCloseButton: true,
            animationDuration: 300
        });

        // Add action button for creating another resume
        this.successModal.addActionButton('createAnotherButton', () => {
            this.formManager.reset();
        });
    }

    setupForm() {
        // Initialize form fields
        const form = document.getElementById('resumeForm');
        if (form) {
            form.innerHTML = ResumeTemplates.generateFormHTML();
        }

        // Initialize preview
        const preview = document.getElementById('resumePreview');
        if (preview) {
            preview.innerHTML = ResumeTemplates.generatePreviewHTML();
        }
    }

    setupEventListeners() {
        // Add keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            // Ctrl/Cmd + Shift + P for PDF export
            if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'P') {
                e.preventDefault();
                this.exportPDF();
            }
        });

        // Add export button listener
        const exportButton = document.getElementById('exportButton');
        if (exportButton) {
            exportButton.addEventListener('click', () => this.exportPDF());
        }
    }

    async exportPDF() {
        try {
            await this.pdfExporter.exportToPDF('resumePreview');
            this.successModal.show();
        } catch (error) {
            console.error('Error generating PDF:', error);
            alert('There was an error generating your PDF. Please try again.');
        }
    }
}

// Initialize the resume builder when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new ResumeBuilder();
});
