import { DATA } from "./data.js";

// ---------------- Login Validation ----------------
const loginForm = document.getElementById("login-form");

if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    // Simple login check (you can replace with DB or Firebase later)
    if (username === "admin" && password === "1234") {
      // Save login status in localStorage
      localStorage.setItem("loggedIn", "true");
      alert("Login successful!");

      // Redirect to main page
      window.location.href = "main.html";
    } else {
      alert("Invalid username or password");
    }
  });
}

// ---------------- Dropdown Logic ----------------
const domainSelect = document.getElementById("domain");
const streamSelect = document.getElementById("stream");
const problemSelect = document.getElementById("problem");

// Populate Streams when Domain changes
if (domainSelect) {
  domainSelect.addEventListener("change", () => {
    const domain = domainSelect.value;
    streamSelect.innerHTML = '<option value="">-- Select Stream --</option>';
    problemSelect.innerHTML = '<option value="">-- Select Problem --</option>';

    if (domain && DATA[domain]) {
      DATA[domain].streams.forEach((stream) => {
        const option = document.createElement("option");
        option.value = stream;
        option.textContent = stream;
        streamSelect.appendChild(option);
      });
    }
  });
}

// Populate Problems when Stream changes
if (streamSelect) {
  streamSelect.addEventListener("change", () => {
    const domain = domainSelect.value;
    const stream = streamSelect.value;
    problemSelect.innerHTML = '<option value="">-- Select Problem --</option>';

    if (domain && stream && DATA[domain].problems[stream]) {
      DATA[domain].problems[stream].forEach((problem) => {
        const option = document.createElement("option");
        option.value = problem;
        option.textContent = problem;
        problemSelect.appendChild(option);
      });
    }
  });
}
