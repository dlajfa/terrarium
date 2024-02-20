const plants = document.querySelectorAll('.plant');

plants.forEach((plant) => {
  if ('ontouchstart' in window) {
    makeDraggable(plant, { 
      start: 'touchstart',
      move: 'touchmove',
      end: 'touchend'
    });
  } else {
    makeDraggable(plant, { 
      start: 'mousedown',
      move: 'mousemove',
      end: 'mouseup'
    });
  }
});

function makeDraggable(plant, events) {
  const { start, move, end } = events;
  let offsetLeft, offsetTop, clientX, clientY;

  plant.addEventListener(start, (event) => {
    event.preventDefault();
    offsetLeft = plant.offsetLeft;
    offsetTop = plant.offsetTop;
    clientX = event.clientX;
    clientY = event.clientY;
    document.addEventListener(move, movePlant);
  });

  document.addEventListener(end, (event) => {
    event.preventDefault();
    document.removeEventListener(move, movePlant);
  });

  function movePlant(event) {
    event.preventDefault();
    const dx = event.clientX - clientX;
    const dy = event.clientY - clientY;
    plant.style.left = offsetLeft + dx + 'px';
    plant.style.top = offsetTop + dy + 'px';
  }
}
