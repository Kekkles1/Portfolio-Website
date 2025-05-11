function openOverlay(id) {
  const overlays = document.querySelectorAll('.popup-overlay, .popup-overlay-scroll');

  // Hide all overlays
  overlays.forEach(overlay => {
    overlay.style.display = 'none';
  });

  const target = document.getElementById(id);
  const techStack = document.querySelector('.tech-stack');

  if (target && techStack) {
    const top = techStack.offsetTop;
    const left = techStack.offsetLeft;

    target.style.position = 'absolute';
    target.style.top = top + 'px';
    target.style.left = left + 'px';
    target.style.display = 'block';
  }
}

function closeOverlay(id) {
  const overlay = document.getElementById(id);
  if (overlay) {
    overlay.style.display = 'none';
  }
}
