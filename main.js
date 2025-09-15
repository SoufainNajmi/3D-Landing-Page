 function toggleMenu() {
      const hamburger = document.querySelector('.hamburger');
      const mobileMenu = document.getElementById('mobileMenu');
      const overlay = document.getElementById('overlay');
      
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
      overlay.classList.toggle('active');
      
      // Toggle body overflow when menu is open
      if (mobileMenu.classList.contains('open')) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    }

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      const mobileMenu = document.getElementById('mobileMenu');
      const hamburger = document.querySelector('.hamburger');
      const overlay = document.getElementById('overlay');
      
      if (mobileMenu.classList.contains('open') && 
          !mobileMenu.contains(event.target) && 
          !hamburger.contains(event.target)) {
        toggleMenu();
      }
    });