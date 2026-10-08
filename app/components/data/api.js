// data/api.js — ZeroVerse Data API Abstraction
// Full Copy-Paste Version — Step 10

import Store from "./store.js";

const API = {
    getSystemStatus() {
        return {
            engine: Store.get("engineStatus"),
            router: Store.get("routerStatus"),
            worker: Store.get("workerStatus"),
            environment: Store.get("environment")
        };
    },

    getDashboardMetrics() {
        return Store.getMetrics();
    },

    recordSceneLoad() {
        Store.incrementMetric("scenesLoaded");
    },

    recordPageLoad() {
        Store.incrementMetric("pagesLoaded");
    },

    recordTaskCompletion() {
        Store.incrementMetric("tasksCompleted");
    }
};

export default API;
