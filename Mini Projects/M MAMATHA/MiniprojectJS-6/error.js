function loadScript(url) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = url;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

const scriptUrl = 'path_to_your_script.js';

loadScript(scriptUrl)
    .then(() => {
        
        document.getElementById('result').innerHTML = 'Script loaded successfully!';
    })
    .catch(() => {
        
        document.getElementById('result').innerHTML = 'Error loading the script!';
    });