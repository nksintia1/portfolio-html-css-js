window.addEventListener('DOMContentLoaded', () => {
  const skills = document.querySelectorAll('.skill');

  skills.forEach(skill => {
    const skillBar = skill.querySelector('.skill-level');
    const percentText = skill.querySelector('.percent');
    const targetWidth = parseInt(skillBar.getAttribute('data-width'));

    let width = 0;
    const interval = setInterval(() => {
      if(width >= targetWidth){
        clearInterval(interval);
      } else {
        width++;
        skillBar.style.width = width + '%';
        percentText.textContent = width + '%';
      }
    }, 15); 
  });
});

function scrollAnimations() {
  const fadeUpElements = document.querySelectorAll('.fade-up');
  const fadeInElements = document.querySelectorAll('.fade-in');

  const triggerBottom = window.innerHeight * 0.85;

  fadeUpElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if(top < triggerBottom){
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }
  });

  fadeInElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if(top < triggerBottom){
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }
  });
}

window.addEventListener('scroll', scrollAnimations);
scrollAnimations(); 


function scrollProjects() {
  const projectCards = document.querySelectorAll('.card');
  const triggerBottom = window.innerHeight * 0.85;

  projectCards.forEach(card => {
    const top = card.getBoundingClientRect().top;
    if(top < triggerBottom){
      card.classList.add('show');
    }
  });
}

window.addEventListener('scroll', scrollProjects);
scrollProjects(); 
