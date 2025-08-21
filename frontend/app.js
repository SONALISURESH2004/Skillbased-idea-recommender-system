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
  const skills = document.getElementById("skillsInput").value.split(",");
  const resultsDiv = document.getElementById("aiResults");
  resultsDiv.innerHTML = "";
  // Mock AI logic: just match keywords
  const ideas = [];
  skills.forEach(skill => {
  const ideas = [];
skills.forEach(skill => {
  skill = skill.trim().toLowerCase();

  if (skill.includes("java")) ideas.push("Library Management System using Java & Spring Boot");
  if (skill.includes("sql")) ideas.push("Student Database Management System with SQL Queries");
  if (skill.includes("ml")) ideas.push("AI Model Trainer for Image Recognition");
  if (skill.includes("react")) ideas.push("React Dashboard with REST API Integration");
  if (skill.includes("angular")) ideas.push("Angular E-Commerce Platform");
  if (skill.includes("node.js")) ideas.push("Real-Time Chat App with Node.js & Socket.io");
  if (skill.includes("vue.js")) ideas.push("Vue.js Task Manager with Firebase Backend");
  if (skill.includes("mongodb")) ideas.push("Movie Recommendation System using MongoDB");
  if (skill.includes("firebase")) ideas.push("Authentication & Realtime Chat with Firebase");
  if (skill.includes("kafka")) ideas.push("Event Streaming Pipeline using Apache Kafka");
  if (skill.includes("python")) ideas.push("Sentiment Analysis API using Python & Flask");
  if (skill.includes("docker")) ideas.push("Microservices Deployment with Docker & Kubernetes");
  if (skill.includes("aws")) ideas.push("Serverless Application using AWS Lambda");
  if (skill.includes("git")) ideas.push("Version Control Dashboard using GitHub API");
});

  });
  if (ideas.length === 0) ideas.push("No exact matches, try adding more skills!");
  ideas.forEach(i => {
    const div = document.createElement("div");
    div.className = "p-2 bg-gray-100 rounded";
    div.textContent = i;
    resultsDiv.appendChild(div);
  });
}
