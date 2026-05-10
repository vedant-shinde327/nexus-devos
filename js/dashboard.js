function loadDashboard() {
  const main = document.querySelector(".main-content");
  const pendingMissions = appData.missions.filter(
    (mission) => !mission.completed,
  ).length;
  main.innerHTML = `
        <div class="dashboard-screen screen-animation">
            <h2>Developer Control Dashboard</h2>
            <p>System status overview and productivity snapshot</p>
              
            <div class="dashboard-cards">
                <div class="stat-card">
                    <i class="fa-solid fa-bolt"></i>
                    <h3>Total XP</h3>
                    <span>${appData.xp}</span>
                </div>

                <div class="stat-card">
                    <i class="fa-solid fa-list-check"></i>
                    <h3>Total Missions</h3>
                    <span>${appData.missions.length}</span>
                </div>

                <div class="stat-card">
                    <i class="fa-solid fa-hourglass-half"></i>
                    <h3>Focus Sessions</h3>
                    <span>${appData.completedSessions}</span>
                </div>

                 <div class="stat-card">
                    <i class="fa-solid fa-layer-group"></i>
                    <h3>Pending Missions</h3>
                    <span>${pendingMissions}</span>
                </div>
            </div>

            <div class="dashboard-welcome">
                <h2 >Welcome back, Developer</h2>
                <p>All systems operational, Select a module from the sidebar to begin your workflow.</p>
                <P class="status-line">NEXUS DEVOS Core Running...</p>
            </div>
        </div>
    `;
}
