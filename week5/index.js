// Create needed constants
const rememberDiv = document.querySelector('.remember');
const forgetDiv = document.querySelector('.forget');
const form = document.querySelector('form');
const nameInput = document.querySelector('#entername');
const submitBtn = document.querySelector('#submitname');
const forgetBtn = document.querySelector('#forgetname');

const h1 = document.querySelector('h1');
const personalGreeting = document.querySelector('.personal-greeting');

// When press the submit button, prevent the submission of the form
form.addEventListener("submit", (e) => e.preventDefault());

// When click "say hello", run the function
submitBtn.addEventListener("click", () => {
  // Store the name in the web browser
  localStorage.setItem("name", nameInput.value);
  // Run nameDisplayCheck() to display the greetings and update the form
  nameDisplayCheck();
})

// When click Forget, run the function
forgetBtn.addEventListener("click", () => {
  // Remove the name from the web browser
  localStorage.removeItem("name");
  // Run nameDisplayCheck() to display the greetings and update the form
  nameDisplayCheck();
});

// Define the nameDisplayCheck() function
function nameDisplayCheck() {
  // Check if the 'name' exists in the web browser
  if (localStorage.getItem("name")) {
    // If exists, display the greetings
    const name = localStorage.getItem("name");
    h1.textContent = `Welcome, ${name}`;
    personalGreeting.textContent = `Welcome to our website, ${name}! We hope you have fun while you are here.`;
    // Hide the 'remember' part and display the 'forget' part
    forgetDiv.style.display = "block";
    rememberDiv.style.display = "none";
  } else {
    // If not exists, display the generic greetings
    h1.textContent = `Welcome to our website`;
    personalGreeting.textContent = `Welcome to our website. We hope you have fun while you are here.`;
    // Hid the 'forget' part and display the 'remember' part
    forgetDiv.style.display = "none";
    rememberDiv.style.display = "block";
  }
}

nameDisplayCheck();