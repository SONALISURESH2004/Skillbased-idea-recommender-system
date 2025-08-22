// -------------------- References --------------------
const loginSection = document.getElementById("login");
const streamSection = document.getElementById("stream-section");
const domainSection = document.getElementById("domain-section");
const problemSection = document.getElementById("problem-section");
const result = document.getElementById("result");

// Inputs
const loginBtn = document.getElementById("loginBtn");
const streamSelect = document.getElementById("stream");
const domainSelect = document.getElementById("domain");
const problemSelect = document.getElementById("problem");
const submitBtn = document.getElementById("submit");

// Next buttons
const streamNextBtn = document.getElementById("streamNext");
const domainNextBtn = document.getElementById("domainNext");

// Back buttons
const backToLoginBtn = document.getElementById("backToLogin"); // optional
const backToStreamBtn = document.getElementById("backToStream");
const backToDomainBtn = document.getElementById("backToDomain");

// -------------------- Step 1: Login --------------------
loginBtn.addEventListener("click", () => {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username && password) {
    loginSection.style.display = "none";
    streamSection.style.display = "block";
  } else {
    alert("⚠️ Enter username and password to continue.");
  }
});

// -------------------- Step 2: Stream Next --------------------
streamNextBtn.addEventListener("click", () => {
  if (streamSelect.value) {
    streamSection.style.display = "none";
    domainSection.style.display = "block";
  } else {
    alert("⚠️ Please select a stream to continue.");
  }
});

// -------------------- Step 3: Domain Next --------------------
domainNextBtn.addEventListener("click", () => {
  if (domainSelect.value) {
    domainSection.style.display = "none";
    problemSection.style.display = "block";
  } else {
    alert("⚠️ Please select a domain to continue.");
  }
});

// -------------------- Step 4: Submit Problem --------------------
submitBtn.addEventListener("click", () => {
  const stream = streamSelect.value;
  const domain = domainSelect.value;
  const problem = problemSelect.value;

  if (!stream || !domain || !problem) {
    result.textContent = "⚠️ Please complete all steps before submitting.";
    result.style.color = "red";
  } else if (problem === "ai-helper") {
    result.textContent = "🤖 You chose AI Helper! Let AI assist you with ideas.";
    result.style.color = "blue";
  } else {
    result.textContent = `✅ You selected Stream: ${stream}, Domain: ${domain}, Problem: ${problem}`;
    result.style.color = "green";
  }
});

// -------------------- Back Navigation --------------------
backToStreamBtn.addEventListener("click", () => {
  domainSection.style.display = "none";
  streamSection.style.display = "block";
  domainSelect.value = ""; // Reset domain selection
});

backToDomainBtn.addEventListener("click", () => {
  problemSection.style.display = "none";
  domainSection.style.display = "block";
  problemSelect.value = ""; // Reset problem selection
});

// Optional back to login if needed
if (backToLoginBtn) {
  backToLoginBtn.addEventListener("click", () => {
    streamSection.style.display = "none";
    loginSection.style.display = "block";
    streamSelect.value = ""; // Reset stream selection
  });
}
