function saveAppData() {
    localStorage.setItem("nexusDevosData", JSON.stringify(appData));
}

function loadAppData() {
    const saveData = localStorage.getItem("nexusDevosData");


    if(saveAppData) {
        const parseData = JSON.parse(saveData);

        if(parseData) {
            appData = parseData;
        }
    }
}

function resetAppData() {
    localStorage.removeItem("nexusDevosData");
    location.reload();
}