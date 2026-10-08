// data/store.js — ZeroVerse Global Data Store
// Full Copy-Paste Version — Step 10

const Store = {
    state: {
        engineStatus: "running",
        routerStatus: "active",
        workerStatus: "active",
        environment: "development",
        dashboardMetrics: {
            tasksCompleted: 0,
            scenesLoaded: 0,
            pagesLoaded: 0
        }
    },

    get(key) {
        return this.state[key];
    },

    set(key, value) {
        this.state[key] = value;
    },

    incrementMetric(metricName) {
        if (this.state.dashboardMetrics[metricName] !== undefined) {
            this.state.dashboardMetrics[metricName]++;
        }
    },

    getMetrics() {
        return this.state.dashboardMetrics;
    }
};

export default Store;
