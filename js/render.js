function renderNavbarStats() {
    document.getElementById("xp-txt").textContent = `XP: ${appData.xp }`;
    document.getElementById("level-txt").textContent = `Level ${appData.level}`;
    document.getElementById("streak-txt").textContent = `${appData.streak} Streak`;
}

function renderTerminalLogs() {
    const terminalBox = document.getElementById("terminal-output");

    terminalBox.innerText = "";

    appData.terminalLogs.forEach(function(log) {
        terminalBox.innerHTML += `<p> ${log}</p>`;
    });
}