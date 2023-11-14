// invitation.js

// Function to replace the content in the invitation
function replaceContent() {
    // Declaring variables for recipient and host names
    var myRecipientName = document.getElementById("recipientNameInput").value;
    var myHostName = document.getElementById("hostNameInput").value;

    // Debugging via console
    console.log('Recipient Name: ' + myRecipientName);
    console.log('Host Name: ' + myHostName);

    // Setting the HTML content of the placeholders with the variable values
    document.getElementById("recipientNamePlaceholder").innerHTML = myRecipientName;
    document.getElementById("hostNamePlaceholder").innerHTML = myHostName;
}
