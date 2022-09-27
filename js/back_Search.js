// 搜尋功能
const url = "./php/back_All_Search.php?keywords=";
const keyword_input = document.querySelector(".back_search"); // 綁定搜尋欄位的 input

// 綁定 table 的自訂屬性 取得 tbName & colName # 需設定自訂屬性 "data-tbName"
const tbName = document.querySelector("table").dataset.tbname;

// 取出欄位自訂屬性 (暫時無作用)
let DBcolumn = "";
const columnAll = document.querySelectorAll("th").forEach((e) => {
  // 如果有此自訂屬性就取值
  if (e.dataset.colname) {
    DBcolumn += e.dataset.colname + ", ";
  }
});

const key_resp = new Vue({
  el: "#keyWord",
  data: {
    keyWord: "",
    searchArray: [],
  },
  methods: {
    enter_push() {
      if (true) {
        fetch(`${url}${keyWord.value}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            tbName,
            DBcolumn,
          }),
        })
          .then((resp) => resp.json())
          .then((resp) => (this.searchArray = resp));
      }
      console.log(key_resp.$data.searchArray);
    },
  },
});

// 取消 除非改寫法
// 綁定 Enter 送出 改用 Vue 送出請求 需套 Vue
// function enter_push(e) {
//   if (e.which == 13) {
//     fetch(`${url}${keyword_input.value}`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         tbName,
//         DBcolumn,
//       }),
//     })
//       // 取得資料.json() 轉換資料結構 (?
//       .then((resp) => resp.json())
//       // 資料放進 list
//       .then((table) => {
//         list.length = 0;
//         list.push({ ...table });
//         render(list); // 渲染
//       });
//   }
// }

// 渲染到畫面
// const list = []; // 空陣列
// function render(list) {
//   const tbody = document.querySelector("tbody"); // 綁定 tbody

//   tbody.innerHTML = ""; // 執行時先清空

//   // 針對物件使用 forEach
//   Object.values(list[0]).forEach((e) => {
//     const tr = document.createElement("tr"); // 產生 Tr

//     // 需增加動態產生 TD
//     tr.innerHTML = `
//     <tr v-for="info in newsArray">
//     <td>${e.DATE}</td>
//     <td><a href="./back_news_edit.html">${e.TITLE}</a></td>
//     <td>${e.INFO_TYPE}</td>
//     <td>已置頂</td>
//     <td>
//         <span class="icon_edit"><i class="fa-regular fa-pen-to-square"></i></span>
//         <span class="icon_del" @click="news_del(${e.INFO_ID})"><i class="fa-regular fa-trash-can"></i></span>
//     </td>
// </tr>
//    `;

//     const td = document.createElement("td"); // 產生 Td

//     tbody.append(tr); // tr 放進 tbody
//   });
// }
