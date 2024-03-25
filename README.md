// togglePassword.js
document.addEventListener('DOMContentLoaded', function() {
    var passwordInput = document.getElementById('password');
    var togglePasswordButton = document.getElementById('togglePassword');

    togglePasswordButton.addEventListener('click', function() {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            togglePasswordButton.textContent = "Ocultar Senha";
        } else {
            passwordInput.type = "password";
            togglePasswordButton.textContent = "Mostrar/Ocultar Senha";
        }
    });
});
