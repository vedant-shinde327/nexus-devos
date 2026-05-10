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

function showToast(message) {
    const toastContainer = document.getElementById("toast-container");

    const toast = document.createElement("div")

    toast.classList.add("toast");

    toast.innerText = message;

    toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3000);
}

function addTerminalLog(message) {
  appData.terminalLogs.push(message);

  if (appData.terminalLogs.length > 4) {
    appData.terminalLogs.shift();
  }

  saveAppData();

  renderTerminalLogs();
}

function initApp() {
    loadAppData();
    renderNavbarStats();
    renderTerminalLogs();

    if (appData.terminalLogs.length == 0) {
        loadBootLogs();
    }
    startClock();
    setupSidebarNavigation();

    const saveModule = localStorage.getItem("activeModule");

    if(saveModule === "missions") {
        loadMissions();
    } else if(saveModule === "focus") {
        loadFocusEngine();
    } else if(saveModule === "projects") {
        loadProjectVault();
    } else if(saveModule === "analytics") {
        loadAnalyticsLab();
    } else if(saveModule === "notes") {
        loadNotesVault();
    } else {
        loadDashboard();
    }
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
            localStorage.setItem("activeModule", selectModule);

            if (selectModule === "dashboard") {
                loadDashboard();
                console.log(selectModule);
            } if (selectModule === "missions") {
                loadMissions();
            } if (selectModule === "focus") {
                loadFocusEngine();
            } if (selectModule === "projects") {
                loadProjectVault();
            } if (selectModule === "analytics") {
                loadAnalyticsLab();
            } if (selectModule === "notes") {
                loadNotesVault();
            }
        });
    });
}