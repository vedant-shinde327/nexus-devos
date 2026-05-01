console.log("app js loaded");
function startClock() {

    function updateClock() {
        const now = new Date();

        const currentDate = now.toLocaleDateString();
        const currentTime = now.toLocaleTimeString();

        document.getElementById("live-date").innerHTML =
          `<i class="fa-solid fa-calendar-days"></i> ${currentDate}`;
        document.getElementById("live-time").innerHTML =
          `<i class="fa-solid fa-clock"></i> ${currentTime}`;
    }
    updateClock();
    setInterval(updateClock, 1000);
}

function initApp() {
    loadAppData();
    renderNavbarStats();
    renderTerminalLogs();

    if(appData.terminalLogs.length == 0) {
        loadBootLogs();
    }
    startClock();
}

document.addEventListener("DOMContentLoaded", function() {
    initApp();
});