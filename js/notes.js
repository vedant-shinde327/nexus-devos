function loadNotesVault() {
    const main = document.querySelector(".main-content");

    main.innerHTML = `
        <h2>Notes Vault</h2>
        <p>Store quick dev notes and snippest
        <textarea id="note-input" placeholder="Write your developer note..."></textarea>
        <button id="save-note-btn">Save Note</button>
        <div id="notes-list"> </div>
    `;
    renderNotesList();
}

function renderNotesList() {
    const notesList = document.getElementById("notes-list");
}