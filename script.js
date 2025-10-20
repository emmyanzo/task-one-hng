function updateUTCTime() {
      const utcTimeElement = document.querySelector('[data-testid="currentTimeUTC"]');
      const now = new Date();
      const utcString = now.toUTCString();
      utcTimeElement.textContent = `Current Time (UTC): ${utcString}`;
  }

  updateUTCTime();
  setInterval(updateUTCTime, 1000); // Update time every second


  // Stage 0 — show current time
const timeElement = document.getElementById("user-time");
if (timeElement) {
  function updateTime() {
    timeElement.textContent = Date.now();
  }
  updateTime();
  setInterval(updateTime, 1000);
}

// Stage 1 — Contact form validation
const form = document.getElementById("contactForm");
if (form) {
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const subjectInput = document.getElementById("subject");
  const messageInput = document.getElementById("message");
  const successMsg = document.getElementById("success");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let valid = true;

    // helper
    const showError = (input, msg) => {
      const errorEl = document.getElementById(`error-${input.id}`);
      errorEl.textContent = msg;
      errorEl.style.color = "red";
      input.setAttribute("aria-describedby", errorEl.id);
    };
    const clearError = (input) => {
      const errorEl = document.getElementById(`error-${input.id}`);
      errorEl.textContent = "";
    };

    // Name
    if (nameInput.value.trim() === "") {
      showError(nameInput, "Full name is required.");
      valid = false;
    } else clearError(nameInput);

    // Email
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
      showError(emailInput, "Enter a valid email address.");
      valid = false;
    } else clearError(emailInput);

    // Subject
    if (subjectInput.value.trim() === "") {
      showError(subjectInput, "Subject is required.");
      valid = false;
    } else clearError(subjectInput);

    // Message
    if (messageInput.value.trim().length < 10) {
      showError(messageInput, "Message must be at least 10 characters.");
      valid = false;
    } else clearError(messageInput);

    // Success
    if (valid) {
      successMsg.hidden = false;
      form.reset();
    } else {
      successMsg.hidden = true;
    }
  });
}
