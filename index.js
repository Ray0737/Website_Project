/**
 * @param {Event} event 
 */
function handleLogin(event) {
    event.preventDefault();

    const usernameInput = document.getElementById('fname').value;
    const passwordInput = document.getElementById('pass').value;
    const messageElement = document.getElementById('loginMessage');
    const formElement = document.getElementById('loginForm');

    // IMPORTANT: Storing credentials like this is only for a basic, client-side example.
    // In a real application, you would validate credentials on a server.
    const VALID_USERNAME = "Napasawan Srisam-ang";
    const VALID_PASSWORD = "Trilingual_2022";

    messageElement.textContent = '';
    messageElement.className = 'message'; // Reset classes

    // Basic validation
    if (usernameInput === VALID_USERNAME && passwordInput === VALID_PASSWORD) {
        messageElement.textContent = "Login Successful! Redirecting to a.html...";
        messageElement.classList.add('success-message');

        // Wait 1.5 seconds, then redirect to a.html
        setTimeout(() => {
            console.log("Logged in as: " + usernameInput);

            // --- This is the key change to open a.html ---
            //window.location.href = 'a.html';
            // ---------------------------------------------

            // The following lines are now unnecessary as the page is redirecting
            // formElement.reset();
            // messageElement.textContent = "Login Successful!"; 
        }, 1500);

    } else {
        messageElement.textContent = "Error 403: Accedd Denied";
        messageElement.classList.add('error-message');
        document.getElementById('pass').value = '';
    }
}