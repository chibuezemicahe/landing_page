// Load the EmailJS SDK dynamically
const script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
script.onload = function() {
    // Initialize EmailJS after the script has loaded
    emailjs.init('9SXNEvhYbi6KrP7UM');  // Replace with your EmailJS user ID
};
document.head.appendChild(script);


const button = document.getElementById('button2');
const mainContent = document.getElementById('main-content');

// creating the form
const formHTML = `
            <form id="contact-form">
            <span class="close  name-input" id="closePopup">&times;</span>
            <label for="fname">Full Name:</label>
            <input type="text" id="fname" name="fname" class="form-input" id="name-input">
            <label for="email-Add">Email Address:</label>
            <input id="email-Add" name="email-Add" class="form-input" type="email">
            <label for="Message">Message:</label>
            <textarea id="message" name="message" rows="10" cols="50" class="form-textarea"></textarea>
            <input type="submit" value="Submit" id="submit-button" class="form-input">
</form>
`

const displayForm = () => {
    mainContent.insertAdjacentHTML('beforeend', formHTML);
    const closePopup = document.getElementById('closePopup');

    closePopup.addEventListener('click', () => {
        document.getElementById('contact-form').remove();
    });

    // Handle form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect form data
    const formData = {
        fname: document.getElementById('fname').value,
        email: document.getElementById('email-Add').value,
        message: document.getElementById('message').value
    };

    // Send the email using EmailJS
    emailjs.send('service_vhypxs3', 'template_n73e00i', formData)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Your message has been sent successfully!');
            document.getElementById('contact-form').reset();
            document.getElementById('contact-form').remove();
        }, function(error) {
            console.log('FAILED...', error);
            alert('Failed to send the message. Please try again.');
        });
});


}

button.addEventListener("click",displayForm)