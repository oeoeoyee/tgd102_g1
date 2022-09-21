// =============買票小計============

new Vue({
    el: '#login',
    data: {         //變數放這裡

        // 展覽名稱select
        exhibitions: ['請選擇展覽','普通常設展', '林布蘭·哈爾曼松', '奇怪殭屍展', '歷代皇帝展', '琺瑯瓷器展'],
        exhibitionChoose: '',

        // 展覽日期input
        date: '',

        // 團體票人數
        groups: ['請選擇', 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
        groupCount: '',

        // 成人票人數
        adults: ['請選擇', 1, 2, 3, 4, 5, 6, 7, 8, 9],
        adultCount: '',

        // 優待票人數
        services: ['請選擇', 1, 2, 3, 4, 5, 6, 7, 8, 9],
        serviceCount: '',

        // 兒童票人數
        childs: ['請選擇', 1, 2, 3, 4, 5, 6, 7, 8, 9],
        childCount: '',

        // 專人導覽
        tour: false,

        // 團體語音導覽
        pod: false,
    },
    methods:{  //函數 "大部分" 放這裡

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
                return ''
            }else{
                return adult
            }
        },

        // 優待人數陣列 disabled[0] 
        serviceplace(service, index){
            if(index == 0){
                return ''
            }else{
                return service
            }
        },

        // 兒童人數陣列 disabled[0] 
        childplace(child, index){
            if(index == 0){
                return ''
            }else{
                return child
            }
        },
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