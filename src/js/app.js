const app = () => {
  const menusBtnContainer = document.querySelector('.menus-btn-container')
  
  menusBtnContainer.addEventListener('click', menusContainerBtnOnClick)
  
  function menusContainerBtnOnClick() {
    const menusBtn = document.querySelector('.menus-btn')
    const closeMenusBtn = document.querySelector('.close-menus-btn')
    const menus = document.querySelector('nav')

    menusBtn.classList.toggle('opacity-0')
    closeMenusBtn.classList.toggle('opacity-1')
    menus.classList.toggle('slide')
  }
}

export default app