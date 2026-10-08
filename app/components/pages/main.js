// pages/main.js — Main Page (Scene Controls)
// Full Copy-Paste Version — Step 7

import { ZeroVerseEngine } from "../zeroverseEngine.js";

export default function MainPage() {
    return `
        <header>
            <h1>ZeroVerse</h1>
            <p>Welcome to the ZeroVerse main hub.</p>
        </header>

        <section>
            <p>This page is loaded through the Router system.</p>
            <p>You can switch scenes using the buttons below.</p>
        </section>

        <nav>
            <a href="#/about">Go to About Page</a>
            <button onclick="ZeroVerseEngine.goToScene('mainScene')">Load Main Scene</button>
            <button onclick="ZeroVerseEngine.goToScene('aboutScene')">Load About Scene</button>
        </nav>
    `;
}
