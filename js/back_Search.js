// 搜尋功能
const url = "./php/back_All_Search.php?keywords=";
const keyword_input = document.querySelector(".back_search"); // 綁定搜尋欄位的 input

// 沒設定 data- 的頁面會報錯!!!  之後問老師  低優先度

// 此 Vue ID 綁在 app_backTable 的欄位
const table_vue = new Vue({
  el: "#app_backTable",
  data: {
    tbArray: [],
    subList: [],
    tbName:''
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

    thisOrderID(e) {
      console.log(e.ORDER_ID);
      sessionStorage.setItem("ORDER_ID", e.ORDER_ID);
    },
    thisMemberID(e) {
      console.log(e.MEMBER_ID);
      sessionStorage.setItem("MEMBER_ID", e.MEMBER_ID);
    },

    emailGo(title, email, content) {
      console.log(1234);
      const that = this
      emailjs.init("DCwlXSLOdGqGTForu");
      const serviceID = "service_95kv0br";
      const templateID = "template_kb00bdg";
      var templateParams = {
        title: title,
        // to_name: user,
        email: email,
        message: content,
      };
      emailjs.send(serviceID, templateID, templateParams).then(
        function (response) {
          that.tbArray[t].STATE = "已發送"; //想辦法送給資料庫修改
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
    },

    update_email(){
      let that;
      const now = new Date();
      const nowDate = now.toISOString().split("T")[0];
      let t = 0;
      console.log(this.tbName);
      if ((this.tbName == "NEWSLETTER_LIST")) {
        // fetch("./php/sentEmail.php")
        //       .then(e => e.json())
        //       .then(list => {
        //         for (let item of list) {
        //           that.subList.push(item);
        //         }
        //       });
        console.log(this.tbArray);
        for (let i = 0; i < this.tbArray.length; i++) {
          // t += 1;

          console.log(nowDate == this.tbArray[i].MAIL_DAY &&
            this.tbArray[i].STATE == "上線");
            console.log(nowDate == this.tbArray[i].MAIL_DAY);
            console.log(this.tbArray[i].STATE == "上線");
            console.log(this.tbArray[i].STATE);

          if (
            nowDate == this.tbArray[i].MAIL_DAY &&
            this.tbArray[i].STATE == "上線"
          ) {
            console.log(123);
            console.log( 'array',this.tbArray);
            // console.log(123);
            // console.log(this.subList);
            let emailInfo = this.tbArray[i]; //兩筆資料
  
            console.log('info',emailInfo);
  
            this.subList.forEach((userInfo) => {
              // console.log(userInfo);//3個人名
              // console.log(emailInfo.SUBJECT);
              // console.log(emailInfo.CONTENT);
              // console.log(userInfo.NAME);
              console.log('email',userInfo.EMAIL);
              console.log('SUBJECT',emailInfo.SUBJECT);
              console.log('CONTENT', emailInfo.CONTENT);
              
              this.emailGo(emailInfo.SUBJECT, userInfo.EMAIL, emailInfo.CONTENT);
              // console.log();
            });
            emailInfo.STATE = "已發送";
            fetch("php/back_newsletter_edit.php", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                ID: emailInfo.ID,
                title: emailInfo.SUBJECT,
                start_day: emailInfo.MAIL_DAY,
                summer: emailInfo.CONTENT,
                situation: emailInfo.STATE,
              }),
            })
              .then((resp) => resp.json())
              .then((info) => {
                console.log(info);
              });
            //更新狀態成已發送
            // emailGo (q.SUBJECT,w.Name,w.EMAIL,q.CONTENT)
            // 取得會員資料(v subList)->把資料裝進信件->寄信(newsletter修改、member)->更改資料庫狀態成已發送
          }
        }
      }
    }
  },
  mounted: function () {
    let that = this;
    const api = "./php/back_All_Search.php"; // 要從哪裡得到資料

    // 取 table 的自訂屬性的值
    if (document.querySelector("table")) {
      try {
        const tbName = document.querySelector("table").dataset.tbname;

        that.tbName = tbName

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
          .then((resp) => (that.tbArray = resp));

        const now = new Date();
        const nowDate = now.toISOString().split("T")[0];
        let t = 0;
        console.log(that.tbName);
        if ((that.tbName = "NEWSLETTER_LIST")) {
          fetch("./php/sentEmail.php")
            .then((e) => e.json())
            .then((list) => {
              for (let item of list) {
                // console.log('asd');
                that.subList.push(item);
              }
              this.update_email()
            });
        }
      } catch (error) {
        console.log(error);
      }
    }
  },

  updated() {
    
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
          .then((resp) => (this.tbArray = resp));
      }
    },
  },
});
