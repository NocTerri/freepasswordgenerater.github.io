function generatePassword() {
    const length = 12; // You can adjust the length of the generated password
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=";

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset.charAt(randomIndex);
    }

    // Display the generated password
    document.getElementById("password-display").textContent = `Generated Password: ${password}`;
}
