document.addEventListener('DOMContentLoaded', function () {
  const slideItems = document.querySelectorAll('.slide-item');
  const numberOfSlides = slideItems.length - 1;
  const menuButtons = document.querySelectorAll('.slider-menu-button');
  const prevButton = document.querySelector('.slide-prev');
  const nextButton = document.querySelector('.slide-next');

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
    hideSlide(currentSlideIndex);
    currentSlideIndex++;
    if (currentSlideIndex >= slideItems.length) {
      currentSlideIndex = 0;
    }
    showSlide(currentSlideIndex);
    updateMenuButton(currentSlideIndex);
    if (currentSlideIndex === 0) {
      // agregar la animacion rc
      slideItems[0].style.animation = 'slide-rc 0.3s ease-in-out';
      // agregar la animacion cl
      slideItems[numberOfSlides].style.animation = 'slide-cl 0.3s ease-in-out';
      setTimeout(() => {
        slideItems[0].style.animation = '';
        slideItems[numberOfSlides].style.animation = '';
      }, 300);
    } else {
      // agregar la animacion rc
      slideItems[currentSlideIndex].style.animation = 'slide-rc 0.3s ease-in-out';
      // agregar la animacion cl
      slideItems[currentSlideIndex - 1].style.animation = 'slide-cl 0.3s ease-in-out';
      setTimeout(() => {
        slideItems[currentSlideIndex].style.animation = '';
        slideItems[currentSlideIndex - 1].style.animation = '';
      }, 300);
    }

  }

  // Función para cambiar al slide anterior
  function prevSlide() {
    hideSlide(currentSlideIndex);
    currentSlideIndex--;
    if (currentSlideIndex < 0) {
      currentSlideIndex = slideItems.length - 1;
    }
    showSlide(currentSlideIndex);
    updateMenuButton(currentSlideIndex);
    if (currentSlideIndex === numberOfSlides) {
      // agregar la animacion lc
      slideItems[0].style.animation = 'slide-cr 0.3s ease-in-out';
      // agregar la animacion cr
      slideItems[numberOfSlides].style.animation = 'slide-lc 0.3s ease-in-out';
      setTimeout(() => {
        slideItems[0].style.animation = '';
        slideItems[numberOfSlides].style.animation = '';
      }, 300);
    } else {
      // agregar la animacion rc
      slideItems[currentSlideIndex].style.animation = 'slide-lc 0.3s ease-in-out';
      // agregar la animacion cl
      slideItems[currentSlideIndex + 1].style.animation = 'slide-cr 0.3s ease-in-out';
      setTimeout(() => {
        slideItems[currentSlideIndex].style.animation = '';
        slideItems[currentSlideIndex + 1].style.animation = '';
      }, 300);
    }
  }

  // Event listeners para los botones "Prev" y "Next"
  prevButton.addEventListener('click', prevSlide);
  nextButton.addEventListener('click', nextSlide);

  // Event listener para el click en los botones del menú
  menuButtons.forEach((button, index) => {
    button.addEventListener('click', function (event) {
      event.preventDefault(); // Evita el comportamiento predeterminado del enlace
      currentSlideIndex = index;
      showSlide(currentSlideIndex);
      updateMenuButton(currentSlideIndex);
    });
  });

  // Mostrar el primer slide al cargar la página
  showSlide(currentSlideIndex);

  // Desplazamiento automático cada 3 segundos
  //setInterval(autoScroll, 3000);

  function autoScroll() {
    nextSlide();
  }
});
