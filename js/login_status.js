// 登入功能寫在 入口頁，也就是 login.html 下方~

// 這隻是有 SESSIOM 的資料才能繼續進行動作
// 判斷登入狀態 有就撈對應資料
//             沒有就送去登入頁面
const WantToDo = document.querySelector("table").dataset.wanttodo;
const refund = document.querySelector(".lightbox_ck2");
const checkRefund = document.querySelector(".lightbox_ck");

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
          member_vue.mbArray = resp;
        }
      });
  },

  methods: {
    // 訂單 ID
    CheckRefund() {
      const pay_status = document.querySelector("#pay_status").innerHTML;
      console.log(pay_status);
      if (pay_status == "已退票") {
        document.querySelector("#all_lightbox").remove();
        alert("此訂單已退款");
      }
    },

    REFUND() {
      const my_ORDER_ID = sessionStorage.getItem("ORDER_ID");
      // console.log(my_ORDER_ID);
      fetch("./php/login_status.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          my_ORDER_ID,
          refund: true,
        }),
      });
    },

    to(e) {
      sessionStorage.setItem("ORDER_ID", e.ORDER_ID);
    },
  },

  updated() {
    checkRefund.addEventListener("click", member_vue.CheckRefund);
    refund.addEventListener("click", member_vue.REFUND);
  },
});
