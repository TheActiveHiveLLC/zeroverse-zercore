// pages/dashboard.js — Dashboard Page
// Full Copy-Paste Version — Step 9

import { ZeroVerseEngine } from "../zeroverseEngine.js";

export default function DashboardPage() {
    return `
        <header>
            <h1>ZeroVerse Dashboard</h1>
            <p>Overview of the ZeroVerse system.</p>
        </header>

        <section>
            <ul>
                <li>Engine Status: Active</li>
                <li>Router Status: Active</li>
                <li>Worker Status: Active (background tasks running)</li>
                <li>Environment: Development</li>
            </ul>
        </section>

        <nav>
            <a href="#/main">Go to Main Page</a>
            <a href="#/about">Go to About Page</a>
            <button onclick="ZeroVerseEngine.goToScene('dashboardScene')">Load Dashboard Scene</button>
        </nav>
    `;
}
