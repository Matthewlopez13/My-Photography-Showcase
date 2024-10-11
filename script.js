// Select all zoomable images and the lightbox elements
const images = document.querySelectorAll('.zoomable');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');

// Open lightbox on image click
images.forEach(img => {
  img.addEventListener('click', function() {
    lightbox.style.display = 'flex';
    lightboxImg.src = this.src;
  });
});

// Close the lightbox
closeBtn.addEventListener('click', function() {
  lightbox.style.display = 'none';
});

// Close lightbox by clicking outside the image
lightbox.addEventListener('click', function(e) {
  if (e.target !== lightboxImg) {
    lightbox.style.display = 'none';
  }
});

  