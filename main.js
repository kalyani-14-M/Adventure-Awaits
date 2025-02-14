const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');

if (menuBtn && navLinks) {
  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}
document.querySelectorAll('#nav-links li a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
})
if (typeof ScrollReveal !== 'undefined') {
  const sr = ScrollReveal({
    distance: '50px',
    duration: 800,
    easing: 'ease-out',
    reset: false,
  });
  sr.reveal('.home-container', { delay: 200, origin: 'bottom' });
  sr.reveal('.showcase__content', { delay: 300, origin: 'left' });
  sr.reveal('.destination__card', { delay: 400, origin: 'right', interval: 200 });
  sr.reveal('.services', { delay: 200, origin: 'bottom' });
  sr.reveal('.auth-container', { delay: 200, origin: 'right' });
}
if (typeof Swiper !== 'undefined') {
  const swiperContainer = document.querySelector('.swiper-container');
  if (swiperContainer) {
    const swiper = new Swiper(swiperContainer, {
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
}
const authForm = document.getElementById('authForm');
const toggleLink = document.getElementById('toggleLink');
const nameField = document.getElementById('nameField');
const formTitle = document.getElementById('formTitle');
let isSignUp = false;
if (authForm && toggleLink && nameField && formTitle) {
  toggleLink.textContent = 'Sign Up';
  nameField.classList.add('hidden');
  toggleLink.addEventListener('click', (e) => {
    e.preventDefault();
    isSignUp = !isSignUp;
    if (isSignUp) {
      formTitle.textContent = 'Sign Up';
      nameField.classList.remove('hidden');
      toggleLink.textContent = 'Sign In';
    } else {
      formTitle.textContent = 'Sign In';
      nameField.classList.add('hidden');
      toggleLink.textContent = 'Sign Up';
    }
  });

  // Handle form submission and show success message
  authForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Display appropriate success message
    if (isSignUp) {
      showMessage('Sign up successfully!');
    } else {
      showMessage('Sign in successfully!');
    }
    authForm.reset();
    if (isSignUp) {
      isSignUp = false;
      formTitle.textContent = 'Sign In';
      nameField.classList.add('hidden');
      toggleLink.textContent = 'Sign Up';
    }
  });
}

/**

 * @param {string} message
 */
function showMessage(message) {
  const messageDiv = document.createElement('div');
  messageDiv.className = 'auth-success-message';
  messageDiv.textContent = message;
  authForm.insertBefore(messageDiv, authForm.firstChild);
  setTimeout(() => {
    messageDiv.remove();
  }, 3000);
}
