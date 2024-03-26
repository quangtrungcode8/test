function showLoginForm() {
  document.getElementById("login-heading").style.display = "block";
  document.getElementById("login-form").style.display = "block";
  document.getElementById("register-heading").style.display = "none";
  document.getElementById("register-form").style.display = "none";
}

function showRegisterForm() {
  document.getElementById("login-heading").style.display = "none";
  document.getElementById("login-form").style.display = "none";
  document.getElementById("register-heading").style.display = "block";
  document.getElementById("register-form").style.display = "block";
}

function login(event) {
  event.preventDefault();
  // Xử lý logic đăng nhập
}

function register(event) {
  event.preventDefault();
  // Xử lý logic đăng ký
}