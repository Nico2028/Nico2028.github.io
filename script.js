// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      e.preventDefault();
      document.querySelector(anchor.getAttribute('href'))
        .scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Carousel logic
  const slides = document.querySelectorAll('.carousel-slide');
  const prevBtn = document.querySelector('.carousel-nav.prev');
  const nextBtn = document.querySelector('.carousel-nav.next');
  let currentIndex = 0;
  
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }
  
  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(currentIndex);
    });
  
    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    });
  
    showSlide(currentIndex);
  }
  
  // Optional: click-to-expand overlay (if element IDs exist)
  const cards = document.querySelectorAll(".card");
  const overlay = document.getElementById("overlay");
  const overlayImg = document.getElementById("overlay-img");
  const overlayCaption = document.getElementById("overlay-caption");
  const overlayClose = document.getElementById("overlay-close");
  
  if (cards.length && overlay && overlayImg && overlayCaption && overlayClose) {
    cards.forEach(card => {
      card.addEventListener("click", () => {
        const imgSrc = card.querySelector("img").src;
        const caption = card.dataset.caption;
        overlayImg.src = imgSrc;
        overlayCaption.textContent = caption;
        overlay.classList.remove("hidden");
      });
    });
  
    overlayClose.addEventListener("click", () => {
      overlay.classList.add("hidden");
    });
  } else {
    console.log("Overlay or cards not found. Skipping overlay setup.");
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.2
  });
  
  document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));

  
  window.addEventListener('scroll', () => {
    const burgerBar = document.querySelector('.hamburger-menu');
    if (burgerBar) {
      burgerBar.classList.toggle('scrolled', window.scrollY > 10);
    }
  });
  

  const whisper = document.querySelector('.type-bounce');
if (whisper) {
  const text = whisper.textContent.trim();
  whisper.textContent = '';
  [...text].forEach((char, i) => {
    const span = document.createElement('span');
    span.textContent = char === ' ' ? '\u00A0' : char;
    span.style.animationDelay = `${i * 0.05}s`;
    if (i >= text.length - 3) span.classList.add('dot-final'); // 最后3个是dot
    whisper.appendChild(span);
  });
}

// Hamburger menu toggle
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

if (burger && navLinks) {
  burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-open');
    burger.classList.toggle('active');
  });
}


// 点击菜单项后自动关闭汉堡菜单
const mobileNavLinks = document.querySelectorAll('.mobile-nav a');
const menuToggle = document.getElementById('menu-toggle');

mobileNavLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (menuToggle) {
      menuToggle.checked = false;
    }
  });
});
