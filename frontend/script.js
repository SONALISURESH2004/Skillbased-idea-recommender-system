// Fetch all ideas and display them
async function fetchIdeas() {
  try {
    const res = await fetch("http://localhost:8080/api/ideas");
    const data = await res.json();
    displayIdeas(data);
  } catch (err) {
    console.error("Backend not running yet:", err);
  }
}

// Search ideas by skill
async function searchIdeas(skill) {
  try {
    const res = await fetch(`http://localhost:8080/api/ideas/search?skill=${skill}`);
    const data = await res.json();
    displayIdeas(data);
  } catch (err) {
    console.error("Backend not running yet:", err);
  }
}

// Render ideas on screen
function displayIdeas(ideas) {
  const container = document.getElementById("ideas-container");
  container.innerHTML = "";
  ideas.forEach(idea => {
    const card = `
      <div class="p-4 bg-white shadow-md rounded-lg mb-4">
        <h2 class="text-xl font-bold text-blue-700">${idea.title}</h2>
        <p class="text-gray-700">${idea.description}</p>
        <span class="text-sm text-gray-500">Domain: ${idea.domain}</span>
      </div>
    `;
    container.innerHTML += card;
  });
}

// Load all ideas automatically when page loads
window.onload = fetchIdeas;
