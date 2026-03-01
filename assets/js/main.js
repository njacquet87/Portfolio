// Gestion de l'accordéon
const accordionBtns = document.querySelectorAll('.accordion-btn');

accordionBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const isExpanded = btn.getAttribute('aria-expanded') === 'true';
    const panel = btn.nextElementSibling;
    
    // Fermer tous les autres accordéons
    accordionBtns.forEach(otherBtn => {
      if (otherBtn !== btn) {
        otherBtn.setAttribute('aria-expanded', 'false');
        otherBtn.nextElementSibling.style.display = 'none';
      }
    });
    
    // Ouvrir/Fermer le panel cliqué
    btn.setAttribute('aria-expanded', !isExpanded);
    if (!isExpanded) {
      panel.style.display = 'block';
    } else {
      panel.style.display = 'none';
    }
  });
});
