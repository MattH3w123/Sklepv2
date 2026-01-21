const input = document.querySelector('#srcha');
const texts = [
  "sporty",
  "Akcesoria",
  "outdoor"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

const speed = {
  type: 100,
  delete: 30,
  pause: 2000
};

function typeLoop() {
  const current = texts[textIndex];

  if (!isDeleting) {
    input.placeholder = current.slice(0, charIndex++);
    
    if (charIndex > current.length) {
      setTimeout(() => isDeleting = true, speed.pause);
    }
  } else {
    input.placeholder = current.slice(0, charIndex--);
    
    if (charIndex < 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
    }
  }
}

const timer = setInterval(typeLoop, speed.type);

const imgShop = document.querySelector('.img-shop');
const img = imgShop.querySelector('img');

window.addEventListener('scroll', () => {
  const rect = imgShop.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (rect.top < windowHeight && rect.bottom > 0) {
    const progress = 1 - rect.top / windowHeight;

    // zakres skali (1 → 1.15)
    const scale = 1 + Math.min(Math.max(progress * 0.26, 0), 0.26);

    img.style.transform = `scale(${scale})`;
  }
});

const openButton = document.getElementById('open-sidebar')
const navbar = document.getElementById('NavBar')

const media = window.matchMedia("(width < 700px)")

media.addEventListener('change', (e) => updateNavbar(e))

function updateNavbar(e) {
  const isMobile = e.matches
  console.log(isMobile)
  if(isMobile){
    navbar.setAttribute('inert', '')
  }
  else {
    navbar.removeAttribute('inert')
  }
}

function openSideBar() {
  navbar.classList.add('show')
  openButton.setAttribute('aria-expanded', 'true')
  navbar.removeAttribute('inert')
}

function closeSideBar() {
  navbar.classList.remove('show')
  openButton.setAttribute('aria-expanded', 'false')
  navbar.setAttribute('inert', '')
}

updateNavbar(media)