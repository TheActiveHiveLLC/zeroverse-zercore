// router.js — ZeroVerse Router System (with Dashboard)
// Full Copy-Paste Version — Step 9

import { ZeroVerseEngine } from "./zeroverseEngine.js";

export const Router = {
    currentPage: null,

    init() {
        console.log("Router: Initializing");

        window.addEventListener("hashchange", () => {
            this.handleRoute(window.location.hash);
        });

        this.handleRoute(window.location.hash || "#/main");
    },

    handleRoute(hash) {
        const route = hash.replace("#/", "");

        console.log(`Router: Navigating to '${route}'`);

        this.loadPage(route);
    },

    async loadPage(pageName) {
        try {
            const pageModule = await import(`./pages/${pageName}.js`);
            const pageContent = pageModule.default();

            const root = document.getElementById("zeroverse-root");

            root.innerHTML = `
                <div class="page">
                    ${pageContent}
                </div>
            `;

            this.currentPage = pageName;

            console.log(`Router: Page '${pageName}' loaded successfully`);
        } catch (err) {
            console.error(`Router: Failed to load page '${pageName}'`, err);

            const root = document.getElementById("zeroverse-root");

            root.innerHTML = `
                <div class="page-error">
                    <h1>404 — Page Not Found</h1>
                    <p>The page '${pageName}' does not exist.</p>
                </div>
            `;
        }
    },

    goToPage(pageName) {
        window.location.hash = `#/${pageName}`;
    }
};
