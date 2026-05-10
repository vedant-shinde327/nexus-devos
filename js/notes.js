function loadNotesVault() {
  const main = document.querySelector(".main-content");

  main.innerHTML = `
        <div class="notes-screen screen-animation">
            <h2>Notes Vault</h2>
            <p>Store quick dev notes and snippest</p>
            <textarea id="note-input" placeholder="Write your developer note..."></textarea>
            <button id="save-note-btn">Save Note</button>
            <div id="notes-list"> </div>
        </div>
    `;

  const saveBtn = document.getElementById("save-note-btn");

  saveBtn.addEventListener("click", () => {
    console.log("save clicked");
    const noteText = document.getElementById("note-input").value;

    if (!noteText) return;

    appData.notes.push({
      content: noteText,
    });

    saveAppData();
    renderNotesList();
    showToast("Note Saved");

    document.getElementById("note-input").value = "";
  });

  renderNotesList();
}

function renderNotesList() {
  const notesList = document.getElementById("notes-list");

  notesList.innerHTML = "";

  appData.notes.forEach((notes, index) => {
    notesList.innerHTML += `
            <div class="note-card">
                <p>${notes.content}</p>
                <button data-delete-note="${index}" class="add-hover">Delete</button>
            </div>
        `;
  });
  setupNoteDeleteButtons();
}

function setupNoteDeleteButtons() {
  const deleteBtns = document.querySelectorAll("[data-delete-note]");

  deleteBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const index = btn.dataset.deleteNote;

      appData.notes.splice(index, 1);

      saveAppData();
      renderNotesList();
    });
  });
}
