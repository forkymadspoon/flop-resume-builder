class FormManager {
    constructor() {
        this.form = document.getElementById('resumeForm');
        this.autoFlopButton = document.getElementById('autoFlopButton');
        this.themeSelector = document.getElementById('themeSelector');
        this.randomContent = new RandomContentGenerator();
        
        this.setupEventListeners();
    }

    setupEventListeners() {
        // Form field listeners
        ResumeTemplates.formFields().forEach(field => {
            const input = document.getElementById(field.id);
            if (input) {
                input.addEventListener('input', () => this.updateField(field));
            }
        });

        // Auto-flop button listener
        if (this.autoFlopButton) {
            this.autoFlopButton.addEventListener('click', () => this.autoFlop());
        }

        // Theme selector listener
        if (this.themeSelector) {
            this.themeSelector.addEventListener('change', (e) => {
                ThemeManager.applyTheme(e.target.value);
            });
        }

        // Add keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            // Ctrl/Cmd + Shift + R for random content
            if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'R') {
                e.preventDefault();
                this.autoFlop();
            }
            // Ctrl/Cmd + Shift + T for toggling theme
            if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'T') {
                e.preventDefault();
                const themes = Object.keys(ThemeManager.themes);
                const currentIndex = themes.indexOf(this.themeSelector.value);
                const nextIndex = (currentIndex + 1) % themes.length;
                this.themeSelector.value = themes[nextIndex];
                ThemeManager.applyTheme(themes[nextIndex]);
            }
        });
    }

    updateField(field) {
        const input = document.getElementById(field.id);
        const previewId = field.id === 'name' ? 'previewName' : 
            `preview${field.id.charAt(0).toUpperCase() + field.id.slice(1)}`;
        const preview = document.getElementById(previewId);
        
        if (input && preview) {
            const value = input.value.trim();
            preview.innerHTML = value || config.defaultTexts[field.id] || '';
        }
    }

    autoFlop() {
        const randomData = this.randomContent.generateRandom();
        this.loadResumeData(randomData);
        
        // Add a fun spin animation to the autoFlop button
        if (this.autoFlopButton) {
            this.autoFlopButton.classList.add('animate-spin');
            setTimeout(() => {
                this.autoFlopButton.classList.remove('animate-spin');
            }, config.animations.spinDuration);
        }
    }

    loadResumeData(data) {
        ResumeTemplates.formFields().forEach(field => {
            const input = document.getElementById(field.id);
            if (input && data[field.id]) {
                input.value = data[field.id];
                this.updateField(field);
            }
        });
    }

    reset() {
        // Reset all form inputs
        ResumeTemplates.formFields().forEach(field => {
            const input = document.getElementById(field.id);
            if (input) {
                input.value = '';
                this.updateField(field);
            }
        });

        // Reset theme to default
        if (this.themeSelector) {
            const defaultTheme = localStorage.getItem('preferredTheme') || 'officeRetro';
            this.themeSelector.value = defaultTheme;
            ThemeManager.applyTheme(defaultTheme);
        }
    }
}

// Generate new random content
// this.autoFlop();
