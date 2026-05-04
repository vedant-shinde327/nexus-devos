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

    if (appData.terminalLogs.length == 0) {
        loadBootLogs();
    }
    startClock();
    loadDashboard();
    setupSidebarNavigation();
}

document.addEventListener("DOMContentLoaded", function () {
    initApp();
});

function setupSidebarNavigation() {
    let navItems = document.querySelectorAll(".sidebar li");

    navItems.forEach((items) => {
        items.addEventListener("click", function () {
            navItems.forEach((Element) => {
                Element.classList.remove("active");
            });

            items.classList.add("active");

            const selectModule = items.dataset.module;

            if (selectModule === "dashboard") {
                loadDashboard();
                console.log(selectModule);
            } if (selectModule === "missions") {
                loadMissions();
            } if (selectModule === "focus") {
                loadfocus();
            } if (selectModule === "projects") {
                loadProjects();
            } if (selectModule === "analytics") {
                loadAnalytics();
            } if (selectModule === "notes") {
                loadNotes();
            }
        });
    });
}