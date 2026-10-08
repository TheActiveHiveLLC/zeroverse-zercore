// zeroverseEngine.js — ZeroVerse Engine with Modular Scenes
// Full Copy-Paste Version — Step 7

export const ZeroVerseEngine = {
    started: false,
    currentScene: null,

    async start() {
        console.log("ZeroVerse Engine: Starting...");
        this.started = true;

        await this.loadScene("mainScene");
    },

    async loadScene(sceneName) {
        console.log(`ZeroVerse Engine: Loading scene '${sceneName}'`);

        this.currentScene = sceneName;

        try {
            const sceneModule = await import(`./scenes/${sceneName}.js`);
            const sceneContent = sceneModule.default();

            const root = document.getElementById("zeroverse-root");

            root.innerHTML = sceneContent;

            console.log(`ZeroVerse Engine: Scene '${sceneName}' loaded successfully`);
        } catch (err) {
            console.error(`ZeroVerse Engine: Failed to load scene '${sceneName}'`, err);

            const root = document.getElementById("zeroverse-root");

            root.innerHTML = `
                <div class="scene">
                    <h1>Scene Error</h1>
                    <p>The scene '${sceneName}' could not be loaded.</p>
                </div>
            `;
        }
    },

    goToScene(sceneName) {
        this.loadScene(sceneName);
    }
};
