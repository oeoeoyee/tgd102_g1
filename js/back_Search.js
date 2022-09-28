// 搜尋功能
const url = "./php/back_All_Search.php?keywords=";
const keyword_input = document.querySelector(".back_search"); // 綁定搜尋欄位的 input

// 取 table 的自訂屬性的值
const tbName = document.querySelector("table").dataset.tbname;

// 此 Vue ID 綁在 app_backTable 的欄位
let table_vue = new Vue({
  el: "#app_backTable",
  data: {
    tbArray: [],
  },
  methods: {
    news_del(newsID) {
      // 相當於傳送這段網址到php>>php執行刪除的sql公式
      fetch(`./php/back_news_del.php?id=${newsID}`);
      const delConfirm = confirm("確定下架這筆資料?");
      if (delConfirm) {
        window.location.reload();
      } else {
      }
    },
  },
  mounted: function () {
    const api = "./php/back_All_Search.php"; // 要從哪裡得到資料

    fetch(api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tbName,
      }),
    })
      .then((resp) => resp.json())
      .then((resp) => (table_vue.tbArray = resp));
  },
});

// 此 Vue 是綁在搜尋欄位上
new Vue({
  el: "#keyWord",
  data: {
    keyWord: "",
  },
  methods: {
    // 搜尋欄位綁定 enter 鍵，按下後執行
    enter_push() {
      if (true) {
        fetch(`${url}${keyWord.value}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            tbName,
            // DBcolumn, // 暫時用不到
          }),
        })
          .then((resp) => resp.json())
          // 將回應直接放近另外一個 Vue 的陣列中
          // 個網頁獨立的 Vue 名稱如果一樣的話 就可以傳給那一個網頁的 vue!!!
          // ( back_news 的 Vue -> table_vue )
          .then((resp) => (table_vue.tbArray = resp));
      }
    },
  },
});
