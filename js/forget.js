//輸入email > ajax抓資料 > 是否有符合的mail 有的話送出驗證碼 > 驗證碼符合 > 修改密碼 > ajax修改
new Vue ({
    el:"#app_forget",
    data:{
        email:"",
        sentEmail:"無此信箱",
        password:"",
        newpassword:"",
        reNewpassword:"",
        Vcode:"",
        Num:"",
        message1:"",
        message2:"",
        isDisabl:false,

    },
    mounted(){
         const that = this;
        //  console.log(this.sentEmail);
        //  console.log(this.newpassword);
         for(var i=0;i<6;i++){
            that.Num += Math.floor(Math.random()*10).toString();
        };
    },
    methods:{
        emailConfirm(){
            // alert("驗證信已送出");
            fetch(`./php/forget.php`,{
                method: 'POST', 
                headers: {'Content-Type':'application/json'}, 
                body: JSON.stringify({
                    email :this.email,
                    newpassword:"",
                })
            })
            .then(e => e.json())
            .then(list=>{
                // console.log(list[0].EMAIL);
                console.log(this);
                this.sentEmail = list[0].EMAIL;
                console.log(this);
                // console.log(list[0].EMAIL);
                for(var i=0;i<6;i++){
                    this.Num += Math.floor(Math.random()*10).toString();
                console.log(this);

                };
                this.emailGo();
                console.log(this);

            })
        },
        correct(){
            if(that.Vcode == that.Num){
                if( that.message2 =='' && that.message1 ==''){
                    fetch(`./php/forget.php`,{
                        method: 'POST', 
                        headers: {'Content-Type':'application/json'}, 
                        body: JSON.stringify({
                            email :this.email,
                            newpassword:this.newpassword,
                        }),
                    }).then(
                        alert("修改成功"),
                        location ="./login.html"
                    )
                }else{
                    alert("請輸入有效密碼")
                }
            }else{
                alert("驗證碼錯誤")
            }
            // that.message2 =='' && that.message1 ==''
        },
        emailGo() {
            // console.log(1234);
            emailjs.init("DCwlXSLOdGqGTForu");
            const serviceID = "service_95kv0br";
            const templateID = "template_kb00bdg";
            const templateParams = {
              email: this.sentEmail,
              message: this.Num,
            };
            emailjs.send(serviceID, templateID, templateParams).then(
              function (response) {
                this.isDisabl = true;
                alert("驗證信已送出");
                // console.log("SUCCESS!", response.status, response.text);
              },
              function (error) {
                // console.log("FAILED...", error);
              }
            );
          },
    check_password1(){
        let reg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,12}$/;
        if(reg.test(that.newpassword)){
            that.message1 ='';
        }else{
            that.message1 ='請輸入正確的密碼格式';
        }
    },
          // 確認密碼
     check_password2() {
        if(that.newpassword !== that.reNewpassword){
            // console.log(1234);
            that.message2 ='密碼不相同';
        }else{
            that.message2 ='';
        }
    },
    }
})