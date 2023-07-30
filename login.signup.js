
function handleSignup(event) {
    event.preventDefault();
  
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    var storedUsers = JSON.parse(localStorage.getItem("users")) || [];
  
    var existingUser = storedUsers.find(user => user.username === username);
  
    if (existingUser) {
      alert("Username already exists. Please choose a different username.");
      return;
    }
  
    var newUser = {
      username: username,
      email: email,
      password: password
    };
  
    storedUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(storedUsers));
  
    alert("Sign up successful! Please sign in to continue.");
    document.getElementById("signup-form").reset();
  }
  function handleSignIn(event) {
    event.preventDefault();
  
    var loginUsername = document.getElementById("login-username").value;
    var loginPassword = document.getElementById("login-password").value;

    var storedUsers = JSON.parse(localStorage.getItem("users")) || [];
  
    var foundUser = storedUsers.find(user => user.username === loginUsername && user.password === loginPassword);
  
    if (foundUser) {
      alert("Login successful!");
    } else {
      alert("Invalid username or password");
    }

    document.getElementById("signin-form").reset();
  }
  
  document.getElementById("signup-form").addEventListener("submit", handleSignup);
  document.getElementById("signin-form").addEventListener("submit", handleSignIn);
  