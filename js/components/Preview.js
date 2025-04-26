class Preview {
    constructor(previewId, fields, options = {}) {
        this.preview = document.getElementById(previewId);
        this.fields = fields;
        this.options = {
            defaultTexts: {},
            theme: 'officeRetro',
            ...options
        };
        this.init();
    }

    init() {
        this.render();
        this.applyTheme(this.options.theme);
    }

    render() {
        this.preview.innerHTML = `
            <div class="text-center mb-8">
                <h1 id="previewName" class="text-3xl font-bold text-gray-900 mb-2">
                    ${this.options.defaultTexts.name || 'Your Name Here'}
                </h1>
                <p class="text-gray-500">Professional Failure Expert</p>
            </div>
            ${this.fields
                .filter(field => field.id !== 'name')
                .map(field => `
                    <div class="resume-section">
                        <h2>${field.label}</h2>
                        <div id="preview${field.id.charAt(0).toUpperCase() + field.id.slice(1)}" 
                             class="resume-section-content">
                            ${this.options.defaultTexts[field.id] || ''}
                        </div>
                    </div>
                `).join('')}
        `;
    }

    update(field, value) {
        const previewElement = document.getElementById(`preview${field.charAt(0).toUpperCase() + field.slice(1)}`);
        if (previewElement) {
            previewElement.innerHTML = value || this.options.defaultTexts[field] || '';
        }
    }

    applyTheme(themeName) {
        ThemeManager.applyTheme(themeName);
    }

    exportPDF() {
        window.print();
    }
}
