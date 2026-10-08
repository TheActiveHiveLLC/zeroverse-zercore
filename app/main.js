// main.js — ZeroVerse Bootloader
// Full Copy-Paste Version — Step 2.1

import { ZeroVerseEngine } from "./zeroverseEngine.js";
import { Router } from "./router.js";

document.addEventListener("DOMContentLoaded", () => {
    console.log("ZeroVerse Bootloader: DOM Ready");

    ZeroVerseEngine.start();
    Router.init();
});
