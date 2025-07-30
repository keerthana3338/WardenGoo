function wardenLogin() {
  var email = document.getElementById("wardenEmail").value;
  var password = document.getElementById("wardenPassword").value;

  // Simple authentication (replace with real authentication later)
  if (email === "warden@example" && password === "123") {
      // Successful login, redirect to warden portal
      window.location.href = "warden-portal.html";
  } else {
      alert("Invalid email or password. Please try again.");
  }

  return false; // Prevent actual form submission
}
