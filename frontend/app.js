// Import DATA (from data.js)
import { DATA } from "./data.js";

// References
const domainSelect = document.getElementById("domain");
const streamSelect = document.getElementById("stream");
const problemSelect = document.getElementById("problem");

// Populate Streams when Domain changes
domainSelect.addEventListener("change", () => {
  const domain = domainSelect.value;
  streamSelect.innerHTML = '<option value="">-- Select Stream --</option>';
  problemSelect.innerHTML = '<option value="">-- Select Problem --</option>';

  if (domain && DATA[domain]) {
    DATA[domain].streams.forEach(stream => {
      const option = document.createElement("option");
      option.value = stream;
      option.textContent = stream;
      streamSelect.appendChild(option);
    });
  }
});

// Populate Problems when Stream changes
streamSelect.addEventListener("change", () => {
  const domain = domainSelect.value;
  const stream = streamSelect.value;
  problemSelect.innerHTML = '<option value="">-- Select Problem --</option>';

  if (domain && stream && DATA[domain].problems[stream]) {
    DATA[domain].problems[stream].forEach(problem => {
      const option = document.createElement("option");
      option.value = problem;
      option.textContent = problem;
      problemSelect.appendChild(option);
    });
  }
});
