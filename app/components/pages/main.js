// main.js — ZeroVerse Bootloader
// Full Copy-Paste Version — Step 4 of Blueprint

import { ZeroVerseEngine } from "./zeroverseEngine.js";
import { Router } from "./router.js";
import { WorkerManager } from "./worker/workerManager.js";

const workerManager = new WorkerManager();

document.addEventListener("DOMContentLoaded", () => {
    console.log("ZeroVerse Bootloader: DOM Ready");

    // Start engine
    ZeroVerseEngine.start();

    // Initialize router
    Router.init();

    // Initialize worker system
    workerManager.init();

    // Example: run a heavy task in the background
    workerManager.runHeavyTask(42);
});
