document.addEventListener("DOMContentLoaded", function () {
  displayOutingRequests(); // Load pending requests on page load
  displayAcceptedRequests(); // Load accepted requests on page load
});

function displayOutingRequests() {
  var outingRequestsContainer = document.getElementById("outingRequests");
  outingRequestsContainer.innerHTML = ""; 
  var outingRequests = JSON.parse(localStorage.getItem('outingRequests')) || [];
  
  outingRequests.forEach(function (request, index) {
      var requestDiv = document.createElement("div");
      requestDiv.className = "outing-request";

      var details = `
          <br>
          <strong>Name:</strong> ${request.name}<br>
          <strong>Registration Number:</strong> ${request.registrationNumber}<br>
          <strong>Branch:<strong> ${request.branch}<br>
          <strong>Outing Place:</strong> ${request.toPlace}<br>
          <strong>Outing Time:</strong> ${request.outingTime}<br>
          <strong>In Time:</strong> ${request.inTime}<br>
          <strong>Parent's Phone Number:</strong> ${request.parentPhoneNumber}<br>
          <button onclick="approveRequest(${index})" style="background-color:green;">Approve</button>
          <br><br>
          <button onclick="rejectRequest(${index})" style="background-color:#D2042D;">Reject</button>
      `;
      requestDiv.innerHTML = details;
      outingRequestsContainer.appendChild(requestDiv);
  });
}

function approveRequest(index) {
  var outingRequests = JSON.parse(localStorage.getItem('outingRequests')) || [];
  var approvedRequests = JSON.parse(localStorage.getItem('approvedRequests')) || [];

  var approvedRequest = outingRequests.splice(index, 1)[0]; // Remove from pending requests and store in approved
  approvedRequests.push(approvedRequest);

  localStorage.setItem('outingRequests', JSON.stringify(outingRequests)); // Update pending requests
  localStorage.setItem('approvedRequests', JSON.stringify(approvedRequests)); // Save approved requests

  alert("Outing request approved for " + approvedRequest.name);

  displayOutingRequests(); // Refresh pending requests
  displayAcceptedRequests(); // Refresh accepted requests
}

function rejectRequest(index) {
  var outingRequests = JSON.parse(localStorage.getItem('outingRequests')) || [];

  var rejectedRequest = outingRequests.splice(index, 1)[0]; // Remove the rejected request from pending requests
  localStorage.setItem('outingRequests', JSON.stringify(outingRequests)); // Update pending requests

  alert("Outing request rejected for " + rejectedRequest.name);

  displayOutingRequests(); // Refresh pending requests
}

function displayAcceptedRequests() {
  var acceptedRequestsContainer = document.getElementById("acceptedRequests");
  acceptedRequestsContainer.innerHTML = ""; 
  var approvedRequests = JSON.parse(localStorage.getItem('approvedRequests')) || [];
  
  approvedRequests.forEach(function (request) {
      var requestDiv = document.createElement("div");
      requestDiv.className = "accepted-request";

      var details = `
          <br>
          <strong>Name:</strong> ${request.name}<br>
          <strong>Registration Number:</strong> ${request.registrationNumber}<br>
          <strong>Branch:<strong> ${request.branch}<br>
          <strong>Outing Place:</strong> ${request.toPlace}<br>
          <strong>Outing Time:</strong> ${request.outingTime}<br>
          <strong>In Time:</strong> ${request.inTime}<br>
          <strong>Parent's Phone Number:</strong> ${request.parentPhoneNumber}<br>
      `;
      requestDiv.innerHTML = details;
      acceptedRequestsContainer.appendChild(requestDiv);
  });
}

// Function to clear the history of accepted outing requests
function clearAcceptedRequests() {
  localStorage.removeItem('approvedRequests'); // Clear approved requests from local storage
  displayAcceptedRequests(); // Refresh the accepted requests display
  alert("Accepted outing requests history cleared.");
}
