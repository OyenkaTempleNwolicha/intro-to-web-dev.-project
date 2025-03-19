function toggleNav() {
  const nav = document.querySelector('nav');
  console.log('Toggling navigation');
  nav.classList.toggle('active');
}

document.querySelector('.hamburger-icon').addEventListener('click', toggleNav);

// Add smooth scrolling behavior
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    console.log(`Scrolling to ${targetId}`);
    targetElement.scrollIntoView({ behavior: 'smooth' });
  });
});

document.getElementById('project-filter').addEventListener('input', function () {
  const filterValue = this.value.toLowerCase();
  console.log(`Filtering projects with value: ${filterValue}`);
  const projects = document.querySelectorAll('.projects .project');

  projects.forEach(project => {
    const projectName = project.getAttribute('data-name').toLowerCase();
    if (projectName.includes(filterValue)) {
      project.style.display = '';
    } else {
      project.style.display = 'none';
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.querySelector('.close');
  const projectImages = document.querySelectorAll('.project-image');

  projectImages.forEach(img => {
    img.addEventListener('click', function() {
      lightbox.style.display = 'block';
      lightboxImg.src = this.src;
    });
  });

  closeBtn.addEventListener('click', function() {
    lightbox.style.display = 'none';
  });

  lightbox.addEventListener('click', function(event) {
    if (event.target === lightbox) {
      lightbox.style.display = 'none';
    }
  });
});

document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Form submitted!');
});
