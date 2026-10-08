// pages/about.js — About Page (Scene-Aware)
// Full Copy-Paste Version — Step 6 of Blueprint

import { ZeroVerseEngine } from "../zeroverseEngine.js";

export default function AboutPage() {
    return `
        <header>
            <h1>About ZeroVerse</h1>
            <p>ZeroVerse is a modular, engine-driven single page application.</p>
        </header>

        <section>
            <p>The Router loads pages dynamically.</p>
            <p>The Engine manages scenes.</p>
            <p>The Worker handles background tasks.</p>
        </section>

        <nav>
            <a href="#/main">Back to Main Page</a>
            <button onclick="ZeroVerseEngine.goToScene('aboutScene')">Load About Scene</button>
        </nav>
    `;
}
