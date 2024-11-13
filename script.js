document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});



const modal = document.getElementById('modal');
const images = document.querySelectorAll('.image');

images.forEach(image => {
  image.addEventListener('click', () => {
    modal.style.display = 'block';
    modal.innerHTML = `<img src="${image.src}" alt="${image.alt}">`;
  });
});

document.querySelector('.close').addEventListener('click', () => {
  modal.style.display = 'none';
});



const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('nav');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});
