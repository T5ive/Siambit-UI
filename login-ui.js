// ==UserScript==
// @name    Siambit Login UI
// @match  https://bearbit.co/login.php*
// @version  1
// @author       T5ive
// @updateURL    https://raw.githubusercontent.com/T5ive/Siambit-UI/main/login-ui.js
// @downloadURL  https://raw.githubusercontent.com/T5ive/Siambit-UI/main/login-ui.js
// @grant    none
// ==/UserScript==

document.addEventListener("DOMContentLoaded", function (event) {
    injectCss();
    document.body.innerHTML = "";

    var divElement = document.createElement("div");
    divElement.className = "wrapper";
    divElement.innerHTML = `
            <form method="post" action="takelogin.php">
        <h1>Login</h1>
        <div class="input-box">
            <input id="username" name="username" type="text" placeholder="Username" required />
            <i class="bx bxs-user"></i>
        </div>
        <div class="input-box">
            <input id="password" name="password" type="password" placeholder="Password" required />
            <i class="bx bxs-lock-alt"></i>
        </div>
        <div class="forgot-pass">
            <a href="recover.php">Forgot Password?</a>
        </div>
        <input type="submit" value="Log in!" class="btn" />
    </form>
    `;
    document.body.appendChild(divElement);
});

function injectCss() {
    
    //https://www.youtube.com/watch?v=hlwlM4a5rxg

    var cssLink = document.createElement("link");
    cssLink.rel = "stylesheet";
    cssLink.href = "https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css";
    document.head.appendChild(cssLink);

    var styleElement = document.createElement("style");
    styleElement.textContent = `
    @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap");

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Poppins", sans-serif;
    }

    body {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        background: url("https://github.com/T5ive/Siambit-UI/blob/main/img.jpg?raw=true") no-repeat;
        background-size: cover;
        background-position: center;
    }

    .wrapper {
        width: 420px;
        background: transparent;
        border: 2px solid rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(20px);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        color: #fff;
        border-radius: 10px;
        padding: 30px 40px;
    }
    .wrapper h1 {
        font-size: 36px;
        text-align: center;
    }

    .wrapper .input-box {
        position: relative;
        width: 100%;
        height: 50px;
        margin: 30px 0;
    }

    .input-box input {
        width: 100%;
        height: 100%;
        background: transparent;
        border: none;
        outline: none;
        border: 2px solid rgba(255, 255, 255, 0.2);
        border-radius: 40px;
        font-size: 16px;
        color: #fff;
        padding: 20px 45px 20px 20px;
    }

    .input-box input::placeholder {
        color: #fff;
    }

    .input-box i {
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 20px;
    }

    .wrapper .forgot-pass {
        display: flex;
        justify-content: center;
        font-size: 14.5px;
        margin: -15px 0 15px;
    }

    .forgot-pass label input {
        accent-color: #fff;
    }

    .forgot-pass a {
        color: #fff;
        text-decoration: none;
    }

    .wrapper .btn {
        width: 100%;
        height: 45px;
        background: #fff;
        border: none;
        outline: none;
        border-radius: 40px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        cursor: pointer;
        font-size: 16px;
        color: #333;
        font-weight: 600;
    }
`;
    document.head.appendChild(styleElement);
}
