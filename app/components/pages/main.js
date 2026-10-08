// pages/main.js — Main Page (with Dashboard Link)
// Full Copy-Paste Version — Step 9

import { ZeroVerseEngine } from "../zeroverseEngine.js";

export default function MainPage() {
    return `
        <header>
            <h1>ZeroVerse</h1>
            <p>Welcome to the ZeroVerse main hub.</p>
        </header>

        <section>
            <p>This page is loaded through the Router system.</p>
            <p>You can switch scenes and go to the dashboard.</p>
        </section>

        <nav>
            <a href="#/about">Go to About Page</a>
            <a href="#/dashboard">Go to Dashboard Page</a>
            <button onclick="ZeroVerseEngine.goToScene('mainScene')">Load Main Scene</button>
            <button onclick="ZeroVerseEngine.goToScene('aboutScene')">Load About Scene</button>
            <button onclick="ZeroVerseEngine.goToScene('dashboardScene')">Load Dashboard Scene</button>
        </nav>
    `;
}
