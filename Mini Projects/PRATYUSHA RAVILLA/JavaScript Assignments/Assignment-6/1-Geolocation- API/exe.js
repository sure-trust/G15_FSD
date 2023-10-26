// Check if the Geolocation API is available in the browser
if ("geolocation" in navigator) {
    // Get the user's current position
    navigator.geolocation.getCurrentPosition(
      function (position) {
        // Extract latitude and longitude from the position object
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;

        // Display the latitude and longitude on the web page
        document.getElementById("latitude").textContent = latitude;
        document.getElementById("longitude").textContent = longitude;
      },
      function (error) {
        // If there is an error, display an error message
        console.error("Error getting location:", error);
        document.getElementById("latitude").textContent = "Error";
        document.getElementById("longitude").textContent = "Error";
      }
    );
  } else {
    // If the Geolocation API is not available, display an error message
    console.error("Geolocation is not available in this browser.");
    document.getElementById("latitude").textContent = "Not available";
    document.getElementById("longitude").textContent = "Not available";
  }