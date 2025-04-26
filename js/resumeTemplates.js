class ResumeTemplates {
    static formFields() {
        return [
            {
                id: 'name',
                label: 'Name',
                type: 'input',
                placeholder: 'Your most forgettable name'
            },
            {
                id: 'weaknesses',
                label: 'Areas of Weakness',
                type: 'textarea',
                rows: 3,
                placeholder: 'List your proudest shortcomings'
            },
            {
                id: 'failures',
                label: 'Spectacular Failures',
                type: 'textarea',
                rows: 4,
                placeholder: 'Your most impressive disasters'
            },
            {
                id: 'endorsements',
                label: 'Unendorsed Endorsements',
                type: 'textarea',
                rows: 3,
                placeholder: 'Skills nobody will vouch for'
            },
            {
                id: 'uselessFacts',
                label: 'Other Useless Facts',
                type: 'textarea',
                rows: 3,
                placeholder: 'Irrelevant achievements and random trivia'
            }
        ];
    }

    static generateFormHTML() {
        return this.formFields()
            .map(field => `
                <div class="form-group">
                    <label for="${field.id}" class="form-label">${field.label}</label>
                    ${field.type === 'input' 
                        ? `<input type="text" id="${field.id}" name="${field.id}" 
                             class="form-input" placeholder="${field.placeholder}">`
                        : `<textarea id="${field.id}" name="${field.id}" rows="${field.rows}"
                                   class="form-textarea" placeholder="${field.placeholder}"></textarea>`
                    }
                </div>
            `).join('');
    }

    static generatePreviewHTML() {
        return `
            <div class="text-center mb-8">
                <h1 id="previewName" class="text-3xl font-bold text-gray-900 mb-2">${config.defaultTexts.name}</h1>
                <p class="text-gray-500">Professional Failure Expert</p>
            </div>
            ${this.formFields().map(field => field.id !== 'name' ? `
                <div class="resume-section">
                    <h2>${field.label}</h2>
                    <div id="preview${field.id.charAt(0).toUpperCase() + field.id.slice(1)}" 
                         class="resume-section-content">
                        ${config.defaultTexts[field.id]}
                    </div>
                </div>
            ` : '').join('')}
        `;
    }
}
