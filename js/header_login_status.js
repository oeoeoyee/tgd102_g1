(() => {
  // 針對 header 欄位調整!!!
  //      取得 sessionStorage 資料
  // const MEMBER_ID = sessionStorage.getItem("MEMBER_ID");
  const NAME = sessionStorage.getItem("NAME"); // 僅取出必要資訊比對
  // const EMAIL = sessionStorage.getItem("EMAIL");

  // 綁定
  // 登入狀態 ( 顏色 )
  const user_avatar = document.querySelector("#user_avatar");
  // "有" 會員資料 的功能
  const my_info = document.querySelector("#my_info"); // 會員資料
  const my_order = document.querySelector("#my_order"); // 訂單紀錄
  const my_level = document.querySelector("#my_level"); // 等級
  const logout = document.querySelector("#logout"); // 登出

  // "無" 會員資料 的功能
  const register = document.querySelector("#register"); // 註冊
  const login = document.querySelector("#login"); // 登入

  if (NAME) {
    user_avatar.classList.add("loging");
    // 添加 class ( display none ) 隱藏 註冊、登入
    register.classList.add("hide");
    login.classList.add("hide");

    // 移除 class ( 不 none ) 顯示會員功能
    my_info.classList.remove("hide");
    my_order.classList.remove("hide");
    my_level.classList.remove("hide");
    logout.classList.remove("hide");

    // roleId == 1
    //   ? manage.classList.remove("hide")
    //   : manage.classList.add("hide");
    // document.querySelector("#currentUser").textContent = nickname;
  } else {
    // 沒有 sessionStorage 資料
    // 添加 class ( display none ) 隱藏 會員功能
    my_info.classList.add("hide");
    my_order.classList.add("hide");
    my_level.classList.add("hide");
    logout.classList.add("hide");

    // 移除 class ( 不 none ) 顯示 註冊、登入
    register.classList.remove("hide");
    login.classList.remove("hide");

    // 登入狀態顏色
    user_avatar.classList.remove("loging");
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
      sessionStorage.removeItem("NAME");
      sessionStorage.removeItem("MEMBER_ID");
      sessionStorage.removeItem("EMAIL");
      fetch("./php/logout.php");
      location = `${getContextPath()}/tgd102_g1/dist/index.html`;
    });
  } catch (error) {}
})();
