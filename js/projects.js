function loadProjectVault() {
    const main = document.querySelector(".main-content");

    main.innerHTML = `
        <div class="project-screen">
            <h2>Project Vault</h2>
            <p>Manage active developer projects and workflows</p>

            <div class="project-controls">

                <input
                    type="text"
                    id="project-title"
                    placeholder="Enter project title"
                >

                <select id="project-status">
                    <option>Planning</option>
                    <option>In Progress</option>
                    <option>Completed</option>
                </select>

                <button id="create-project-btn">Create Project</button>
  
            </div>
            <div id="project-list"></div>
        </div>
    `;
    renderProjectList();
}