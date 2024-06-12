window.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.slider');
  const firstChild = slider.firstElementChild;
  const clone = firstChild.cloneNode(true);
  slider.appendChild(clone);

  slider.addEventListener('animationend', () => {
      slider.appendChild(slider.firstElementChild);
      slider.style.animation = 'none';
      slider.offsetHeight; 
      slider.style.animation = '';
  });
});
