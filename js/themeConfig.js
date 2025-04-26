class ThemeManager {
    static themes = {
        officeRetro: {
            name: 'Office Retro',
            colors: {
                background: 'bg-stone-100',
                paper: 'bg-stone-50',
                primary: 'text-slate-800',
                secondary: 'text-slate-600',
                accent: 'text-indigo-700',
                border: 'border-slate-200',
                heading: 'text-slate-900',
            },
            fonts: {
                heading: 'font-serif',
                body: 'font-serif',
            },
            sections: {
                container: 'border border-slate-200 rounded-lg p-6 bg-stone-50',
                heading: 'text-lg font-serif font-semibold text-slate-800 border-b border-slate-200 pb-2 mb-4',
                content: 'prose prose-slate max-w-none prose-headings:font-serif',
            },
            buttons: {
                primary: 'bg-slate-700 hover:bg-slate-800 text-white',
                secondary: 'bg-indigo-600 hover:bg-indigo-700 text-white',
            }
        },
        comicStyle: {
            name: 'Comic Style',
            colors: {
                background: 'bg-yellow-50',
                paper: 'bg-white',
                primary: 'text-purple-600',
                secondary: 'text-pink-500',
                accent: 'text-emerald-500',
                border: 'border-purple-200',
                heading: 'text-purple-700',
            },
            fonts: {
                heading: 'font-comic',
                body: 'font-comic',
            },
            sections: {
                container: 'border-2 border-purple-300 rounded-xl p-6 bg-white shadow-lg',
                heading: 'text-xl font-bold text-purple-600 border-b-2 border-purple-200 pb-2 mb-4',
                content: 'prose prose-purple max-w-none prose-headings:font-bold',
            },
            buttons: {
                primary: 'bg-purple-500 hover:bg-purple-600 text-white',
                secondary: 'bg-pink-500 hover:bg-pink-600 text-white',
            }
        }
    };

    static getTheme(themeName) {
        return this.themes[themeName] || this.themes.officeRetro;
    }

    static applyTheme(themeName) {
        const theme = this.getTheme(themeName);
        const preview = document.getElementById('resumePreview');
        
        if (!preview) return;

        // Remove existing theme classes
        Object.values(this.themes).forEach(t => {
            Object.values(t.colors).forEach(className => {
                const classes = className.split(' ');
                classes.forEach(cls => preview.classList.remove(cls));
            });
            Object.values(t.fonts).forEach(className => {
                const classes = className.split(' ');
                classes.forEach(cls => preview.classList.remove(cls));
            });
        });

        // Apply new theme classes
        preview.classList.add(
            theme.colors.paper,
            theme.fonts.body
        );

        // Update section styles
        const sections = preview.querySelectorAll('.resume-section');
        sections.forEach(section => {
            section.className = 'resume-section ' + theme.sections.container;
            const heading = section.querySelector('h2');
            if (heading) {
                heading.className = theme.sections.heading;
            }
            const content = section.querySelector('.resume-section-content');
            if (content) {
                content.className = 'resume-section-content ' + theme.sections.content;
            }
        });

        // Update name heading
        const nameHeading = preview.querySelector('#previewName');
        if (nameHeading) {
            nameHeading.className = `text-3xl mb-2 ${theme.fonts.heading} ${theme.colors.heading}`;
        }

        // Update buttons
        document.querySelectorAll('.theme-primary-button').forEach(btn => {
            btn.className = `theme-primary-button ${theme.buttons.primary} px-4 py-2 rounded-lg transition-colors duration-200`;
        });
        document.querySelectorAll('.theme-secondary-button').forEach(btn => {
            btn.className = `theme-secondary-button ${theme.buttons.secondary} px-4 py-2 rounded-lg transition-colors duration-200`;
        });

        // Store theme preference
        localStorage.setItem('preferredTheme', themeName);
    }
}
