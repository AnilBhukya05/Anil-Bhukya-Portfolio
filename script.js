document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form form");

  if (!form) return; // safety

  form.addEventListener("submit", async function (event) {
    event.preventDefault();
    const formData = new FormData(form);

    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      alert("✅ Your message has been sent!");
      form.reset();
    } else {
      alert("❌ Something went wrong. Please try again.");
    }
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navbar = document.getElementById("navbar");

  if (menuToggle && navbar) {
    menuToggle.addEventListener("click", () => {
      navbar.classList.toggle("active");
      menuToggle.classList.toggle("active");

      const icon = menuToggle.querySelector("i");
      icon.classList.toggle("bx-menu");
      icon.classList.toggle("bx-x");
    });

    // Close menu when any navbar link is clicked
    const navLinks = navbar.querySelectorAll("a");
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        if (navbar.classList.contains("active")) {
          navbar.classList.remove("active");
          menuToggle.classList.remove("active");

          const icon = menuToggle.querySelector("i");
          icon.classList.add("bx-menu");
          icon.classList.remove("bx-x");
        }
      });
    });
  }
});



document.querySelectorAll('a.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 100, 
        behavior: 'smooth'
      });
    }
  });
});
