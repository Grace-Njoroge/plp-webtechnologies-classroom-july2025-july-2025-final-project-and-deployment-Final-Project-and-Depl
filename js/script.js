document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const status = document.getElementById('form-status');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      status.textContent = "⚠️ Please fill in all fields.";
      status.style.color = 'red';
    } else {
      status.textContent = "✅ Message sent successfully!";
      status.style.color = 'green';
      form.reset();
    }
  });
});
