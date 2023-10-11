const container = document.getElementById('container');
// Prepend
const newParagraph2 = document.createElement('p');
newParagraph2.textContent = 'Prepended Paragraph';
container.prepend(newParagraph2);
