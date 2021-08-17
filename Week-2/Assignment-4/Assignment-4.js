
const myHeading = document.querySelector('h1');
const btnToggle = document.querySelector('.btn-toggle');

myHeading.addEventListener('click', () => {
  myHeading.textContent = 'Have a Good Time!';

});
var boxesContainer = document.querySelector('.ServiceBoxes2');
boxesContainer.style.visibility = 'hidden';
btnToggle.addEventListener('click', () => {

  var compStyle = getComputedStyle(boxesContainer);

  if (boxesContainer.style.visibility === 'hidden') {
    btnToggle.textContent = 'Hide List';
    boxesContainer.style.visibility = 'visible';

  } else {
    btnToggle.textContent = 'Show More';
    boxesContainer.style.visibility = 'hidden';

  }
});