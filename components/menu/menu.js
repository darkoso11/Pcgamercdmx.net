document.getElementById('hamburger').addEventListener('click', function() {
  document.querySelector('.left-menu').classList.toggle('active');
  document.querySelector('.right-menu').classList.toggle('active');
});