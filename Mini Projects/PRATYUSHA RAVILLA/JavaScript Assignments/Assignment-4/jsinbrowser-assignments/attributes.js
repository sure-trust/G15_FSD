const div = document.getElementById('myDiv');
        const allAttributes = div.attributes;

        console.log('All attributes of the element:');
        for (const attr of allAttributes) {
            console.log(`${attr.name}: ${attr.value}`);
        }