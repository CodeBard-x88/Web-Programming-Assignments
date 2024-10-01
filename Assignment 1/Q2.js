document.getElementById("applicationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Collect form data
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const resume = document.getElementById("resume").files[0].name; // Get file name
    const coverLetter = document.getElementById("coverLetter").value;

    // Log data to the console (simulating submission)
    console.log({
        firstName,
        lastName,
        email,
        phone,
        resume,
        coverLetter,
    });

    // Reset form fields
    document.getElementById("applicationForm").reset();
});

// Display submitted applications in a table
document.getElementById("viewTable").addEventListener("click", function() {
    const applicationsBody = document.getElementById("applicationsBody");

    // Clear existing entries
    applicationsBody.innerHTML = "";

    // Append new application data to the table
    const newRow = applicationsBody.insertRow();
    const nameCell = newRow.insertCell(0);
    const emailCell = newRow.insertCell(1);
    const phoneCell = newRow.insertCell(2);
    const resumeCell = newRow.insertCell(3);
    const coverLetterCell = newRow.insertCell(4);

    const fullName = document.getElementById("firstName").value + " " + document.getElementById("lastName").value;
    
    nameCell.innerText = fullName;
    emailCell.innerText = document.getElementById("email").value;
    phoneCell.innerText = document.getElementById("phone").value;
    resumeCell.innerText = document.getElementById("resume").files[0].name;
    coverLetterCell.innerText = document.getElementById("coverLetter").value;

    // Show the applications table
    document.getElementById("applicationsTable").style.display = "block";
});
