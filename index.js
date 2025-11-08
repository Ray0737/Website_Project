/**
 * @param {Event} event 
 */
function handleLogin(event) {
    event.preventDefault();

    const usernameInput = document.getElementById('fname').value;
    const passwordInput = document.getElementById('pass').value;
    const messageElement = document.getElementById('loginMessage');

    // Split the comma-separated strings into arrays
    // Use trim() on the inputs just in case there's leading/trailing whitespace
    const VALID_USERNAMES = "psm024329,psm024326,psm024333".split(',');
    const VALID_PASSWORDS = "swu024329,swu024326,swu024333".split(',');

    messageElement.textContent = '';
    messageElement.className = 'message'; // Reset classes

    // 1. Find the index of the entered username in the valid usernames array
    const userIndex = VALID_USERNAMES.indexOf(usernameInput.trim());

    // 2. Check if the username was found AND if the password matches 
    // the password at the SAME index in the valid passwords array.
    if (userIndex !== -1 && passwordInput.trim() === VALID_PASSWORDS[userIndex]) {

        // --- Login Successful Block ---
        messageElement.textContent = "Login Successful! Redirecting to Namelist...";
        messageElement.classList.add('success-message');

        // Wait 1.5 seconds, then redirect
        setTimeout(() => {
            console.log("Logged in as: " + usernameInput);
            window.location.href = 'https://docs.google.com/spreadsheets/d/16ENv2t7XJWAMoWKsMGSQPfIjhmzYZIXMwARBSl0_sOQ/edit?usp=sharing';
        }, 1500);

    } else {

        // --- Login Failed Block ---
        messageElement.textContent = "Error 403: Access Denied";
        messageElement.classList.add('error-message');
        document.getElementById('pass').value = ''; // Clear the password field
    }
}