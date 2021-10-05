function Process(state) {
    this.state = state;
}

// below, immediately invoked function expression (runs as soon as being defined)
const Singleton = (function () {
    function ProcessManager() {
        this.numProcess = 0;
    }
    let processManager;

    function createProcessManager() {
        processManager = new ProcessManager();
        return processManager;
    }

    return {
        getProcessManager: () => {
            if(!processManager){
                processManager = createProcessManager();
            }
            return processManager;
        }
    }
})()

const processManager = Singleton.getProcessManager();
const processManager2 = Singleton.getProcessManager();

console.log(processManager === processManager2); // true as the same instance is returned