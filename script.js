// Función para aplicar la animación de entrada suave             TODO ESTO ES DEL BURGER
const fadeInElements = document.querySelectorAll('.fade-in');

const observerOptions = {
  root: null, // El root es el viewport
  rootMargin: '0px', // No margen adicional
  threshold: 0.2 // Un 20% del elemento debe estar visible
};

// Función del Observer
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in-visible'); // Agregar clase para la animación
      observer.unobserve(entry.target); // Deja de observar el elemento después de que sea visible
    }
  });
}, observerOptions);

// Aplica el observer a los elementos de fade-in
fadeInElements.forEach(element => {
  observer.observe(element);
});




// Para las tarjetas de "services" y "testimonials", les agregamos la clase .fade-in a los elementos
document.querySelectorAll('.service-card').forEach(card => {
  card.classList.add('fade-in');
});

document.querySelectorAll('.testimonial-card').forEach(card => {
  card.classList.add('fade-in');
});

// Animación suave para las testimonial-cards al hacer scroll
window.addEventListener('scroll', function() {
  const testimonialCards = document.querySelectorAll('.testimonial-card');
  
  testimonialCards.forEach(function(card) {
    const cardPosition = card.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    // Verificamos si la tarjeta está dentro del área visible del navegador
    if (cardPosition.top >= 0 && cardPosition.bottom <= windowHeight) {
      card.classList.add('show');
    }
  });
});

// El observer de las tarjetas también
const serviceCards = document.querySelectorAll('.service-card');
const testimonialCards = document.querySelectorAll('.testimonial-card');

serviceCards.forEach(card => {
  observer.observe(card);
});

testimonialCards.forEach(card => {
  observer.observe(card);
});




// Script para mostrar y ocultar el menú en dispositivos móviles
document.getElementById("menu-toggle").addEventListener("click", function() {
  const navLinks = document.querySelector("#nav-links");
  navLinks.classList.toggle("nav-active");
});

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  menuToggle.addEventListener("click", function () {
      navLinks.classList.toggle("active");
  });
});




// Función para activar la animación cuando el elemento está en pantalla
function handleScroll() {
  const heroSection = document.getElementById('hero');
  const heroPosition = heroSection.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  // Activar la animación cuando la sección #hero entre en la vista
  if (heroPosition <= windowHeight * 0.9) {
    heroSection.classList.add('fade-in-visible');
  }
}

// Escuchar el evento de scroll
window.addEventListener('scroll', handleScroll);

// Llamar la función de inmediato para verificar si ya está visible al cargar la página
handleScroll();

// about animacion

function openCompanyTab(evt, companyId) {
  // Ocultar todos los contenidos de Company Tabs
  const companyContents = document.querySelectorAll('.tab-content.company');
  companyContents.forEach(content => content.classList.remove('active'));

  // Desactivar todas las pestañas de Company Tabs
  const companyTabs = document.querySelectorAll('.company-tabs .tab-button');
  companyTabs.forEach(tab => tab.classList.remove('active'));

  // Activar la pestaña seleccionada
  document.getElementById(companyId).classList.add('active');
  evt.currentTarget.classList.add('active');
}

function openTab(evt, tabId) {
  // Ocultar todos los contenidos de Tabs
  const tabContents = document.querySelectorAll('.tab-content.tabs');
  tabContents.forEach(content => content.classList.remove('active'));

  // Desactivar todas las pestañas de Tabs
  const tabs = document.querySelectorAll('.tabs .tab-button');
  tabs.forEach(tab => tab.classList.remove('active'));

  // Activar la pestaña seleccionada
  document.getElementById(tabId).classList.add('active');
  evt.currentTarget.classList.add('active');
}




// animacion de la carta
// Listener para los botones de flip
const flipButtons = document.querySelectorAll('.btn-flip');

flipButtons.forEach(btn => {
  btn.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevenir que el clic se propague a otros elementos
    const card = btn.closest('.card'); // Encuentra la tarjeta contenedora más cercana
    card.classList.toggle('is-flipped'); // Alterna la clase de giro
  });
});




// contacto

document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // Validar que el nombre solo contenga letras y espacios
  const namePattern = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
  if (!namePattern.test(name)) {
    alert('Please enter a valid name (letters and spaces only).');
    return;
  }

  // Validar el formato del correo
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  // Validar que el mensaje no esté vacío
  if (message.length < 10) {
    alert('Please enter a message with at least 10 characters.');
    return;
  }

  alert('Form submitted successfully!');
  // Aquí podrías enviar el formulario a un servidor o procesarlo como desees
});



//tren ejecutivo

// Auto transición: si el usuario no interactúa, se cambia al segundo slide después de 5 segundos.
let autoSlideTimer = setTimeout(() => {
  document.getElementById('two').checked = true;
}, 5000);

// Si hay interacción con los radio buttons se cancela el auto slide.
const radios = document.querySelectorAll('input[name="dot"]');
radios.forEach(radio => {
  radio.addEventListener('click', () => {
    clearTimeout(autoSlideTimer);
  });
});

// Manejo de las flechas de navegación.
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

leftArrow.addEventListener("click", function() {
  clearTimeout(autoSlideTimer);
  const radioOne = document.getElementById('one');
  const radioTwo = document.getElementById('two');
  // Si se está mostrando el primer slide, pasa al segundo; de lo contrario, vuelve al primero.
  if (radioOne.checked) {
    radioTwo.checked = true;
  } else {
    radioOne.checked = true;
  }
});

rightArrow.addEventListener("click", function() {
  clearTimeout(autoSlideTimer);
  const radioOne = document.getElementById('one');
  const radioTwo = document.getElementById('two');
  if (radioOne.checked) {
    radioTwo.checked = true;
  } else {
    radioOne.checked = true;
  }
});



// footer
document.querySelector('.map-link').addEventListener('click', function () {
  // URL de Google Maps
  const googleMapsUrl = 'https://www.google.com/maps?q=C.C.+Viña+Plaza,+piso+6,+Oficina+19,+Valencia,+Estado+Carabobo';
  window.open(googleMapsUrl, '_blank'); // Abre el enlace en una nueva pestaña
});

