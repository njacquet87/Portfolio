// Gestion de l'accordéon
const accordionBtns = document.querySelectorAll('.accordion-btn');

accordionBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const panel = btn.nextElementSibling;
    const isExpanded = btn.getAttribute('aria-expanded') === 'true';

    accordionBtns.forEach(otherBtn => {
      if (otherBtn !== btn) {
        otherBtn.setAttribute('aria-expanded', 'false');
        otherBtn.nextElementSibling.style.maxHeight = null;
      }
    });

    if (isExpanded) {
      btn.setAttribute('aria-expanded', 'false');
      panel.style.maxHeight = null;
    } else {
      btn.setAttribute('aria-expanded', 'true');
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
});


const reveals = document.querySelectorAll(".reveal");

function revealSections() {
  reveals.forEach(section => {
    const top = section.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {
      section.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealSections);
revealSections();
