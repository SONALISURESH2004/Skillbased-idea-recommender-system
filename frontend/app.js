import { DATA } from "./data.js";

// ---------------- LOGIN VALIDATION ----------------
const loginForm = document.getElementById("login-form");

if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    // Allow login for any non-empty username/password
    if (username && password) {
      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("username", username);

      // Go to category page
      document.getElementById("loginPage").classList.add("hidden");
      document.getElementById("categoryPage").classList.remove("hidden");
    } else {
      alert("⚠️ Please enter both username and password");
    }
  });
}

// ---------------- CATEGORY SELECTION ----------------
window.chooseCategory = function (category) {
  // Hide category page
  document.getElementById("categoryPage").classList.add("hidden");

  // Show streams page
  document.getElementById("streamsPage").classList.remove("hidden");

  // Populate streams dynamically
  const streamsContainer = document.getElementById("streams");
  streamsContainer.innerHTML = "";

  if (DATA[category]) {
    DATA[category].streams.forEach((stream) => {
      const btn = document.createElement("button");
      btn.textContent = stream;
      btn.className =
        "p-4 bg-indigo-500 text-white rounded-lg hover:bg-indigo-700";
      btn.onclick = () => loadProblems(category, stream);
      streamsContainer.appendChild(btn);
    });
  }
};

// ---------------- PROBLEMS LOADER ----------------
function loadProblems(category, stream) {
  // Hide streams page
  document.getElementById("streamsPage").classList.add("hidden");

  // Show problems page
  document.getElementById("problemsPage").classList.remove("hidden");

  const problemsContainer = document.getElementById("problems");
  problemsContainer.innerHTML = "";

  if (DATA[category].problems[stream]) {
    DATA[category].problems[stream].forEach((problem) => {
      const div = document.createElement("div");
      div.textContent = problem;
      div.className =
        "p-3 bg-gray-200 rounded-lg hover:bg-gray-300 cursor-pointer";
      problemsContainer.appendChild(div);
    });
  }
}

// ---------------- DROPDOWN LOGIC (OPTIONAL) ----------------
const domainSelect = document.getElementById("domain");
const streamSelect = document.getElementById("stream");
const problemSelect = document.getElementById("problem");

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
