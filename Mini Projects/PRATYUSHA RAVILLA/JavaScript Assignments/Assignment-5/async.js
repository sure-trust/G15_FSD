// Function to load a script dynamically
function loadScript(url) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = url;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error(`Failed to load script: ${url}`));
      document.head.appendChild(script);
    });
  }

  // Usage with async/await
  async function loadScriptAsync() {
    try {
      const scriptUrl = 'question1.js'; 
      await loadScript(scriptUrl);
      console.log('Script loaded successfully!');
      // Perform any actions that depend on the loaded script here
    } catch (error) {
      console.error(error.message);
      // Handle the error if the script fails to load
    }
  }

  // Call the async function to load the script
  loadScriptAsync();