//            檢查會員是不是登入中 登入中就送去會員中心
const AM_I_LOGIN = sessionStorage.getItem("MEMBER_ID");
if (AM_I_LOGIN) {
  location.replace("./member_info.html");
}

const signin_name = document.querySelector("#name");
const signin_email = document.querySelector("#email");
const signin_phone = document.querySelector("#phone");
const signin_pwd = document.querySelector("#pwd");
const signin_sub = document.querySelector(".signin_sub");
const register = document.querySelector("#signin_submit");

register.addEventListener("click", () => {
  let error_msg = "";

  // 姓名不為空
  if ($("#name").val() == "") {
    error_msg = error_msg + "姓名、";
  }
  // if (!($("#name").val())) {
  //     error_msg = error_msg + "姓名、";
  // }

  // 信箱 反轉false送出錯誤警告
  if (!$("#email").val()) {
    error_msg = error_msg + "Email錯誤、";
  }

  // 手機 反轉false送出錯誤警告
  if (!$("#phone").val()) {
    error_msg = error_msg + "電話錯誤、";
  }

  // 密碼 反轉false送出錯誤警告
  if (!$("#pwd").val()) {
    error_msg = error_msg + "密碼錯誤";
  }

  // 無誤後送出
  if (error_msg == "") {
    fetch("./php/signin.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        signin_name: signin_name.value,
        signin_email: signin_email.value,
        signin_phone: signin_phone.value,
        signin_pwd: signin_pwd.value,
        signin_sub: signin_sub.checked,
      }),
    })
      .then((resp) => resp.json())
      .then((body) => {
        // console.log(body);
        if (body.successful) {
          // successful 就送 SESSION 到 使用者Cookie
          const { MEMBER_ID } = body;
          sessionStorage.setItem("MEMBER_ID", MEMBER_ID);

          if (sessionStorage.getItem("MEMBER_ID")) {
            location = "./signin_succ.html";
          }
        }
      });
  } else {
    $("#error").html(error_msg + "，請再次確認");
  }
});
