function addTerminalLog(msg) {
    appData.terminalLogs.push(msg);
    renderTerminalLogs();
    saveAppData();
}

function loadBootLogs() {
    addTerminalLog("Booting NEXUS DEVOS Core...");
    addTerminalLog("Loading developer modules...");
    addTerminalLog("Syncing command console...");
    addTerminalLog("System initialized successfully...");
}