const navToggle = document.querySelector('.nav-toggle');
const primaryNav = document.querySelector('.primary-nav');
if (navToggle && primaryNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = primaryNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  primaryNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      primaryNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const productData = {
  brown: {
    title: 'Café Gusto Brown',
    description: 'A balanced, everyday coffee mix with a warm, approachable profile. Brown is ideal for customers who enjoy a smooth and familiar cup that fits easily into daily routines.',
    image: 'assets/img/brown.jpg',
    alt: 'Café Gusto Brown product packaging',
    points: [
      'Retail-ready 10-sachet pack',
      '10x27g format shown on product materials',
      'Strong candidate for homes, small stores, and office pantry shelves'
    ]
  },
  clasico: {
    title: 'Café Gusto Clasico',
    description: 'Clasico carries a more classic coffee character and gives the lineup a stronger traditional coffee identity. It works well as the go-to choice for customers who prefer a bolder presentation.',
    image: 'assets/img/clasico.jpg',
    alt: 'Café Gusto Clasico product packaging',
    points: [
      'Real packaging visual from the product lineup',
      'Classic-looking signature within the Café Gusto range',
      'Useful as a hero product for premium product presentation'
    ]
  },
  white: {
    title: 'Café Gusto White',
    description: 'White softens the range with a lighter, creamier personality. It broadens the overall appeal of Café Gusto and shows that the brand can serve different taste preferences in one clear lineup.',
    image: 'assets/img/white.jpg',
    alt: 'Café Gusto White product packaging',
    points: [
      'Creamier-looking variant within the brand family',
      'Maintains the same easy-to-understand 10-sachet presentation',
      'Adds variety and wider shelf appeal to the product range'
    ]
  }
};

const tabs = document.querySelectorAll('.product-tab');
const spotlight = document.querySelector('.spotlight');
const spotlightImage = document.getElementById('spotlight-image');
const spotlightTitle = document.getElementById('spotlight-title');
const spotlightDescription = document.getElementById('spotlight-description');
const spotlightList = document.getElementById('spotlight-list');

function setVariant(key) {
  const item = productData[key];
  if (!item) return;

  tabs.forEach(tab => {
    const active = tab.dataset.variant === key;
    tab.classList.toggle('active', active);
    tab.setAttribute('aria-selected', active ? 'true' : 'false');
  });

  spotlight.dataset.spotlight = key;
  spotlightImage.src = item.image;
  spotlightImage.alt = item.alt;
  spotlightTitle.textContent = item.title;
  spotlightDescription.textContent = item.description;
  spotlightList.innerHTML = item.points.map(point => `<li>${point}</li>`).join('');
}

tabs.forEach(tab => {
  tab.addEventListener('click', () => setVariant(tab.dataset.variant));
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.getElementById('year').textContent = new Date().getFullYear();
