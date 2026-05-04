function loadDashboard() {
  const main = document.querySelector(".main-content");

  main.innerHTML = `
        <div class="dashboard-screen">
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
                    <h3>Missions</h3>
                    <span>${appData.missions.length}</span>
                </div>

                <div class="stat-card">
                    <i class="fa-solid fa-folder-open"></i>
                    <h3>Projects</h3>
                    <span>${appData.projects.length}</span>
                </div>

                <div class="stat-card">
                    <i class="fa-solid fa-note-sticky"></i>
                    <h3>Notes</h3>
                    <span>${appData.notes.length}</span>
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
