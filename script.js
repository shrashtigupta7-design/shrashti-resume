// Scroll-reveal for sections
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window){
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting){
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('is-visible'));
  }

  // Auto-close mobile menu after a link is tapped
  const navToggle = document.getElementById('nav-toggle');
  document.querySelectorAll('.index-list a').forEach(link => {
    link.addEventListener('click', () => {
      if (navToggle) navToggle.checked = false;
    });
  });
