// Main navigation & scroll behavior script
(function() {
  const header = document.querySelector('header');
  const navToggle = document.querySelector('.nav-toggle');
  const navbar = document.getElementById('primary-navigation');
  const navLinksContainer = navbar ? navbar.querySelector('.nav-links') : null;
  const backToTop = document.querySelector('.back-to-top');

  let lastScroll = window.pageYOffset;
  let ticking = false;

  function toggleMenu() {
    if (!navbar) return;
    navbar.classList.toggle('open');
    const expanded = navbar.classList.contains('open');
    navToggle.setAttribute('aria-expanded', expanded.toString());
  }

  if (navToggle) {
    navToggle.addEventListener('click', toggleMenu);
  }

  // Close menu when a link is clicked (mobile convenience)
  if (navLinksContainer) {
    navLinksContainer.addEventListener('click', function(e) {
      if (e.target.tagName === 'A' && navbar.classList.contains('open')) {
        navbar.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Allow ESC key to close mobile menu
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && navbar && navbar.classList.contains('open')) {
      navbar.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.focus();
    }
  });

  function onScroll() {
    const currentScroll = window.pageYOffset;

    // Header shadow / scrolled state
    if (currentScroll > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Hide header when scrolling down, show when scrolling up
    if (currentScroll > lastScroll && currentScroll > 120) {
      header.classList.add('header-hidden');
    } else {
      header.classList.remove('header-hidden');
    }

    // Back to top button visibility
    if (backToTop) {
      if (currentScroll > 400) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    }

    lastScroll = currentScroll;
    ticking = false;
  }

  window.addEventListener('scroll', function() {
    if (!ticking) {
      window.requestAnimationFrame(onScroll);
      ticking = true;
    }
  });

  // Back to top smooth scroll
  if (backToTop) {
    backToTop.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
})();
