const button = document.getElementById('myButton');
        button.onclick = function () {
            setAttributes(button, { 'style': 'background-color: red; color: white;' });
        };

        function setAttributes(element, attributes) {
            for (const key in attributes) {
                element.setAttribute(key, attributes[key]);
            }
        }