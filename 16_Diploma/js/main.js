
let init = () => {
  let studentName = document.getElementById('name');
  let career = document.getElementById('career');
  let button = document.getElementById('btnGenerate');
  let diplomaUrl = 'dimploma.html';
  // cuando el nombre y carrera se seleccionen
  // clase del boton pasa de btn-dark a btn-info
  // Función para actualizar el estado del botón
  let updateButtonState = (e) => {
    console.log('updateButtonState');
    let element = e.target;
    element.classList.remove('is-invalid');
    if (studentName.value.trim() && career.value !== 'Carrera') {
      button.classList.remove('btn-dark');
      button.classList.add('btn-info');
    } else {
      button.classList.remove('btn-info');
      button.classList.add('btn-dark');
    }
  };

  // Event listeners para los inputs
  studentName.addEventListener('input', updateButtonState);
  career.addEventListener('input', updateButtonState);

  // Event listener para el botón
  button.addEventListener('click', () => {
    console.log('click');
    let exitStatus = false;
    let focused = false;
    let stundetRegex = /^[a-zA-Z\s]+$/;
    if (!studentName.value.trim() || !stundetRegex.test(studentName.value)) {
      studentName.classList.add('is-invalid');
      if (!focused) {
        studentName.focus();
        focused = true;
      }
      exitStatus = true;
    }
    if (career.value === 'Carrera') {
      career.classList.add('is-invalid');
      if (!focused) {
        career.focus();
      }
      exitStatus = true;
    }
    if (exitStatus) {
      return;
    }
    console.log('Generando diploma');
    localStorage.studentName = studentName.value;
    localStorage.career = career.value;
    window.open(diplomaUrl);
  });
}

window.onload = init;