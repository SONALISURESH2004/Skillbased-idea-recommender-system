document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const logoutBtn = document.getElementById("logoutBtn");
  const backBtn = document.getElementById("backBtn");
  const showResultBtn = document.getElementById("showResultBtn");
  const resultDiv = document.getElementById("result");

  // --- LOGIN ---
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();

      if (username && password) {
        localStorage.setItem("loggedInUser", username);
        window.location.href = "app.html"; // redirect to app page
      } else {
        alert("Please enter both username and password!");
      }
    });
  }

  // --- LOGOUT ---
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("loggedInUser");
      window.location.href = "index.html"; // back to login
    });
  }

  // --- PROTECT PAGES ---
  if (window.location.pathname.includes("app.html")) {
    const user = localStorage.getItem("loggedInUser");
    if (!user) {
      window.location.href = "index.html"; // redirect if not logged in
    }
  }

  // --- BACK BUTTON (always to login) ---
  if (backBtn) {
    backBtn.addEventListener("click", () => {
      window.location.href = "index.html";
    });
  }

  // --- DROPDOWN VALIDATION ---
  if (showResultBtn) {
    showResultBtn.addEventListener("click", () => {
      const category = document.getElementById("category")?.value;
      const subcategory = document.getElementById("subcategory")?.value;
      const topic = document.getElementById("topic")?.value;

      if (category && subcategory && topic) {
        resultDiv.innerText = `You selected: ${category} → ${subcategory} → ${topic}`;
      } else {
        alert("Please select all dropdowns!");
      }
    });
  }
});
