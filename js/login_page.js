// ################################################################
//            檢查會員是不是登入中 登入中就送去會員中心
const AM_I_LOGIN = sessionStorage.getItem("MEMBER_ID");
if (AM_I_LOGIN) {
  location.replace("./member_info.html");
}
// ################################################################

//                  登入、sessionStorage.setItem
// ################################################################
(() => {
  // 取欄位值
  const useremail = document.querySelector("#email"); // 信箱 輸入欄
  const password = document.querySelector("#pwd"); // 密碼 輸入欄
  const errMsg = document.querySelector("#error"); // 錯誤訊息欄

  // 1. 綁定 id="login_btn" 加入登入功能
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
          const { MEMBER_ID, LEVEL } = body;
          sessionStorage.setItem("MEMBER_ID", MEMBER_ID);

          // ############ 管理員 ############ 低安全性判斷
          // 成功後 轉址 ? 會員中心
          if (LEVEL == "ADMIN") {
            alert("歡迎管理員登入 即將跳轉至後臺");
            // 條件 送去後臺頁
            location = "./back_chart.html";
            sessionStorage.setItem("ADMIN", LEVEL);
            // ############ 管理員 ############
          } else {
            // ----------- 會員 -----------
            location = "./member_info.html";
          }
        } else {
          // 失敗將收到的錯誤訊息寫進 HTML
          errMsg.textContent = message;
        }
      });
  });
})();
// ################################################################
