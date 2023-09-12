const container = document.getElementById('container');
        // After
        const newSpan = document.createElement('span');
        newSpan.textContent = 'New SPAN after the container';
        container.after(newSpan);
