const recipeItems = [...document.querySelectorAll('.recipes__item--click')];
const buttonToggleList = [...document.querySelectorAll('.recipe-single__button-toggle')];
const listContainer = [...document.querySelectorAll('.recipe-single__list-container')];

recipeItems.map((item, index) => {
  item.addEventListener('click', () => {
    window.location.href = `/receitas/${index}`;
  });
});

buttonToggleList.map((button, index) => {
  const heightListContainer = listContainer[index].clientHeight;
  console.log(heightListContainer)
  button.addEventListener('click', () => {
    if(listContainer[index].classList.contains('active')) {
      listContainer[index].style.height = heightListContainer;
      listContainer[index].classList.remove('active');
      button.innerHTML = 'Esconder';
    } else {
      listContainer[index].classList.add('active');
      button.innerHTML = 'Mostrar';
    }
  });
});