// 判斷 sessionStorage 裡的 ID 簡易判斷 安全性低
const admin_status = sessionStorage.getItem("ADMIN");

 // 登出
const logoutttt = document.querySelector("#logoutttt");

if (!admin_status) {
  location.replace("./index.html");
}

// 登出鍵
// 嘗試綁定
try {
  logoutttt.addEventListener("click", () => {
    sessionStorage.removeItem("MEMBER_ID");
    sessionStorage.removeItem("ADMIN");
    fetch("./php/logout.php");
    location = `./index.html`;
  });
} catch (error) {}
