const tilted = document.querySelectorAll(".tilt");

tilted.forEach(tilt => {
  tilt.addEventListener("mousemove", event => {
    const { left, top, width, height } = tilt.getBoundingClientRect();
    const middleX = width / 2;
    const middleY = height / 2;
    const offsetX = (event.clientX - left - middleX) / middleX;
    const offsetY = (middleY - (event.clientY - top)) / middleY;
    tilt.style.transform = `
      perspective(1000px) 
      rotateY(${offsetX * 8}deg) 
      rotateX(${offsetY * 8}deg) 
      scale3d(1, 1, 1)`;
  });

  tilt.addEventListener("mouseleave", event => {
    tilt.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)`;
  });
});
