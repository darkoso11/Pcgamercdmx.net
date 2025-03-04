document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburger');
  const leftMenu = document.querySelector('.left-menu');
  const rightMenu = document.querySelector('.right-menu');
  const menuOverlay = document.getElementById('menuOverlay');
  
  hamburger.addEventListener('click', function() {
    this.classList.toggle('active');
    leftMenu.classList.toggle('active');
    rightMenu.classList.toggle('active');
    menuOverlay.classList.toggle('active');
  });
  
  menuOverlay.addEventListener('click', function() {
    hamburger.classList.remove('active');
    leftMenu.classList.remove('active');
    rightMenu.classList.remove('active');
    this.classList.remove('active');
  });
});