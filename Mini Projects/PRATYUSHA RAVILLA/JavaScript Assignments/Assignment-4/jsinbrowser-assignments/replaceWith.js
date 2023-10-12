const div = document.getElementById('myDiv');
        const newContent = document.createElement('h1');
        newContent.textContent = 'Replaced content';
        div.replaceWith(newContent);