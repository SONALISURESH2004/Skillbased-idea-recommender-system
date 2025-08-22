// DOM references
// ---------------- LOGIN FUNCTIONALITY ----------------
const loginBtn = document.getElementById("loginBtn");
if (loginBtn) {
  loginBtn.addEventListener("click", () => {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const loginMsg = document.getElementById("loginMsg");

    if (!username || !password) {
      loginMsg.textContent = "⚠️ Please enter username and password.";
      loginMsg.style.color = "red";
      return;
    }

    // ✅ Any username/password is accepted
    localStorage.setItem("loggedInUser", username);
    window.location.href = "app.html"; // redirect to main app
  });
}

// ---------------- LOGOUT FUNCTIONALITY ----------------
const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("loggedInUser");
    window.location.href = "index.html";
  });
}

// ---------------- PROTECTED PAGE CHECK ----------------
if (window.location.pathname.includes("app.html")) {
  const user = localStorage.getItem("loggedInUser");
  if (!user) {
    window.location.href = "index.html"; // redirect back if not logged in
  }
}

// ---------------- SELECTION FUNCTIONALITY ----------------
const domainSelect = document.getElementById("domain");
const streamSelect = document.getElementById("stream");
const problemSelect = document.getElementById("problem");
const submitBtn = document.getElementById("submit");
const result = document.getElementById("result");

if (submitBtn) {
  submitBtn.addEventListener("click", () => {
    const domain = domainSelect.value;
    const stream = streamSelect.value;
    const problem = problemSelect.value;

    if (!domain || !stream || !problem) {
      result.textContent = "⚠️ Please select all fields before submitting.";
      result.style.color = "red";
    } else {
      result.textContent = `✅ You selected Domain: ${domain}, Stream: ${stream}, Problem: ${problem}`;
      result.style.color = "green";
    }
  });
}
