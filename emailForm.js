// Function to handle form submission
emailjs.init('IxFZtMarYhpUKTlxG');

function sendEmail(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Use EmailJS to send the email
    emailjs.send('service_s3fduxk', 'template_0o44nr8', {
        name: name,
        email: email,
        message: message
    })
    .then(function(response) {
        console.log('Email sent successfully!', response);
        alert('Wiadomość Pomyślnie wysłana');
    }, function(error) {
        console.error('Error sending email:', error);
        alert('Wysyłanie wiadomości nie powiodlo się.');
    });
}

// Attach form submission handling to the form
document.getElementById("myForm").addEventListener("submit", sendEmail);