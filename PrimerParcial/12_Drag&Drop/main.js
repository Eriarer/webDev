let init = () => {
    let draggables = document.querySelectorAll('.draggable');
    let dropzones = document.querySelectorAll('.dropzone');
    let eventType = document.getElementById('eventType');
    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', () => {
            draggable.classList.add('dragging');
            eventType.innerHTML = 'dragstart';
        });
        draggable.addEventListener('dragend', () => {
            draggable.classList.remove('dragging');
            eventType.innerHTML = 'dragend';
        });
    });
    dropzones.forEach(dropzone => {
        dropzone.addEventListener('dragover', e => {
            e.preventDefault();
        });
        dropzone.addEventListener('dragenter', () => {
            eventType.innerHTML = 'dragenter';
        });
        dropzone.addEventListener('dragleave', () => {
            eventType.innerHTML = 'dragleave';
        });
        dropzone.addEventListener('drop', e => {
            e.preventDefault();
            let draggable = document.querySelector('.draggable.dragging');
            dropzone.appendChild(draggable);
        });
    });
}




window.onload = init;