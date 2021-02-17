const modal = document.querySelector('.modal');
const closeMosal = document.querySelector('.modal__close');
const recipeItems = [...document.querySelectorAll('.recipes__item--click')];
const modalImage = document.querySelector('.recipes__modal-image');
const modalName = document.querySelector('.recipes__modal-name');
const modalAuthor = document.querySelector('.recipes__modal-author');

recipeItems.map((item, index) => {
  item.addEventListener('click', function() {
    const recipeImage = document.querySelectorAll('.recipes__item--click .recipes__image')[index].src;
    const recipeName = document.querySelectorAll('.recipes__item--click .recipes__name')[index].textContent;
    const recipeAuthor = document.querySelectorAll('.recipes__item--click .recipes__author')[index].textContent;

    modal.classList.add('active');
    modalImage.src = recipeImage;
    modalName.innerHTML = recipeName;
    modalAuthor.innerHTML = recipeAuthor;
  })
})

closeMosal.addEventListener('click', function() {
  modal.classList.remove('active');
})