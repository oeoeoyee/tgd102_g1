// 登入功能
// 先嘗試綁定 沒有綁定到就跳過 try catch


(() => {
  // 取欄位值
  const useremail = document.querySelector("#email");
  const password = document.querySelector("#pwd");
  const errMsg = document.querySelector("#error");

  // 1. 綁定 id="login_btn" 加入登入功能
  try {
    // try 嘗試綁定 沒有就跳過
    document.getElementById("login_btn").addEventListener("click", () => {
      fetch("./php/login.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          useremail: useremail.value,
          password: password.value,
        }),
      })
        .then((resp) => resp.json()) // 2. 取得回應後
        .then((body) => {
          errMsg.textContent = "";
          const { successful, message } = body;
          if (successful) {
            // true 就送 SESSION 到 使用者Cookie
            const { MEMBER_ID, NAME, EMAIL } = body;
            sessionStorage.setItem("MEMBER_ID", MEMBER_ID);
            sessionStorage.setItem("NAME", NAME);
            sessionStorage.setItem("EMAIL", EMAIL);
            // 成功後轉址回首頁
            location = "./index.html";
          } else {
            // 失敗將收到的錯誤訊息寫進 HTML
            errMsg.textContent = message;
          }
        });
    });
  } catch (error) {
    // 跳過 (?)
  }
})();

(() => {
  // 取得 sessionStorage 資料
  const MEMBER_ID = sessionStorage.getItem("MEMBER_ID");
  const NAME = sessionStorage.getItem("NAME");
  const EMAIL = sessionStorage.getItem("EMAIL");
  console.log(MEMBER_ID, NAME, EMAIL);

  // 綁定

  const register = document.querySelector("#register");
  const edit = document.querySelector("#edit");
  const manage = document.querySelector("#manage");
  const login = document.querySelector("#login");
  const logout = document.querySelector("#logout");

  if (NAME) {
    console.log("HI," + NAME);

    // register.classList.add("hide");
    // edit.classList.remove("hide");
    // roleId == 1
    //   ? manage.classList.remove("hide")
    //   : manage.classList.add("hide");
    // login.classList.add("hide");
    // logout.classList.remove("hide");
    // document.querySelector("#currentUser").textContent = nickname;
    // document.querySelector("#avatar").src = URL.createObjectURL(
    //   base64StrToBlob(avatar)
    // );
  } else {
    console.log("NO");

    // register.classList.remove("hide");
    // edit.classList.add("hide");
    // manage.classList.add("hide");
    // login.classList.remove("hide");
    // logout.classList.add("hide");
  }

  // 回到前面的路徑 (功能尚未明確)
  function getContextPath() {
    return window.location.pathname.substring(
      0,
      window.location.pathname.indexOf("/", 2)
    );
  }

  // 登出鍵
  try {
    // 嘗試綁定
    logout.addEventListener("click", () => {
      // 移除 sessionStorage NAME 值
      // sessionStorage.removeItem("NAME");
      // fetch("member/logout");
      location = `${getContextPath()}/tgd102_g1/dist/index.html`;
    });
  } catch (error) {}
})();
