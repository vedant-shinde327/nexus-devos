function loadFocusEngine() {
    document.querySelector(".main-content").innerHTML = `
        <div class="focus-content screen-animation">
            <h2>Focus Engine</h2>
            <p>Deep work session controller</p>
            <input id="focus-minutes" type="number" placeholder="Enter focus minutes">
            <button id="start-focus-btn" class="add-hover">Start Focus Session</button>

            <div id="focus-timer-display">00:00</div>
        </div>
    `;
    const startBtn = document.getElementById("start-focus-btn");
    
    startBtn.addEventListener("click", () => {
        const focusMinutes = document.getElementById("focus-minutes").value;

        if(!focusMinutes) return;

        let totalSeconds = focusMinutes * 60;
        
        const timerDisplay = document.getElementById("focus-timer-display");
        startBtn.disabled = true;
        startBtn.innerText = "Focus Running...";
        timerDisplay.innerText = `${focusMinutes}:00`;

        let focusInterval = setInterval(function() {
            let minutes = Math.floor(totalSeconds / 60);
            let seconds = totalSeconds % 60;

            timerDisplay.innerText = `${minutes}:${seconds}`;

            totalSeconds--;

            if(totalSeconds < 0) {
                clearInterval(focusInterval);

                startBtn.disabled = false;
                startBtn.innerText = "Start Focus Session";

                timerDisplay.innerText = "Session completed";

                appData.xp += 30;
                appData.completedSessions += 1;

               addTerminalLog("Mission completed +20 XP awarded.");

               saveAppData();
                renderNavbarStats();
                showToast("Session completed");
            }
        }, 1000);
    });
}