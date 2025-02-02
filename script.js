function checkLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("errorMessage");

    if (username === "aayushh" && password === "69") {
        errorMessage.innerHTML = ""; // Clear error message
        alert("Login successful!");
    } else {
        errorMessage.innerHTML = "YOU GAY YOU DON'T HAVE PERMISSION TO OPEN THIS.";
    }
}

// Snowfall function
const snowflakesCount = 100;
const createSnowflake = () => {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.style.left = `${Math.random() * 100}vw`;
    snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
    snowflake.style.fontSize = `${Math.random() * 10 + 10}px`;
    snowflake.innerHTML = '❄';
    document.body.appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, 5000);
}

for (let i = 0; i < snowflakesCount; i++) {
    setTimeout(createSnowflake, i * 100);
}

setInterval(() => {
    createSnowflake();
}, 300);
