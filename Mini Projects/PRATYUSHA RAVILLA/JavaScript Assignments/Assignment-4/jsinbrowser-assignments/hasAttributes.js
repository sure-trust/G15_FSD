const paragraph = document.getElementById('myPara');
        const hasAttrs = hasAttributes(paragraph);

        function hasAttributes(element) {
            return element.hasAttributes() ? 'Yes' : 'No';
        }

        console.log('Has attributes?', hasAttrs);