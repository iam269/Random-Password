const passwordContainer = document.getElementById('password');
const copyButton = document.getElementById('copyBtn');
const generateButton = document.getElementById('generateBtn');

const generatePassword = () => {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    let password = "";
    for (let i = 0; i < 12; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    passwordContainer.value = password;
}

const copyToClipboard = () => {
    passwordContainer.select();
    document.execCommand("copy");
}

generateButton.addEventListener('click', generatePassword);
copyButton.addEventListener('click', copyToClipboard);