// 1. Testimonials slider: (1) (2) (3) counters and the < > arrows
const reviews = document.querySelectorAll('.review');
const dots = document.querySelectorAll('.dot');
let current = 0;

function show(i) {
  current = (i + reviews.length) % reviews.length;
  reviews.forEach((r, n) => r.classList.toggle('active', n === current));
  dots.forEach((d, n) => d.classList.toggle('active', n === current));
}

dots.forEach(d => d.addEventListener('click', () => show(Number(d.dataset.i))));
document.querySelector('.arrow.prev').addEventListener('click', () => show(current - 1));
document.querySelector('.arrow.next').addEventListener('click', () => show(current + 1));

// 2. Contact form in the Location section (demo only: no real email is sent)
const form = document.getElementById('contact-form');
const note = document.getElementById('form-note');

if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    note.textContent = 'Thanks! We got your message.';
    form.reset();
  });
}
