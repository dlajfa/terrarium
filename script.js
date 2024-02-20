const plants = document.querySelectorAll('.plant');

for (const plant of plants) {
  makeDraggable(plant);
}

function makeDraggable(plant) {
  let offsetLeft, offsetTop, clientX, clientY;

  plant.addEventListener('mousedown', (event) => {
    event.preventDefault();
    offsetLeft = plant.offsetLeft;
    offsetTop = plant.offsetTop;
    clientX = event.clientX;
    clientY = event.clientY;
    document.addEventListener('mousemove', movePlant);
  });

  document.addEventListener('mouseup', (event) => {
    event.preventDefault();
    document.removeEventListener('mousemove', movePlant);
  });

  function movePlant(event) {
    event.preventDefault();
    const dx = event.clientX - clientX;
    const dy = event.clientY - clientY;
    plant.style.left = offsetLeft + dx + 'px';
    plant.style.top = offsetTop + dy + 'px';
  }
}
