const givenPassword = "password123"; // Replace with your own password

document.getElementById("loginbutton").addEventListener("click", function(event) {
  event.preventDefault(); // Prevent form from submitting

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (password === givenPassword) {
    alert("Login successful!");
    // Do whatever you need to do after successful login
    window.open("http://localhost:3000", "myWindow");
  } else {
    alert("Invalid password. Please try again.");
  }
});
