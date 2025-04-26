class Form {
    constructor(formId, fields, options = {}) {
        this.form = document.getElementById(formId);
        this.fields = fields;
        this.options = {
            onChange: () => {},
            onSubmit: () => {},
            ...options
        };
        this.init();
    }

    init() {
        this.render();
        this.setupEventListeners();
    }

    render() {
        this.form.innerHTML = this.fields
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

    setupEventListeners() {
        this.fields.forEach(field => {
            const input = document.getElementById(field.id);
            if (input) {
                input.addEventListener('input', () => {
                    this.options.onChange(field.id, input.value);
                });
            }
        });

        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.options.onSubmit(this.getData());
        });
    }

    getData() {
        return this.fields.reduce((data, field) => {
            const input = document.getElementById(field.id);
            data[field.id] = input ? input.value : '';
            return data;
        }, {});
    }

    setData(data) {
        Object.entries(data).forEach(([key, value]) => {
            const input = document.getElementById(key);
            if (input) {
                input.value = value;
                this.options.onChange(key, value);
            }
        });
    }

    reset() {
        this.fields.forEach(field => {
            const input = document.getElementById(field.id);
            if (input) {
                input.value = '';
                this.options.onChange(field.id, '');
            }
        });
    }
}
