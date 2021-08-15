
const myHeading = document.querySelector('h1');
const btnToggle = document.querySelector('.btn-toggle');

myHeading.addEventListener('click', () => {
  myHeading.textContent = 'Have a Good Time!';

});

btnToggle.addEventListener('click', () => {
  var boxesContainer = document.querySelector('.ServiceBoxes2');
  var compStyle = getComputedStyle(boxesContainer);

  if (boxesContainer.style.display === 'none') {
    btnToggle.textContent = 'Hide List';
    boxesContainer.removeAttribute('style');

  } else {
    btnToggle.textContent = 'Show More';
    boxesContainer.style.display = 'none';

  }
});