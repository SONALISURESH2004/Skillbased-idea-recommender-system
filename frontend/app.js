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
      showPage("categoryPage");
    } else {
      alert("⚠️ Please enter both username and password");
    }
  });
}

// ---------------- NAVIGATION HELPER ----------------
function showPage(pageId) {
  document.querySelectorAll("body > div").forEach(div => div.classList.add("hidden"));
  document.getElementById(pageId).classList.remove("hidden");
}

window.goBack = function (pageId) {
  showPage(pageId);
};

// ---------------- CATEGORY SELECTION ----------------
window.chooseCategory = function (category) {
  // Show streams page
  showPage("streamsPage");

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
  // Show problems page
  showPage("problemsPage");

  const problemsContainer = document.getElementById("problems");
  problemsContainer.innerHTML = "";

  if (DATA[category].problems[stream]) {
    DATA[category].problems[stream].forEach((problem) => {
      const div = document.createElement("div");
      div.textContent = problem;
      div.className =
        "p-3 bg-gray-200 rounded-lg hover:bg-gray-300 cursor-pointer";
      div.onclick = () => {
        alert(`✅ You selected: ${problem}`);
      };
      problemsContainer.appendChild(div);
    });
  }
}

// ---------------- AI HELPER NAVIGATION ----------------
window.goToAIHelper = function () {
  showPage("aiHelperPage");
};

// ---------------- AI HELPER IDEA GENERATOR ----------------
window.generateIdeas = function () {
  const skillsInput = document.getElementById("skillsInput").value.trim();
  const aiResults = document.getElementById("aiResults");

  aiResults.innerHTML = "";

  if (!skillsInput) {
    aiResults.innerHTML = `<p class="text-red-500">⚠️ Please enter your skills first.</p>`;
    return;
  }

  const skills = skillsInput.split(",").map(s => s.trim()).filter(Boolean);

  // Dummy idea generation based on skills
  skills.forEach((skill, i) => {
    const idea = document.createElement("p");
    idea.textContent = `💡 Idea ${i + 1}: Use ${skill} to build a unique project.`;
    aiResults.appendChild(idea);
  });
};
