// main.js — ZeroVerse Bootloader (Engine + Router Unified)
// Full Copy-Paste Version — Step 6 of Blueprint

import { ZeroVerseEngine } from "./zeroverseEngine.js";
import { Router } from "./router.js";
import { WorkerManager } from "./worker/workerManager.js";

const workerManager = new WorkerManager();

document.addEventListener("DOMContentLoaded", () => {
    console.log("ZeroVerse Bootloader: DOM Ready");

    ZeroVerseEngine.start();
    Router.init();

    workerManager.init();
});
