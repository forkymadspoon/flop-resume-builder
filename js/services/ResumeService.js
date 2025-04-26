class ResumeService {
    constructor() {
        this.form = null;
        this.preview = null;
        this.modal = null;
        this.randomGenerator = new RandomContentGenerator();
        this.init();
    }

    init() {
        // Initialize components
        this.initializeForm();
        this.initializePreview();
        this.initializeModal();
        this.setupEventListeners();
    }

    initializeForm() {
        this.form = new Form('resumeForm', ResumeTemplates.formFields(), {
            onChange: (fieldId, value) => this.preview.update(fieldId, value),
            onSubmit: () => this.exportPDF()
        });
    }

    initializePreview() {
        this.preview = new Preview('resumePreview', ResumeTemplates.formFields(), {
            defaultTexts: config.defaultTexts,
            theme: localStorage.getItem('preferredTheme') || 'officeRetro'
        });
    }

    initializeModal() {
        this.modal = new Modal('successModal', {
            dismissible: true,
            onHide: () => this.resetForm()
        });
    }

    setupEventListeners() {
        // Theme selector
        const themeSelector = document.getElementById('themeSelector');
        if (themeSelector) {
            themeSelector.addEventListener('change', (e) => {
                this.preview.applyTheme(e.target.value);
            });
        }

        // Auto flop button
        const autoFlopButton = document.getElementById('autoFlopButton');
        if (autoFlopButton) {
            autoFlopButton.addEventListener('click', () => this.generateRandomContent());
            autoFlopButton.title = 'Shortcut: Ctrl/Cmd + Shift + R';
        }

        // Create another button
        const createAnotherButton = document.getElementById('createAnotherButton');
        if (createAnotherButton) {
            createAnotherButton.addEventListener('click', () => {
                this.modal.hide();
            });
        }

        // Print event
        window.addEventListener('afterprint', () => {
            this.modal.show();
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            // Ctrl/Cmd + Shift + R for random content
            if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'R') {
                e.preventDefault();
                this.generateRandomContent();
            }
            // Ctrl/Cmd + Shift + T for toggling theme
            if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'T') {
                e.preventDefault();
                const themes = Object.keys(ThemeManager.themes);
                const currentIndex = themes.indexOf(themeSelector.value);
                const nextIndex = (currentIndex + 1) % themes.length;
                themeSelector.value = themes[nextIndex];
                this.preview.applyTheme(themes[nextIndex]);
            }
        });
    }

    generateRandomContent() {
        const randomData = this.randomGenerator.generateRandom();
        this.form.setData(randomData);

        // Add spin animation to button
        const autoFlopButton = document.getElementById('autoFlopButton');
        if (autoFlopButton) {
            autoFlopButton.classList.add('animate-spin');
            setTimeout(() => {
                autoFlopButton.classList.remove('animate-spin');
            }, config.animations.spinDuration);
        }
    }

    resetForm() {
        this.form.reset();
        setTimeout(() => {
            this.generateRandomContent();
        }, config.animations.spinDuration);
    }

    exportPDF() {
        this.preview.exportPDF();
    }
}
