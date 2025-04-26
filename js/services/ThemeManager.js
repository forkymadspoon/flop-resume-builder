class ThemeManager {
    static themes = {
        officeRetro: {
            font: 'font-mono',
            headings: 'font-bold text-gray-900',
            sections: 'border-b-2 border-gray-900',
            text: 'text-gray-700',
            background: 'bg-gray-100',
            accent: 'text-blue-600'
        },
        comicStyle: {
            font: 'font-comic',
            headings: 'font-bold text-purple-600',
            sections: 'border-b-2 border-purple-400',
            text: 'text-gray-600',
            background: 'bg-purple-50',
            accent: 'text-purple-500'
        }
    };

    static applyTheme(themeName) {
        const theme = this.themes[themeName];
        if (!theme) return;

        const preview = document.getElementById('resumePreview');
        if (!preview) return;

        // Remove all theme classes
        Object.values(this.themes).forEach(themeClasses => {
            Object.values(themeClasses).forEach(className => {
                const classes = className.split(' ');
                preview.classList.remove(...classes);
            });
        });

        // Apply new theme classes
        Object.values(theme).forEach(className => {
            const classes = className.split(' ');
            preview.classList.add(...classes);
        });

        // Save preference
        localStorage.setItem('preferredTheme', themeName);
    }
}
