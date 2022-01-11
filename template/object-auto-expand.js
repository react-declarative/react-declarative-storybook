(function() {

    const rnd = () => (Math.random() + 1).toString(36).substring(7);

    const main = () => {
        const EXPANDED_CLASS = `preview-head-expanded-${rnd()}`;
        const observer = new MutationObserver(() => {
            const expandButtons = [...document.querySelectorAll('button[type=button] > span')]
                .filter((el) => el.innerHTML === 'RAW')
                .map((el) => el.closest('button'));
            for (const button of expandButtons) {
                if (!button.classList.contains(EXPANDED_CLASS)) {
                    button.classList.add(EXPANDED_CLASS);
                    button.click();
                }
            }
        });
        observer.observe(document.body, {
            childList: true,
            subtree: true,
        });
    };

    document.addEventListener('DOMContentLoaded', main);
})();
