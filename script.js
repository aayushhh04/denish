function checkLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("errorMessage");

    if (username === "Ryuken" && password === "123456") {
        errorMessage.innerHTML = "";
        alert("Login successful!");
    } else {
        errorMessage.innerHTML = "YOU GAY YOU DON'T HAVE PERMISSION TO OPEN THIS.";
    }
}

// Password Strength Meter
document.getElementById('password').addEventListener('input', function() {
    const strengthMeter = document.getElementById('strengthMeter');
    const password = this.value;
    let strength = password.length * 10;
    strengthMeter.style.width = strength + '%';
    strengthMeter.style.background = strength > 50 ? 'limegreen' : 'red';
});

// Toggle Password Visibility
function togglePassword() {
    var passwordInput = document.getElementById("password");
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
}

// Dark/Light Mode Toggle
function toggleTheme() {
    document.body.classList.toggle("dark-mode");
}

// Snowfall Effect
for (let i = 0; i < 50; i++) {
    setTimeout(() => {
        let snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.innerHTML = '❄';
        document.body.appendChild(snowflake);
        setTimeout(() => snowflake.remove(), 5000);
    }, i * 200);
}
