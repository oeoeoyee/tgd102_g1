// 登入功能寫在 入口頁，也就是 login.html 下方~


// 這隻是有 SESSIOM 的資料才能繼續進行動作
// 判斷登入狀態 有就撈對應資料
//             沒有就送去登入頁面
const WantToDo = document.querySelector("table").dataset.wanttodo;

let member_vue = new Vue({
  el: "#app_memberTable",
  data: {
    mbArray: [],
  },

  mounted: function () {
    const my_ORDER_ID = sessionStorage.getItem("ORDER_ID");

    fetch("./php/login_status.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // 送出會員要到哪頁做什麼事
        my_ORDER_ID,
        WantToDo,
      }),
    })
      .then((resp) => resp.json())
      .then((resp) => {
        // 回應是無資料就送走
        if (resp.successful == "無登入資訊") {
          // ######## 回應為無資料就送走 ######## 測試請開關此段
          location.replace("./login.html");
          // ######## 回應為無資料就送走 ########
        } else {
          // 有回應就把會應放進陣列帶給 Vue
          member_vue.mbArray = resp;
        }
      });
  },

  methods: {
    // 訂單 ID
    to(e) {
      // console.log(e.ORDER_ID);
      sessionStorage.setItem("ORDER_ID", e.ORDER_ID);
    },
  },
});
