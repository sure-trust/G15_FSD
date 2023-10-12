const image = document.getElementById('myImage');
        const attributes = getAttributes(image);

        function getAttributes(element) {
            const attributes = {};
            for (const attr of element.attributes) {
                attributes[attr.name] = attr.value;
            }
            return attributes;
        }

        console.log('Element attributes:', attributes);