const givenPassword = "root"; // Replace with your own password
const registeredUsers = []; // Array of registered usernames

      document.getElementById("loginbutton").addEventListener("click", function(event) {
        event.preventDefault(); // Prevent form from submitting
        
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username === "") {
          alert("Please enter a username.");
        } 
        else if (registeredUsers.includes(username)) {
          alert("Username already exists. Please choose a different name.");
        }
        else if (password === givenPassword) {
          alert("Login successful!");
          // Do whatever you need to do after successful login
          
          window.open("http://localhost:3000/?username=" + username, "_blank");
          registeredUsers.push(username); // Add username to list of registered users
          document.getElementById("username").value = ""; // Clear username field
    document.getElementById("password").value = ""; // Clear password field
        } else {
          alert("Invalid password. Please try again.");
        }
      });