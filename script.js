// Activar el fondo y ocultar el header al hacer scroll
let lastScrollTop = 0; // Para almacenar la última posición del scroll

window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  const nav = document.querySelector('nav'); // Referencia al navbar
  
  // Si el scroll ha bajado más de 50px
  if (window.scrollY > 50) {
    header.classList.add('scrolled');  // Oculta el header (o aplica efecto si es necesario)
    nav.classList.add('navbar-scrolled'); // Agrega fondo oscuro al navbar
  } else {
    header.classList.remove('scrolled');  // El header vuelve a aparecer
    nav.classList.remove('navbar-scrolled'); // El navbar vuelve a su color original
  }

  // También aplicar el efecto cuando el usuario haga scroll hacia abajo
  let scrollTop = window.scrollY;
  if (scrollTop > lastScrollTop) {
    // Scroll hacia abajo
    nav.classList.add('navbar-scrolled');
  } else {
    // Scroll hacia arriba
    nav.classList.remove('navbar-scrolled');
  }
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Para evitar valores negativos
});

// Función para aplicar la animación de entrada suave
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
