// worker/workerManager.js — Worker Manager for ZeroVerse
// Full Copy-Paste Version — Step 4 of Blueprint

export class WorkerManager {
    constructor() {
        this.worker = null;
    }

    init() {
        console.log("WorkerManager: Initializing worker...");

        this.worker = new Worker("./worker/src/worker.js", { type: "module" });

        this.worker.addEventListener("message", event => {
            const { type, payload } = event.data;

            switch (type) {
                case "PONG":
                    console.log("WorkerManager: Received PONG from worker:", payload.message);
                    break;

                case "HEAVY_TASK_RESULT":
                    console.log("WorkerManager: Heavy task result:", payload.result);
                    break;

                case "ERROR":
                    console.error("WorkerManager: Worker error:", payload.message);
                    break;

                default:
                    console.warn("WorkerManager: Unknown message type from worker:", type);
                    break;
            }
        });

        // Send initial ping to verify worker is alive
        this.sendPing();
    }

    sendPing() {
        if (!this.worker) {
            console.error("WorkerManager: Worker is not initialized.");
            return;
        }

        this.worker.postMessage({
            type: "PING",
            payload: {}
        });
    }

    runHeavyTask(value) {
        if (!this.worker) {
            console.error("WorkerManager: Worker is not initialized.");
            return;
        }

        this.worker.postMessage({
            type: "HEAVY_TASK",
            payload: { value }
        });
    }

    terminate() {
        if (this.worker) {
            console.log("WorkerManager: Terminating worker...");
            this.worker.terminate();
            this.worker = null;
        }
    }
}
