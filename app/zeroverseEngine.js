// ZeroVerse Engine — Step 1 Initialization
// Blueprint: Blind‑Friendly Copy‑Paste Version

export const ZeroVerseEngine = {
    started: false,

    start() {
        console.log("ZeroVerse Engine: Starting...");

        this.started = true;

        // Load initial scene
        this.loadScene("main");
    },

    loadScene(sceneName) {
        console.log(`ZeroVerse Engine: Loading scene '${sceneName}'`);

        const sceneElement = document.getElementById("zeroverse-root");

        if (!sceneElement) {
            console.error("ZeroVerse Engine: Missing #zeroverse-root element.");
            return;
        }

        sceneElement.innerHTML = `
            <div class="scene">
                <h1>Scene: ${sceneName}</h1>
                <p>ZeroVerse Engine is active.</p>
            </div>
        `;
    }
};
