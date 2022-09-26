// 搜尋功能
const url = "./php/back_All_Search.php?keywords=";
const keyword_input = document.querySelector(".back_search"); // 綁定搜尋欄位的 input

const list = []; // 空陣列

// 綁定 input 事件 fetch 資料 render 到 table 的 "tbody" 中
keyword_input.addEventListener("keyup", (e) => {
  enter_push(e);
});

// 綁定 Enter 送出
function enter_push(e) {
  if (e.which == 13) {
    fetch(`${url}${keyword_input.value}`)
      // 取得資料.json() 轉換資料結構 (?
      .then((resp) => resp.json())
      // 資料放進 list 
      .then((table) => {
        list.length = 0;
        list.push({ ...table });
        render(list); // 渲染
      });
  }
}

// 渲染到畫面
function render(list) {
  const tbody = document.querySelector("tbody"); // 綁定 tbody

  tbody.innerHTML = ""; // 執行時先清空

  // 針對物件使用 forEach
  Object.values(list[0]).forEach((e) => {
    const tr = document.createElement("tr"); // 產生 Tr
    tr.innerHTML = `
     <tr>
      <td>${e.DATE}</td>
      <td>
        <a href="./back_news_edit.html">${e.TITLE}</a>
      </td>
      <td>${e.INFO_TYPE}</td>
      <td>${"NONE"}</td>
      <td>
        <span class="icon_edit">
          <i class="fa-regular fa-pen-to-square"></i>
        </span>
        <span class="icon_del">
          <i class="fa-regular fa-trash-can"></i>
        </span>
      </td>
    </tr>
    `;
    tbody.append(tr); // tr 放進 tbody
  });
}
