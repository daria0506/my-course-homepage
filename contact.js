document.getElementById("contactForm").addEventListener("submit", function (e) {
  const fullName = document.getElementById("full-name").value.trim();
  const namePattern = /^[A-Za-z\s]+$/;

  if (fullName.length < 5) {
    alert("Full name must contain at least 5 characters.");
    e.preventDefault();
    return;
  }

  if (!namePattern.test(fullName)) {
    alert("Full name must contain only letters and spaces.");
    e.preventDefault();
    return;
  }

  const email = document.getElementById("email").value.trim();
  const emailPattern = /^[a-zA-Z0-9._%+-]+@e-uvt\.ro$/;

  if (!emailPattern.test(email)) {
    alert("Email must be valid and end with @e-uvt.ro.");
    e.preventDefault();
    return;
  }

  const subject = document.getElementById("subject").value.trim();

  if (subject === "") {
    alert("Subject is mandatory.");
    e.preventDefault();
    return;
  }

  const message = document.getElementById("message").value.trim();

  if (message === "") {
    alert("Message cannot be empty.");
    e.preventDefault();
    return;
  }

  const hearOptions = document.getElementsByName("hear");
  let selectedHear = false;

  for (let i = 0; i < hearOptions.length; i++) {
    if (hearOptions[i].checked) {
      selectedHear = true;
    }
  }

  if (!selectedHear) {
    alert("Please select how you heard about this course.");
    e.preventDefault();
    return;
  }

  const dob = document.getElementById("dob").value;

  if (dob === "") {
    alert("Date of birth is mandatory.");
    e.preventDefault();
    return;
  }

  const birthDate = new Date(dob);
  const today = new Date();

  let ageFromDate = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();

  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birthDate.getDate())
  ) {
    ageFromDate--;
  }

  if (ageFromDate < 18) {
    alert("You must be at least 18 years old.");
    e.preventDefault();
    return;
  }

  const age = document.getElementById("age").value;

  if (age < 18 || age > 60) {
    alert("Age must be between 18 and 60.");
    e.preventDefault();
    return;
  }

  const website = document.getElementById("website").value.trim();

  if (!website.startsWith("https://")) {
    alert("Website URL must start with https://.");
    e.preventDefault();
    return;
  }

  const fileInput = document.getElementById("fileUpload");

  if (fileInput.files.length === 0) {
    alert("Please upload a file.");
    e.preventDefault();
    return;
  }

  const file = fileInput.files[0];
  const fileName = file.name.toLowerCase();
  const maxSize = 2 * 1024 * 1024;

  if (!fileName.endsWith(".pdf") && !fileName.endsWith(".docx")) {
    alert("File must be a .pdf or .docx file.");
    e.preventDefault();
    return;
  }

  if (file.size > maxSize) {
    alert("File size must not exceed 2MB.");
    e.preventDefault();
    return;
  }

  const favColor = document.getElementById("favColor").value;

  if (favColor === "") {
    alert("Please select a color.");
    e.preventDefault();
    return;
  }

  const confirmation = confirm("All data is valid. Do you want to submit the form?");

  if (!confirmation) {
    e.preventDefault();
    return;
  }
});