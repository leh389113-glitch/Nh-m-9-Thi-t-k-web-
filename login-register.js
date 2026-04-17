
function registerUser() {
    let email = document.getElementById("registerEmail").value;
    let password = document.getElementById("registerPassword").value;
    let username = document.getElementById("registerUsername").value;
    let confirmPassword = document.getElementById("registerConfirmPassword").value;

    if (!email || !password || !username || !confirmPassword) {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
    alert("Email không đúng định dạng!");
    return;
    }

    if (password !== confirmPassword) {
        alert("Mật khẩu xác nhận không khớp!");
        return;
    }
    if(password.length <6 || username.length < 6) {
        alert("Tên đăng nhập và mật khẩu phải có ít nhất 6 ký tự!");
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
    window.location.href = "login.html";
    }
}

function loginUser(){
    let username = document.getElementById("loginUsername").value;
    let password = document.getElementById("loginPassword").value;
    let users = JSON.parse(localStorage.getItem("users")) || [];

    let foundUser = users.find(user => 
        (user.username === username|| user.email===username) && user.password === password
    );

    if (foundUser) {
        localStorage.setItem("currentUser", JSON.stringify(foundUser));
        alert("Đăng nhập thành công!");
        window.location.href = "phim.html";
    } else {
        alert("Tên đăng nhập hoặc mật khẩu không đúng!");
    }
}

function logoutUser() {
    localStorage.removeItem("currentUser");
    alert("Đăng xuất thành công!");
    window.location.reload();
}

window.onload = function () {
    let loginBtn = document.querySelector("#log-in");
    let logoutBtn = document.querySelector("#log-out");
    let signUpBtn = document.querySelector("#sign-up");

    if (!loginBtn || !logoutBtn || !signUpBtn) return;

    let currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (currentUser) {
        loginBtn.style.display = "none";
        signUpBtn.style.display = "none";
        logoutBtn.style.display = "inline-block";
    } else {
        loginBtn.style.display = "inline-block";
        signUpBtn.style.display = "inline-block";
        logoutBtn.style.display = "none";
    }
};
