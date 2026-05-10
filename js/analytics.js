function loadAnalyticsLab() {
    const main = document.querySelector(".main-content");

    const completedMissions = appData.missions.filter((mission) => mission.completed).length;
    const productivityScore = appData.xp + appData.completedSessions * 10;

    const xpWidth = Math.min(appData.xp, 100);
    const missionWidth= Math.min(completedMissions * 10, 100);
    const focusWidth = Math.min(appData.completedSessions * 15, 100);

    main.innerHTML = `
        <div class="analytics-screen screen-animation">
            <h2>Analytics Lab</h2>
            <p>Track productivity metrics and system performance insights</p>

            <div class="analytics-cards">
            
                <div class="analytics-card">
                    <i class="fa-solid fa-bolt"></i>
                    <h3>Total XP</h3>
                    <span>${appData.xp}</span>
                </div>

                <div class="analytics-card">
                    <i class="fa-solid fa-list-check"></i>
                    <h3>completed Missions</h3>
                    <span>${completedMissions}</span>
                </div>

                <div class="analytics-card">
                    <i class="fa-solid fa-hourglass-half"></i>
                    <h3>Focus Sessions</h3>
                    <span>${appData.completedSessions}</span>
                </div>

                <div class="analytics-card">
                    <i class="fa-solid fa-chart-line"></i>
                    <h3>Productivity Score</h3>
                    <span>${productivityScore}</span>
                </div>

            </div>

            <div class="analytics-summary">
                <h3>Performance Summary</h3>
                <P>
                    Your productivity systems are actively generating progress 
                    across missions and Focus cycles.
                </p>
            </div>

            <div class="activity-section">

                <h3>System Activity</h3>

                <div class="activity-chart">

                    <div class="activity-bar xp-bar" style="width:${xpWidth}%">
                        <span>XP</span>
                    </div>

                    <div class="activity-bar mission-bar" style="width:${missionWidth}%">
                        <span>Mission</span>
                    </div>

                    <div class="activity-bar focus-bar" style="width:${focusWidth}%">>
                        <span>Focus</span>
                    </div>
                </div>
            </div>
        </div>
    `;

}