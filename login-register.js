
function showLogin() {
  document.getElementById("loginForm").classList.add("active");
  document.getElementById("registerForm").classList.remove("active");

  document.querySelectorAll("button")[0].classList.add("active");
  document.querySelectorAll("button")[1].classList.remove("active");
}

function showRegister() {
  document.getElementById("registerForm").classList.add("active");
  document.getElementById("loginForm").classList.remove("active");

  document.querySelectorAll("button")[1].classList.add("active");
  document.querySelectorAll("button")[0].classList.remove("active");
}

function register() {
    let email = document.getElementById("registerEmail").value;
    let password = document.getElementById("registerPassword").value;
    let username = document.getElementById("registerUsername").value;
    if(email.length < 6 || password.length <6 || username.length < 6) {
        alert("Tên đăng nhập, email và mật khẩu phải có ít nhất 6 ký tự!");
        return;
    }
    else{
    let users = JSON.parse(localStorage.getItem("users")) || [];
    for (let user of users) {
        if (user.email === email) {
            alert("Email đã tồn tại!");
            return;
        }
    }for (let user of users) {
        if (user.username === username) {
            alert("Tên đăng nhập đã tồn tại!");
            return;
        }
    }
    users.push({
        email: email,
        password: password,
        username: username
    });

    localStorage.setItem("users", JSON.stringify(users));

    alert("Đăng ký thành công!");
    }
}

function login(){
    let username = document.getElementById("loginUsername").value;
    let password = document.getElementById("loginPassword").value;
    let users = JSON.parse(localStorage.getItem("users")) || [];

    let foundUser = users.find(user => 
        user.username === username && user.password === password
    );

    if (foundUser) {
        localStorage.setItem("currentUser", JSON.stringify(foundUser));
        alert("Đăng nhập thành công!");
        window.location.href = "Index.html";
    } else {
        alert("Tên đăng nhập hoặc mật khẩu không đúng!");
    }
}

function logout() {
    localStorage.removeItem("currentUser");
    alert("Đăng xuất thành công!");
    window.location.reload();
}


window.onload = function() {
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser) {
        document.querySelector(".login").style.display = "none";
        document.querySelector(".logout").style.display = "inline";
    }else {
        document.querySelector(".login").style.display = "inline";
        document.querySelector(".logout").style.display = "none";
    }
};
