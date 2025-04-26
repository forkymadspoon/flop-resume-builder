// Initialize Tailwind theme
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#4F46E5',
                secondary: '#7C3AED'
            }
        }
    }
};

// Set CSS variables for theme colors
const root = document.documentElement;
root.style.setProperty('--color-primary', '#4F46E5');
root.style.setProperty('--color-secondary', '#7C3AED');
