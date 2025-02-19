document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Остановить перезагрузку страницы

    const userData = {
        name: document.getElementById("name").value,
        surname: document.getElementById("surname").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    };

    console.log(userData);
});
