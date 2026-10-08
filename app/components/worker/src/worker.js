// worker/src/worker.js — ZeroVerse Background Worker
// Full Copy-Paste Version — Step 4 of Blueprint

// This worker handles background tasks so the UI stays responsive.

self.addEventListener("message", event => {
    const { type, payload } = event.data;

    switch (type) {
        case "PING":
            // Simple health check
            self.postMessage({
                type: "PONG",
                payload: { message: "Worker is alive and responding." }
            });
            break;

        case "HEAVY_TASK":
            // Simulate a heavy computation
            const result = heavyComputation(payload.value);

            self.postMessage({
                type: "HEAVY_TASK_RESULT",
                payload: { result }
            });
            break;

        default:
            self.postMessage({
                type: "ERROR",
                payload: { message: `Unknown task type: ${type}` }
            });
            break;
    }
});

function heavyComputation(value) {
    // Simple CPU-bound loop to simulate work
    let total = 0;
    for (let i = 0; i < 1_000_000; i++) {
        total += (value || 1) * Math.sin(i);
    }
    return total;
}
