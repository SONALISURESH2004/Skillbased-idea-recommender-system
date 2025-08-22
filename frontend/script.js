// DOM references
const domainSelect = document.getElementById("domain");
const streamSelect = document.getElementById("stream");
const problemSelect = document.getElementById("problem");
const submitBtn = document.getElementById("submit");
const result = document.getElementById("result");

// Handle Submit
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
