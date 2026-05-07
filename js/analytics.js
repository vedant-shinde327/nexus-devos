function loadAnalyticsLab() {
    const main = document.querySelector(".main-content");

    const completedMissions = appData.missions.filter((mission) => mission.completed).length;
    const productivityScore = appData.xp + appData.completedSessions * 10;

    main.innerHTML = `
        <div class="analytics-screen">
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
        </div>
    `;

}