function loadMissions() {
  document.querySelector(".main-content").innerHTML =
    `<div class="mission-screen">

        <h2>Mission Control</h2>
        <p>Manage your daily developer objectives</p>
        <button id="add-mission-btn">+ Add New Mission</button>

        <div id="mission-list"></div>
    </div>`;

  renderMissionList();

  const addMissionBtn = document.getElementById("add-mission-btn");

  addMissionBtn.addEventListener("click", () => {
    const missionTittle = prompt("Enter Mission Tittle");

    if (!missionTittle) return;

    appData.missions.push({
      tittle: missionTittle,
      completed: false,
    });
    saveAppData();
    renderMissionList();
  });
}

function renderMissionList() {
  const missionContainer = document.getElementById("mission-list");

  missionContainer.innerHTML = "";

  appData.missions.forEach((missions, index) => {
    missionContainer.innerHTML += `
            <div class="mission-card">
                <h3>${missions.tittle}</h3>
                <div class="mission-actions">
                    ${
                      missions.completed
                        ? "<span class='completed-badge'>Completed</span>"
                        : `<button data-index="${index}">Complete</button>`
                    }
                    <button data-delete="${index}">Delete</button>
                </div>
            </div>
        `;
  });
  setupMissionCompleteButtons();
  setupMissionDeleteButtons();
}

function setupMissionCompleteButtons() {
  const completeBtns = document.querySelectorAll(".mission-card button");

  completeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const missionIndex = btn.dataset.index;

      appData.missions[missionIndex].completed = true;

      appData.xp += 20;

      appData.terminalLogs.push("Mission completed +20 XP awarded.");

      saveAppData();

      renderMissionList();
      renderNavbarStats();
      renderTerminalLogs();
    });
  });
}

function setupMissionDeleteButtons() {
    const deleteBtns = document.querySelectorAll("[data-delete]");

    deleteBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            const deleteIndex = btn.dataset.delete;

            appData.missions.splice(deleteIndex, 1);

            saveAppData();
            renderMissionList();
        });
    });
}