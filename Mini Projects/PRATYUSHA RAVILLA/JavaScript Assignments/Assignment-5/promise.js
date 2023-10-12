function loadScript(url) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = url;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error(`Failed to load script: ${url}`));
      document.head.appendChild(script);
    });
  }

  // Usage
  const scriptUrl = 'promise.js'; 

  loadScript(scriptUrl)
    .then(() => {
      console.log('Script loaded successfully!');
      // Perform any actions that depend on the loaded script here
    })
    .catch((error) => {
      console.error(error.message);
      // Handle the error if the script fails to load
    });