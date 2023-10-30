function loadScript(url) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = url;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

async function loadAndDisplayScript() {
    const scriptUrl = 'path_to_your_script.js';
    try {
        await loadScript(scriptUrl);
        
        document.getElementById('result').innerHTML = 'Script loaded successfully!';
    } catch (error) {
        
        document.getElementById('result').innerHTML = 'Error loading the script!';
    }
}

loadAndDisplayScript();