/**
 * Week 6 Assignment — Interactive Web Page
 *
 * Deliverables:
 * - index.html with form and interactive sections
 * - script.js with event handling, at least 2 interactive features, and custom form validation
 * - style.css (optional styling)
 *
 * Sections:
 * PART 1: Event handling setup
 * PART 2: Interactive features
 * PART 3: Custom form validation
 */

/* =========================
   PART 1 — Event handling
   ========================= */
document.addEventListener("DOMContentLoaded", () => {
  console.log("Week 6 Assignment script loaded.");

  /* =========================
     PART 2 — Interactive features
     ========================= */

  // Interactive Counter
  let count = 0;
  const countEl = document.getElementById("count");
  document.getElementById("increment").addEventListener("click", () => {
    count++;
    countEl.textContent = count;
  });
  document.getElementById("decrement").addEventListener("click", () => {
    count--;
    countEl.textContent = count;
  });

  // Theme toggler
  const toggleBtn = document.getElementById("toggle-theme");
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });

  /* =========================
     PART 3 — Custom form validation
     ========================= */
  const form = document.getElementById("signup-form");
  const msg = document.getElementById("form-message");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // prevent default submission

    // Collect values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Custom validation logic
    if (name.length < 2) {
      msg.textContent = "Name must be at least 2 characters.";
      msg.style.color = "red";
      return;
    }
    if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)) {
      msg.textContent = "Enter a valid email address.";
      msg.style.color = "red";
      return;
    }
    if (password.length < 6) {
      msg.textContent = "Password must be at least 6 characters.";
      msg.style.color = "red";
      return;
    }

    // Success
    msg.textContent = `Welcome, ${name}! Your form was submitted successfully.`;
    msg.style.color = "green";

    // Optionally clear the form
    form.reset();
  });
});
