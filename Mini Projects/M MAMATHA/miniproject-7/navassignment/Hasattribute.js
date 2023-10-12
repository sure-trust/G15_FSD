function myFunction() {
    const element = document.getElementById("myA");
    if (element.hasAttribute("target")) {
      element.setAttribute("target", "_self");
    }
  }