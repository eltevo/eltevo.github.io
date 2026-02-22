document.addEventListener('DOMContentLoaded', function () {
    // Treat links as external when their origin differs from the current one
    // (origin = scheme + host (+ port))
    document.querySelectorAll('a[href^="http"]').forEach(link => {
        const url = new URL(link.href, location.href);
        // Treat sub-domains as internal by comparing eTLD+1 instead
        if (url.origin !== location.origin) {
            link.target = '_blank';
            // Preserve any existing rel values:
            link.relList.add('noopener', 'noreferrer');
        }
    });
});