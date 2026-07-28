// main.js - Vanilla JS interactions

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const closeMenuBtn = document.getElementById('close-menu-btn');

  if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileDrawer.classList.remove('translate-x-full');
      mobileDrawer.classList.add('translate-x-0');
    });
  }

  if (closeMenuBtn && mobileDrawer) {
    closeMenuBtn.addEventListener('click', () => {
      mobileDrawer.classList.remove('translate-x-0');
      mobileDrawer.classList.add('translate-x-full');
    });
  }

  // ── Navbar Offset Fix ──────────────────────────────────────────────
  // Dynamically measures actual navbar height and applies it as body
  // padding-top so content always starts BELOW the fixed header.
  // Uses ResizeObserver so it auto-adjusts on window resize / mobile.
  const header = document.getElementById('site-header');
  if (header) {
    const applyOffset = () => {
      document.body.style.paddingTop = header.offsetHeight + 'px';
    };

    // Set immediately on load
    applyOffset();

    // Re-apply on any resize (handles orientation change, topbar hide/show)
    const ro = new ResizeObserver(() => requestAnimationFrame(applyOffset));
    ro.observe(header);

    // ── Sticky Navbar scroll style ──────────────────────────────────
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('shadow-premium', 'dark-glass');
      } else {
        header.classList.remove('shadow-premium', 'dark-glass');
      }
    }, { passive: true });
  }


  // Intersection Observer for Scroll Animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains('animate-on-scroll')) {
          entry.target.classList.add('animate-fade-up');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
          observer.unobserve(entry.target);
        }
      }
    });
  }, observerOptions);

  document.querySelectorAll('.animate-on-scroll').forEach((el) => {
    el.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700');
    observer.observe(el);
  });

  // Numbers Counter Animation
  const counterElements = document.querySelectorAll('.counter-value');
  const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const endValue = parseInt(target.getAttribute('data-target'), 10);
        let startValue = 0;
        const duration = 2000;
        const increment = endValue / (duration / 16); // 60 FPS

        const updateCounter = () => {
          startValue += increment;
          if (startValue < endValue) {
            target.textContent = Math.ceil(startValue).toLocaleString() + (target.getAttribute('data-suffix') || '');
            requestAnimationFrame(updateCounter);
          } else {
            target.textContent = endValue.toLocaleString() + (target.getAttribute('data-suffix') || '');
          }
        };

        requestAnimationFrame(updateCounter);
        observer.unobserve(target);
      }
    });
  }, observerOptions);

  counterElements.forEach(el => counterObserver.observe(el));

  // Magnetic Button Effect
  const magneticButtons = document.querySelectorAll('.magnetic-btn');
  magneticButtons.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0px, 0px)';
    });
  });

  // Hero Slider
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.slider-dot');
  let currentSlide = 0;

  if (slides.length > 0) {
    const showSlide = (index) => {
      slides.forEach((slide, i) => {
        if (i === index) {
          slide.classList.remove('opacity-0');
          slide.classList.add('opacity-100');
          slide.querySelector('img').classList.add('animate-ken-burns');
        } else {
          slide.classList.add('opacity-0');
          slide.classList.remove('opacity-100');
          slide.querySelector('img').classList.remove('animate-ken-burns');
        }
      });
      
      dots.forEach((dot, i) => {
        if (i === index) {
          dot.classList.remove('bg-white/50');
          dot.classList.add('bg-[--color-accent]');
        } else {
          dot.classList.add('bg-white/50');
          dot.classList.remove('bg-[--color-accent]');
        }
      });
    };

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
      });
    });

    setInterval(() => {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }, 6000); // Change slide every 6 seconds
  }
});
