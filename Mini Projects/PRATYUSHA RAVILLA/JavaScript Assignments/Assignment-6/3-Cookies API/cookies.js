// Function to set a cookie with a given name, value, and expiration date
function setCookie() {
    let cookieName = "example_cookie";
    var cookieValue = "Hello, this is a cookie!";
    var expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + 7 * 24 * 60 * 60 * 1000); // 7 days from now

    // Create the cookie string with name, value, and expiration date
    var cookieString = cookieName + "=" + encodeURIComponent(cookieValue) + "; expires=" + expirationDate.toUTCString() + "; path=/";

    // Set the cookie
    document.cookie = cookieString;
    alert("Cookie set successfully!");
  }

  // Function to get the value of a cookie with a given name
  function getCookie() {
    var cookieName = "example_cookie";
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();
      if (cookie.startsWith(cookieName + "=")) {
        var cookieValue = decodeURIComponent(cookie.substring(cookieName.length + 1));
        alert("Cookie value: " + cookieValue);
        return;
      }
    }

    alert("Cookie not found!");
  }

  // Function to delete a cookie with a given name
  function deleteCookie() {
    var cookieName = "example_cookie";

    // Set the cookie with an expiration date in the past to delete it
    var pastDate = new Date();
    pastDate.setTime(pastDate.getTime() - 1);
    var cookieString = cookieName + "=; expires=" + pastDate.toUTCString() + "; path=/";
    document.cookie = cookieString;

    alert("Cookie deleted!");
  }