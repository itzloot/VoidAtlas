const facts = [
  "Sun 99.86% solar mass",
  "Venus day > year",
  "More trees than stars",
  "Neutron teaspoon heavy",
  "Expansion accelerating",
  "Armstrong first step",
  "Chandrayaan-3 south pole"
];

let i = 0;
const d = document.getElementById('dyk-text');
d.textContent = facts[0];

setInterval(() => {
  d.style.opacity = '0';
  setTimeout(() => {
    i = (i + 1) % facts.length;
    d.textContent = facts[i];
    d.style.opacity = '1';
  }, 800);
}, 8000);

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.15 });

document.querySelectorAll('section').forEach(sec => observer.observe(sec));

document.querySelector('.hamburger').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('active');
});