// zeroverseEngine.js — ZeroVerse Engine (Scene Manager Integrated)
// Full Copy-Paste Version — Step 6 of Blueprint

export const ZeroVerseEngine = {
    started: false,
    currentScene: null,

    start() {
        console.log("ZeroVerse Engine: Starting...");
        this.started = true;

        // Load default scene
        this.loadScene("mainScene");
    },

    loadScene(sceneName) {
        console.log(`ZeroVerse Engine: Loading scene '${sceneName}'`);

        this.currentScene = sceneName;

        const root = document.getElementById("zeroverse-root");

        root.innerHTML = `
            <div class="scene">
                <h1>Scene: ${sceneName}</h1>
                <p>The ZeroVerse Engine is active.</p>

                <nav>
                    <a href="#/main">Go to Main Page</a>
                    <a href="#/about">Go to About Page</a>
                </nav>
            </div>
        `;
    },

    // Allow pages to trigger scenes
    goToScene(sceneName) {
        this.loadScene(sceneName);
    }
};
