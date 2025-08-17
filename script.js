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
