// pages/dashboard.js — Dashboard Page with Real Data
// Full Copy-Paste Version — Step 10

import API from "../data/api.js";
import { ZeroVerseEngine } from "../zeroverseEngine.js";

export default function DashboardPage() {
    const status = API.getSystemStatus();
    const metrics = API.getDashboardMetrics();

    return `
        <header>
            <h1>ZeroVerse Dashboard</h1>
            <p>Live system overview powered by the Data Layer.</p>
        </header>

        <section>
            <h2>System Status</h2>
            <ul>
                <li>Engine Status: ${status.engine}</li>
                <li>Router Status: ${status.router}</li>
                <li>Worker Status: ${status.worker}</li>
                <li>Environment: ${status.environment}</li>
            </ul>

            <h2>Metrics</h2>
            <ul>
                <li>Scenes Loaded: ${metrics.scenesLoaded}</li>
                <li>Pages Loaded: ${metrics.pagesLoaded}</li>
                <li>Tasks Completed: ${metrics.tasksCompleted}</li>
            </ul>
        </section>

        <nav>
            <a href="#/main">Go to Main Page</a>
            <a href="#/about">Go to About Page</a>
            <button onclick="ZeroVerseEngine.goToScene('dashboardScene')">Load Dashboard Scene</button>
        </nav>
    `;
}
