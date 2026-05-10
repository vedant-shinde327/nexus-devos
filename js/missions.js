function loadMissions() {
  document.querySelector(".main-content").innerHTML = `
    <div class="mission-screen screen-animation">

        <h2>Mission Control</h2>
        <p>Manage your daily developer objectives</p>

        <button id="add-mission-btn" class="add-hover">
            + Add New Mission
        </button>

        <div id="mission-list"></div>

    </div>
    `;

  renderMissionList();

  const addMissionBtn = document.getElementById("add-mission-btn");

  const modal = document.getElementById("mission-modal");

  const saveMissionBtn = document.getElementById("save-mission-btn");

  const cancelMissionBtn = document.getElementById("cancel-mission-btn");

  const missionInput = document.getElementById("mission-input");

  /* OPEN MODAL */

  addMissionBtn.addEventListener("click", () => {
    modal.style.display = "flex";

    missionInput.focus();
  });

  /* SAVE MISSION */

  saveMissionBtn.onclick = () => {
    const missionTitle = missionInput.value.trim();

    if (!missionTitle) return;

    appData.missions.push({
      tittle: missionTitle,
      completed: false,
    });

    saveAppData();

    renderMissionList();

    showToast("Mission Added");

    modal.style.display = "none";

    missionInput.value = "";
  };

  /* CANCEL MODAL */

  cancelMissionBtn.onclick = () => {
    modal.style.display = "none";

    missionInput.value = "";
  };
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

      addTerminalLog("Mission completed +20 XP awarded.");

      renderMissionList();
      renderNavbarStats();
      showToast("Mission Added");
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
