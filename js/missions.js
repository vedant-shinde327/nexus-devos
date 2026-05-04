function loadMissions() {
    document.querySelector(".main-content").innerHTML = `<div class="mission-screen">

        <h2>Mission Control</h2>
        <p>Manage your daily developer objectives</p>
        <button id="add-mission-btn">+ Add New Mission</button>

        <div id="mission-list"></div>
    </div>`;
}