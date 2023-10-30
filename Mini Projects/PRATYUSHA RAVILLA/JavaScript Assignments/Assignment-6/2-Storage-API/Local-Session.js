// Function to save data to Local Storage
function saveDataToLocal() {
    var data = document.getElementById("data").value;
    if (data.trim() !== "") {
      localStorage.setItem("storedData", data);
      updateStoredData();
    }
  }

  // Function to save data to Session Storage
  function saveDataToSession() {
    var data = document.getElementById("data").value;
    if (data.trim() !== "") {
      sessionStorage.setItem("storedData", data);
      updateStoredData();
    }
  }

  // Function to update the displayed stored data
  function updateStoredData() {
    var localData = localStorage.getItem("storedData") || "No data stored in Local Storage.";
    var sessionData = sessionStorage.getItem("storedData") || "No data stored in Session Storage.";

    document.getElementById("localData").textContent = localData;
    document.getElementById("sessionData").textContent = sessionData;
  }

  // Load the stored data on page load
  updateStoredData();