// main.js — ZeroVerse Bootloader

import { ZeroVerseEngine } from "./zeroverseEngine.js";

document.addEventListener("DOMContentLoaded", () => {
    console.log("ZeroVerse Bootloader: DOM Ready");
    ZeroVerseEngine.start();
});
