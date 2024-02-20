const plants = document.querySelectorAll('.plant');

plants.forEach((plant) => {
  makeDraggable(plant);
});

function makeDraggable(plant, events) {
  let offsetLeft, offsetTop, clientX, clientY;

  plant.addEventListener('pointerdown', (event) => {
    event.preventDefault();
    offsetLeft = plant.offsetLeft;
    offsetTop = plant.offsetTop;
    clientX = event.clientX;
    clientY = event.clientY;
    document.addEventListener('pointermove', movePlant);
  });

  document.addEventListener('pointerup', (event) => {
    event.preventDefault();
    document.removeEventListener('pointermove', movePlant);
  });

  function movePlant(event) {
    event.preventDefault();
    const dx = event.clientX - clientX;
    const dy = event.clientY - clientY;
    plant.style.left = offsetLeft + dx + 'px';
    plant.style.top = offsetTop + dy + 'px';
  }
}
