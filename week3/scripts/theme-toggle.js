(function () {
    const STORAGE_KEY = 'cse-theme';
    const root = document.documentElement;
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)');

    const ICONS = '...'; // SVG Icons

    function getSavedTheme() {
        try {
            const savedTheme = localStorage.getItem(STORAGE_KEY);
            return savedTheme === 'dark' || savedTheme === 'light' ? savedTheme : null;
        } catch (error) { return null; }
    }

    function saveTheme(theme) {
        try { localStorage.setItem(STORAGE_KEY, theme); } catch (error) { }
    }

    function getSystemTheme() { return systemDark.matches ? 'dark' : 'light'; }

    function setTheme(theme) {
        root.setAttribute('data-theme', theme);
        const button = document.querySelector('.theme-toggle');
        if (button) {
            const nextTheme = theme === 'dark' ? 'light' : 'dark';
            button.setAttribute('aria-label', `Switch to ${nextTheme} mode`);
        }
    }

    function initThemeToggle() {
        const headerPage = document.querySelector('header .page');
        if (!headerPage || headerPage.querySelector('.theme-toggle')) return;

        const button = document.createElement('button');
        button.className = 'theme-toggle';
        button.innerHTML = ICONS;
        button.addEventListener('click', () => {
            const nextTheme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            setTheme(nextTheme);
            saveTheme(nextTheme);
        });
        headerPage.insertBefore(button, headerPage.querySelector('.logo'));
    }

    setTheme(getSavedTheme() || getSystemTheme());
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initThemeToggle);
    } else {
        initThemeToggle();
    }
})();