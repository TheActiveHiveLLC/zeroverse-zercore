// config/config.js — ZeroVerse Configuration
// Full Copy-Paste Version — Step 8

const Config = {
    projectName: "ZeroVerse",
    moduleName: "ZerCore",
    version: "1.0.0",
    environment: "development",

    getInfo() {
        return `${this.projectName} (${this.moduleName}) v${this.version} [${this.environment}]`;
    }
};

export default Config;
