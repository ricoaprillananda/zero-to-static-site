document.addEventListener("DOMContentLoaded", () => {
  const helloBtn = document.getElementById("helloBtn");
  const greetBtn = document.getElementById("greetBtn");
  const nameInput = document.getElementById("nameInput");

  // Simple Hello Alert
  helloBtn?.addEventListener("click", () => {
    alert("Hello from me! 🍃");
  });

  // Greet the user with input
  greetBtn?.addEventListener("click", () => {
    const name = nameInput?.value.trim();

    if (!name) {
      alert("Please enter your name first ✍️");
      nameInput?.focus();
      return;
    }

    alert(`Hi there, ${name}! Welcome to the site 🖤`);
  });

  // Optional: Allow pressing Enter to trigger greet
  nameInput?.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      greetBtn?.click();
    }
  });
});
