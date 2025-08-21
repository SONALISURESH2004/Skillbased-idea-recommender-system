function showPage(id) {
  ["loginPage", "categoryPage", "streamsPage", "problemsPage", "aiHelperPage"]
    .forEach(p => document.getElementById(p).classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}

function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  if (user && pass) {
    showPage("categoryPage");
  } else {
    alert("Enter username & password");
  }
}

let currentCategory = "";
let currentStream = "";

function chooseCategory(cat) {
  currentCategory = cat;
  const streamsDiv = document.getElementById("streams");
  streamsDiv.innerHTML = "";
  DATA[cat].streams.forEach(s => {
    const btn = document.createElement("button");
    btn.textContent = s;
    btn.className = "p-3 bg-gray-200 rounded hover:bg-gray-300";
    btn.onclick = () => chooseStream(s);
    streamsDiv.appendChild(btn);
  });
  showPage("streamsPage");
}

function chooseStream(stream) {
  currentStream = stream;
  const probsDiv = document.getElementById("problems");
  probsDiv.innerHTML = "";
  DATA[currentCategory].problems[stream].forEach(p => {
    const card = document.createElement("div");
    card.className = "bg-white shadow p-3 rounded";
    card.textContent = p;
    probsDiv.appendChild(card);
  });
  showPage("problemsPage");
}

function goToAIHelper() {
  showPage("aiHelperPage");
}


  function generateIdeas() {
  const skills = document.getElementById("skillsInput").value;

  fetch(`http://localhost:8080/api/ai/ideas?skills=${encodeURIComponent(skills)}`)
    .then(response => response.text())
    .then(data => {
      const resultsDiv = document.getElementById("aiResults");
      resultsDiv.innerHTML = ""; // clear old results

      // Show response
      const p = document.createElement("pre");
      p.textContent = data;
      resultsDiv.appendChild(p);
    })
    .catch(error => {
      console.error("Error fetching AI ideas:", error);
      alert("Something went wrong while generating ideas.");
    });
}
