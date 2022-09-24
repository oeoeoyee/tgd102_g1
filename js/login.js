// ===========燈箱=============
// 燈箱
$('.lightbox_ck').click(function(){
    $('.js_lightbox').toggle()
})

// 再想想
$('.think_btn').click(function(){
    $('.-none').toggle()
})


// =============買票小計============
new Vue({
    el: '#login',
    data: {         //變數放這裡

        // 閱讀購買須知
        check_note: false,

        // 展覽名稱select
        exhibitions: ['請選擇展覽', '普通常設展', '林布蘭·哈爾曼松', '奇怪殭屍展', '歷代皇帝展', '琺瑯瓷器展'],
        exhibitionChoose: '',

        // 展覽日期input
        date: '',

        // 團體票人數
        groups: ['請選擇', 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
        groupCount: '',

        // 成人票人數
        adults: ['請選擇', 1, 2, 3, 4, 5, 6, 7, 8, 9],
        adultCount: 0,

        // 優待票人數
        services: ['請選擇', 1, 2, 3, 4, 5, 6, 7, 8, 9],
        serviceCount: 0,

        // 兒童票人數
        childs: ['請選擇', 1, 2, 3, 4, 5, 6, 7, 8, 9],
        childCount: 0,

        // 專人導覽
        tour: false,

        // 團體語音導覽
        pod: false,

        // 名字
        name: '',

        // 電話
        phone: '',

        // 付款方式
        pay: '',
    },
    methods:{  //函數 "大部分" 放這裡
        
        // 同意購買須知 
        change_function(){
            if(this.check_note === false){
                return false
            }else{
                return true
            }
        },

        // 團體付款按鈕
        submit(){

            // 展覽沒選
            if(this.exhibitionChoose === ''){
                alert('展覽沒選')
                return false
            }

            // 日期沒選
            if(this.date === ''){
                alert('日期沒選')
                return false
            }

            // 團體票人數沒選
            if(this.groupCount === ''){
                alert('團體人數沒選')
                return false
            }

            // 購買須知沒勾
            if(this.check_note === false){
                alert('購票須知沒勾')
                return false
                
            }

            alert('成功');


            // ajax
            fetch('../php/order.php',{
                methods: 'POST',
                headers: { 'Content-Type' : 'application/json' },
                body: JSON.stringify({
                    // 變數: this.v-model名
                    exhibition: this.exhibitionChoose,
                    date: this.date,
                    name: this.name,
                    phone: this.phone,
                    group: this.groupCount,
                    ticket: this.ticket,
                    pod: this.pod,
                    tour: this.tour,
                    pay: this.pay,
                    total: this.total,
                })
            })
            

        },

        // 一般付款按鈕
        submitperson(){

            // 展覽沒選
            if(this.exhibitionChoose === ''){
                alert('展覽沒選')
                return false
            }

            // 日期沒選
            if(this.date === ''){
                alert('日期沒選')
                return false
            }

            // 一般票人數沒選
            if(this.adultCount + this.serviceCount + this.childCount === ''){
                alert('人數沒選')
                return false
            }

            // 購買須知沒勾
            if(this.check_note === false){
                alert('購票須知沒勾')
                return false
            }

            alert('成功');
        },

        // placeholder效果
        yesno(index){
            if(index == 0){
                return true
            }else{
                return false
            }
        },

        // 展覽陣列 disabled[0] 
        exhiplace(exhibition,index){
            if(index == 0){
                return ''
            }else{
                return exhibition
            }
        },

        // 團體人數陣列 disabled[0] 
        groupplace(group, index){
            if(index == 0){
                return ''
            }else{
                return group
            }
        },

        // 成人人數陣列 disabled[0] 
        adultplace(adult, index){
            if(index == 0){
                return 0
            }else{
                return adult
            }
        },

        // 優待人數陣列 disabled[0] 
        serviceplace(service, index){
            if(index == 0){
                return 0
            }else{
                return service
            }
        },

        // 兒童人數陣列 disabled[0] 
        childplace(child, index){
            if(index == 0){
                return 0
            }else{
                return child
            }
        },
    },
    mounted() {
        
    },
    computed: {  // 函數也可以放這裡但是放在這裡的函數 "不能傳參數，一定要有傳回值(return)"
        
        // 團體票總金額
        ticket(){
            // console.log(group);
            return this.groupCount * 200
        },

        // 成人票總金額
        adultticket(){
            return this.adultCount * 250
        },

        // 優待票總金額
        serviceticket(){
            return this.serviceCount * 150
        },

        // 兒童票總金額
        childticket(){
            return this.childCount * 100
        },
        
        // 票 + 導覽總金額
        total(){
            return (this.groupCount * 200) + (this.adultCount * 250) + (this.serviceCount * 150) + (this.childCount * 100) + this.tours
        },

        // 導覽金額回傳
        tours(){
            if(this.tour == true){
                return 500
            }else{
                return 0
            }
        },

        // 團體語音人數回傳
        pods(){
            if(this.pod == true){
                return this.groupCount
            }else{
                return 0
            }
        },

        // 個人語音人數回傳
        personpods(){
            if(this.pod == true){
                return this.adultCount + this.serviceCount + this.childCount
            }else{
                return 0
            }
        },
    },
    
})


// =========註冊驗證===========
    // 姓名不為空
    $("#name").keyup(function () {
        if ($(this).val() == "") {
            $(".name .error").html("姓名不能空白");
        } else $(".name .error").html("");
    });

    // $(function(){
    //     $('#name').blur(function(){
    //         let name = $(this).val();
    //         let reg = /^[^\s]*$/;
    //         if(reg.test(name)){
    //             $('.name .error').html('');
    //         }else{
    //             $('.name .error').html('姓名不能空白');
    //         }
    //     });
    // });

    // email不為空 + 驗證
    $(function(){
        $('#email').blur(function(){
            let email = $(this).val();
            let reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
            if(reg.test(email)){
                $('.email .error').html('');
            }else{
                $('.email .error').html('請輸入正確的email地址');
            }
        });
    });

    // 手機驗證
    $(function(){
        $('#phone').blur(function(){
            let phone = $(this).val();
            let reg = /^09[0-9]{8}$/;
            if(reg.test(phone)){
                $('.phone .error').html('');
            }else{
                $('.phone .error').html('請輸入正確的電話號碼');
            }
        });
    });

    // 密碼驗證(6-12字 英數混和)
    $(function(){
        $('#pwd').blur(function(){
            let pwd = $(this).val();
            let reg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,12}$/;
            if(reg.test(pwd)){
                $('.pwd .error').html('');
            }else{
                $('.pwd .error').html('請輸入正確的密碼格式');
            }
        });
    });

    // 確認密碼
    function check_password() {
        if ($("#pwd").val() != $("#pwdcomfirm").val()){
            $('.pwdcomfirm .error').html('密碼不相同');
        }else{
            $('.pwdcomfirm .error').html('');
        }
    }

    // 送出驗證
    $(".signin_out").submit(function (e) {
        let error_msg = "";

        // 停止預設行為
        e.preventDefault();

        // 姓名不為空
        if ($("#name").val() == "") {
            error_msg = error_msg + "姓名、";
        }
        // if (!($("#name").val())) {
        //     error_msg = error_msg + "姓名、";
        // }

        // 信箱 反轉false送出錯誤警告
        if (!($("#email").val())) {
            error_msg = error_msg + "Email錯誤、";
        }

        // 手機 反轉false送出錯誤警告
        if (!($("#phone").val())) {
            error_msg = error_msg + "電話錯誤、";
        }

        // 密碼 反轉false送出錯誤警告
        if (!($("#pwd").val())) {
            error_msg = error_msg + "密碼錯誤";
        }

        // 無誤後送出
        if (error_msg == "") {
            alert("資料成功送出");
        } else {
            $("#error").html(error_msg + "，請再次確認");
        }
    });

// ========登入驗證=========

// 登入驗證
$(".login_out").submit(function (e) {
    let error_msg = "";

    // 停止預設行為
    e.preventDefault();

    // 信箱 反轉false送出錯誤警告
    if (!($("#email").val())) {
        error_msg = error_msg + "Email錯誤、";
    }

    // 密碼 反轉false送出錯誤警告
    if (!($("#pwd").val())) {
        error_msg = error_msg + "密碼錯誤";
    }

    // 無誤後送出
    if (error_msg == "") {
        alert("資料成功送出");
    } else {
        $("#error").html(error_msg + "，請再次確認");
    }
});


