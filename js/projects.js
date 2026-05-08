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

  const createBtn = document.getElementById("create-project-btn");

  createBtn.addEventListener("click", () => {
    const projectTitle = document.getElementById("project-title").value;
    const projectStatus = document.getElementById("project-status").value;

    if (!projectTitle) return;

    appData.projects.push({
      title: projectTitle,
      status: projectStatus,
    });
    saveAppData();
    renderProjectList();
    showToast("Project Creared");
    document.getElementById("project-title").value = "";
  });
}

function renderProjectList() {
  const projectContainer = document.getElementById("project-list");

  projectContainer.innerHTML = "";

  appData.projects.forEach((project, index) => {
    projectContainer.innerHTML += `
            <div class="project-card">
                <h3>${project.title}</h3>

                <div class="project-actions">
                    <span class="project-status">
                        ${project.status}
                    </span>
                    <button data-delete-project="${index}">Delete</button>
                </div>
            </div>
        `;
  });
  setupProjectDeleteButtons();
}

function setupProjectDeleteButtons() {
  const deleteBtns = document.querySelectorAll("[data-delete-project]");

  deleteBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      
        const index = btn.dataset.deleteProject;

        appData.projects.splice(index, 1);

        saveAppData();
        renderProjectList();
    });
  });
}
