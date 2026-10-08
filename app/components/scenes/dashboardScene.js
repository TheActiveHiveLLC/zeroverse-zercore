// scenes/dashboardScene.js — Dashboard Scene
// Full Copy-Paste Version — Step 9

export default function dashboardScene() {
    return `
        <div class="scene">
            <h1>Dashboard Scene</h1>
            <p>This scene represents the ZeroVerse system overview.</p>

            <ul>
                <li>Engine: Running</li>
                <li>Router: Handling routes</li>
                <li>Worker: Processing background tasks</li>
            </ul>

            <nav>
                <a href="#/dashboard">Go to Dashboard Page</a>
                <a href="#/main">Go to Main Page</a>
                <a href="#/about">Go to About Page</a>
            </nav>
        </div>
    `;
}
