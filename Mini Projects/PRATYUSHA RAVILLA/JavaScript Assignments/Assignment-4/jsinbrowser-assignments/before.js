const container = document.getElementById('container');
 // Before
 const newDiv = document.createElement('div');
 newDiv.textContent = 'New DIV before the container';
 container.before(newDiv);