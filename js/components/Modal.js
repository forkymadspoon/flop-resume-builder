class Modal {
    constructor(id, options = {}) {
        this.id = id;
        this.modal = document.getElementById(id);
        this.content = this.modal.querySelector('div');
        this.closeButton = this.modal.querySelector('#closeModalButton');
        this.actionButtons = {};
        
        this.options = {
            dismissible: true,
            escapeToClose: true,
            showCloseButton: true,
            onShow: () => {},
            onHide: () => {},
            animationDuration: 300,
            ...options
        };

        this.setupEventListeners();
    }

    setupEventListeners() {
        // Close button
        if (this.options.showCloseButton && this.closeButton && !this.closeButton.hasListener) {
            this.closeButton.hasListener = true;
            this.closeButton.addEventListener('click', () => this.hide());
        }

        // Escape key
        if (this.options.escapeToClose && !this.hasEscapeListener) {
            this.hasEscapeListener = true;
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && !this.modal.classList.contains('hidden')) {
                    this.hide();
                }
            });
        }

        // Backdrop click
        if (this.options.dismissible) {
            this.modal.addEventListener('click', (e) => {
                if (e.target === this.modal) {
                    this.hide();
                }
            });
        }
    }

    addActionButton(id, callback) {
        const button = this.modal.querySelector(`#${id}`);
        if (button && !button.hasListener) {
            button.hasListener = true;
            button.addEventListener('click', () => {
                callback();
                this.hide();
            });
            this.actionButtons[id] = button;
        }
        return this;
    }

    show() {
        this.modal.classList.remove('hidden');
        this.modal.classList.add('flex');
        
        // Trigger entrance animation
        setTimeout(() => {
            this.content.classList.remove('scale-0', 'opacity-0');
            this.content.classList.add('scale-100', 'opacity-100');
            this.options.onShow();
        }, 50);

        return this;
    }

    hide() {
        // Start exit animation
        this.content.classList.remove('scale-100', 'opacity-100');
        this.content.classList.add('scale-95', 'opacity-0');

        // Complete exit after animation
        setTimeout(() => {
            this.modal.classList.remove('flex');
            this.modal.classList.add('hidden');
            // Reset scale for next open
            this.content.classList.remove('scale-95');
            this.content.classList.add('scale-0');
            this.options.onHide();
        }, this.options.animationDuration);

        return this;
    }
}
