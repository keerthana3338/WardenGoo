document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("outingForm");

  form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form submission

      // Capture form values
      var name = document.getElementById("name").value;
      var registrationNumber = document.getElementById("registrationNumber").value;
      var toPlace = document.getElementById("toPlace").value;
      var outingTime = document.getElementById("outingTime").value;
      var inTime = document.getElementById("inTime").value;
      var parentPhoneNumber = document.getElementById("parentPhoneNumber").value;
      var branch = document.getElementById("branch").value;

      // Create a new outing request object
      var outingRequest = {
          name: name,
          registrationNumber: registrationNumber,
          branch: branch,
          toPlace: toPlace,
          outingTime: outingTime,
          inTime: inTime,
          parentPhoneNumber: parentPhoneNumber
      };

      // Get existing requests from localStorage
      var storedRequests = JSON.parse(localStorage.getItem('outingRequests')) || [];

      // Add new request to the array
      storedRequests.push(outingRequest);

      // Save updated requests array back to localStorage
      localStorage.setItem('outingRequests', JSON.stringify(storedRequests));

      // Redirect to the confirmation page
      window.location.href = "confirmation.html";
  });
});

