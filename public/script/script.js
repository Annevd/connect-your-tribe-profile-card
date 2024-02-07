document.addEventListener("DOMContentLoaded", function() {
  const slideContainer = document.querySelector('.slide-container')
  const listItem = document.querySelector('.slide-container li:first-of-type')

  slideContainer.addEventListener('mouseenter', addSlideshow)

  function addSlideshow(){
    listItem.classList.add('slideshow')
  }

  slideContainer.addEventListener('mouseleave', removeSlideshow)

  function removeSlideshow(){
    listItem.classList.remove('slideshow')
  }

});