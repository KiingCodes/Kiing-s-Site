// Update footer year
document.getElementById("year").textContent = new Date().getFullYear();

  const form = document.getElementById("contactForm");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: { 'Accept': 'application/json' }
    });
    if (response.ok) {
      alert("🎉 Thank you! Your message has been sent.");
      form.reset();
    } else {
      alert("❌ Oops! Something went wrong, please try again.");
    }
  });