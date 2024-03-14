document.addEventListener('DOMContentLoaded', function () {
  const slideItems = document.querySelectorAll('.slide-item');
  const numberOfSlides = slideItems.length - 1;
  const menuButtons = document.querySelectorAll('.slider-menu-button');
  const prevButton = document.querySelector('.slide-prev');
  const nextButton = document.querySelector('.slide-next');
  const animationSeconds = 0.3;

  let currentSlideIndex = 0;

  // Función para mostrar el slide actual
  function showSlide(index) {
    slideItems.forEach((item, i) => {
      if (i === index) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }

  function hideSlide(index) {
    slideItems.forEach((item, i) => {
      if (i === index) {
        item.classList.add('inactive');
      } else {
        item.classList.remove('inactive');
      }
    });
  }

  // Función para actualizar el botón activo del menú
  function updateMenuButton(index) {
    menuButtons.forEach((button, i) => {
      if (i === index) {
        button.classList.add('active');
        slideItems[i].classList.add('active');
      } else {
        button.classList.remove('active');
      }
    });
  }

  // Función para cambiar al slide siguiente
  function nextSlide() {
    if (currentSlideIndex === numberOfSlides) {
      // agregar la animacion rc
      swipeLR(0, currentSlideIndex);
    } else {
      // agregar la animacion rc
      swipeLR(currentSlideIndex + 1, currentSlideIndex);
    }
  }

  // Función para cambiar al slide anterior
  function prevSlide() {
    if (currentSlideIndex === 0) {
      swipeRL(numberOfSlides, currentSlideIndex);
    } else {
      swipeRL(currentSlideIndex - 1, currentSlideIndex);
    }
  }

  // Event listeners para los botones "Prev" y "Next"
  prevButton.addEventListener('click', prevSlide);
  nextButton.addEventListener('click', nextSlide);

  // Event listener para el click en los botones del menú
  menuButtons.forEach((button, index) => {
    button.addEventListener('click', function (event) {
      event.preventDefault(); // Evita el comportamiento predeterminado del enlace
      // mover de izquierda a derecha
      if (currentSlideIndex === numberOfSlides && index === 0) {
        // agregar la animacion rc
        swipeLR(index, currentSlideIndex);
      } else if (currentSlideIndex === 0 && index === numberOfSlides) {
        // mover de derecha a izquierda
        // agregar la animacion lc
        swipeRL(index, currentSlideIndex);
      } else if (currentSlideIndex < index) {
        // mover de izquierda a derecha
        // agregar la animacion rc
        swipeLR(index, currentSlideIndex);
      } else {
        // mover de derecha a izquierda
        // agregar la animacion lc
        swipeRL(index, currentSlideIndex);
      }
    });
  });


  function swipeLR(itemA, itemB) {
    hideSlide(currentSlideIndex);
    showSlide(itemA);
    updateMenuButton(itemA);
    currentSlideIndex = itemA;
    // agregar la animacion rc
    slideItems[itemA].style.animation = `slide-rc ${animationSeconds}s ease-in-out`;
    // agregar la animacion cl
    slideItems[itemB].style.animation = `slide-cl ${animationSeconds}s ease-in-out`;
    setTimeout(() => {
      slideItems[itemA].style.animation = '';
      slideItems[itemB].style.animation = '';
    }, animationSeconds * 1000);
  }

  function swipeRL(indexA, indexB) {
    hideSlide(currentSlideIndex);
    showSlide(indexA);
    updateMenuButton(indexA);
    currentSlideIndex = indexA;
    // agregar la animacion lc
    slideItems[indexA].style.animation = `slide-lc ${animationSeconds}s ease-in-out`;
    // agregar la animacion cr
    slideItems[indexB].style.animation = `slide-cr ${animationSeconds}s ease-in-out`;
    setTimeout(() => {
      slideItems[indexA].style.animation = '';
      slideItems[indexB].style.animation = '';
    }, animationSeconds * 1000);
    updateMenuButton(currentSlideIndex);
  }


  // Mostrar el primer slide al cargar la página
  showSlide(currentSlideIndex);
  updateMenuButton(currentSlideIndex);
  // Desplazamiento automático cada 3 segundos
  //setInterval(autoScroll, 3000);

  function autoScroll() {
    nextSlide();
  }
});
