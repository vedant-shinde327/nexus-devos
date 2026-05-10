function addTerminalLog(message) {
  appData.terminalLogs.push(message);

  renderTerminalLogs();

  setTimeout(() => {
    appData.terminalLogs.shift();

    renderTerminalLogs();
  }, 3000);
}

function loadBootLogs() {
  addTerminalLog("Booting NEXUS DEVOS Core...");
  addTerminalLog("Loading developer modules...");;
  addTerminalLog("System initialized successfully...");
}
