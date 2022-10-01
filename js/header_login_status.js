(() => {
  // 針對 header 欄位調整!!!
  //      取得 sessionStorage 資料
  const MEMBER_ID = sessionStorage.getItem("MEMBER_ID");
  const LEVEL = sessionStorage.getItem("ADMIN");

  // 綁定
  // 登入狀態 ( 顏色 )
  const member_avatar = document.querySelector("#member_avatar");
  // "有" 會員資料 的功能
  const member_info = document.querySelector("#member_info"); // 會員資料
  const member_order = document.querySelector("#member_order"); // 訂單紀錄
  const member_level = document.querySelector("#member_level"); // 等級
  const member_logout = document.querySelector("#member_logout"); // 登出

  // "無" 會員資料 的功能
  const member_register = document.querySelector("#member_register"); // 註冊
  const member_login = document.querySelector("#member_login"); // 登入

  // #### 管理員 ####
  const admin_goto_back = document.querySelector("#admin_goto_back"); // 前往後臺頁
  // #### 管理員 ####

  try {
    if (MEMBER_ID) {
      member_avatar.classList.add("loging");
      // 添加 class ( display none ) 隱藏 註冊、登入
      member_register.classList.add("hide");
      member_login.classList.add("hide");

      // 移除 class ( 不 none ) 顯示會員功能
      member_info.classList.remove("hide");
      member_order.classList.remove("hide");
      member_level.classList.remove("hide");
      member_logout.classList.remove("hide");
    } else {
      // 沒有 sessionStorage 資料
      // 添加 class ( display none ) 隱藏 會員功能
      member_info.classList.add("hide");
      member_order.classList.add("hide");
      member_level.classList.add("hide");
      member_logout.classList.add("hide");

      // 移除 class ( 不 none ) 顯示 註冊、登入
      member_register.classList.remove("hide");
      member_login.classList.remove("hide");

      // 登入狀態顏色
      member_avatar.classList.remove("loging");
    }
  } catch (error) {
    // do...
  }

  // #### 管理員 #### 額外選項 前往後臺頁
  try {
    if (LEVEL != "ADMIN") {
      admin_goto_back.classList.add("hide");
    } else {
      admin_goto_back.classList.remove("hide");
    }
  } catch (error) {}
  // #### 管理員 #### 額外選項 前往後臺頁

  // 回到前面的路徑 (功能尚未明確)
  // function getContextPath() {
  //   return window.location.pathname.substring(
  //     0,
  //     window.location.pathname.indexOf("/", 2)
  //   );
  // }

  // 登出鍵
  // 嘗試綁定
  try {
    member_logout.addEventListener("click", () => {
      sessionStorage.removeItem("MEMBER_ID");
      sessionStorage.removeItem("ADMIN");
      fetch("./php/logout.php");
      location = `./index.html`;
    });
  } catch (error) {}
})();
