document.getElementById("loginForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    let email =
    document.getElementById("email").value;

    let password =
    document.getElementById("password").value;

    let phone =
    document.getElementById("phone").value;

    let user = {
        email,
        password,
        phone
    };

    localStorage.setItem(
        "user",
        JSON.stringify(user)
    );

    alert("Login Success");

    window.location.href =
    "student.html";

});