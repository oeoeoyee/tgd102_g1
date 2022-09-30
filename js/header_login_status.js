(() => {
  // 針對 header 欄位調整!!!
  //      取得 sessionStorage 資料
  const MEMBER_ID = sessionStorage.getItem("MEMBER_ID");

  // 綁定
  // 登入狀態 ( 顏色 )
  const user_avatar = document.querySelector("#user_avatar");
  // "有" 會員資料 的功能
  const my_info = document.querySelector("#my_info"); // 會員資料
  const my_order = document.querySelector("#my_order"); // 訂單紀錄
  const my_level = document.querySelector("#my_level"); // 等級
  const logout = document.querySelector("#logout"); // 登出

  const member_logout = document.querySelector("#member_logout"); // 側邊登出

  // "無" 會員資料 的功能
  const register = document.querySelector("#register"); // 註冊
  const login = document.querySelector("#login"); // 登入

  try {
    if (MEMBER_ID) {
      user_avatar.classList.add("loging");
      // 添加 class ( display none ) 隱藏 註冊、登入
      register.classList.add("hide");
      login.classList.add("hide");

      // 移除 class ( 不 none ) 顯示會員功能
      my_info.classList.remove("hide");
      my_order.classList.remove("hide");
      my_level.classList.remove("hide");
      logout.classList.remove("hide");
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
  } catch (error) {}

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
    logout.addEventListener("click", loggggout);
  } catch (error) {}

  try {
    member_logout.addEventListener("click", loggggout);
  } catch (error) {}

  function loggggout() {
    sessionStorage.removeItem("MEMBER_ID");
    fetch("./php/logout.php");
    location = `./index.html`;
  }
})();
