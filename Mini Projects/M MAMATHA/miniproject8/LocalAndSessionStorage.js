function saveToLocalStorage() {
    const data = document.getElementById("dataInput").value;
    localStorage.setItem("savedData", data);
    alert("Data saved to local storage.");
}

function retrieveFromLocalStorage() {
    const savedData = localStorage.getItem("savedData");
    if (savedData) {
        const resultElement = document.getElementById("result");
        resultElement.innerHTML = `Retrieved Data from Local Storage: ${savedData}`;
    } else {
        alert("No data found in local storage.");
    }
}

function saveToSessionStorage() {
    const data = document.getElementById("dataInput").value;
    sessionStorage.setItem("savedData", data);
    alert("Data saved to session storage.");
}

function retrieveFromSessionStorage() {
    const savedData = sessionStorage.getItem("savedData");
    if (savedData) {
        const resultElement = document.getElementById("result");
        resultElement.innerHTML = `Retrieved Data from Session Storage: ${savedData}`;
    } else {
        alert("No data found in session storage.");
    }
}