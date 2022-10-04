new Vue({
    el:"#app",
    data:{
        id:"",
       name:"",
       types:[
        "請選擇主題",
        '十八世紀',
        '十九世紀',
       ],
       exhibition_type:"",
       start_day:"",
       end_day:"",
       main_title:"",
       room:"",
       room_select: [
        "選擇展廳",
         "A",
         "B",
         "C",
         "D",
         "E",
         "F",
         "G",
         "H",
         "I",
    ],
       introduction:'',
       main_img:"",
       sub_img:"",
       other_img:"",
       
       img3:"",
       img4:"",
       img5:"",
       img6:"",
       img7:"",
       situation:"",

    },
    mounted(){
        let that = this;
        let getUrlString = location.href;
        let url = new URL(getUrlString);
        let newsID = url.searchParams.get('id'); //抓id
        if(newsID !== null){
            fetch(`./php/back_exhibition_edit_select.php?id=`+newsID,{
                method: 'POST', 
                headers: {'Content-Type':'application/json'}, 
                body: JSON.stringify({
                ID: newsID,//這是幹嘛用的
                })
            })
            .then(resp => resp.json())
            .then((info)=>{
                console.log(info[0]);
                that.id = info[0].ID,
                that.name =  info[0].NAME,
                that.exhibition_type =  info[0].EXHIBITION_TYPE,
                that.start_day =  info[0].START_DAY,
                that.end_day =  info[0].END_DAY,
                that.main_title =  info[0].MAIN_TITLE,
                that.room =  info[0].ROOM,
                that.introduction =  info[0].INTRODUCTION,
                that.main_img =  info[0].MAIN_IMAGE,
                that.sub_img =  info[0].SUB_IMAGE,
                that.other_img =  info[0].OTHER_IMAGE,
                that.situation = info[0].situation,
                imgstation2 = that.other_img.split("|"),
                that.img3= imgstation2[0];
                that.img4= imgstation2[1];
                that.img5= imgstation2[2];
                that.img6= imgstation2[3];
                that.img7= imgstation2[4];
                document.getElementById("type").value = that.exhibition_type;
                document.getElementById("room").value = that.room;
            })
        };
    },
    updated(){
    },
    computed:{
    },
    methods:{
        mixImg(){
            this.other_img = 
            this.img3 + "|" +
            this.img4 + "|" +
            this.img5 + "|" +
            this.img6 + "|" +
            this.img7 
        },
        
        getFiles1(e){
            this.main_img =  e.target.files[0].name +'|'+ e.target.files[1].name +'|'+ e.target.files[2].name;
            console.log(this.main_img);
        },
        getFiles2(e){
             this.sub_img =  e.target.files[0].name;
        },
        getFiles3(e){
             this.img3 =  e.target.files[0].name;
             this.mixImg();
        },
        getFiles4(e){
             this.img4 =  e.target.files[0].name;
             this.mixImg();
        },
        getFiles5(e){
            this.img5 =  e.target.files[0].name;
            this.mixImg();
        },
        getFiles6(e){
            this.img6 =  e.target.files[0].name;
            this.mixImg();
        },
        getFiles7(e){
            this.img7 =  e.target.files[0].name;
            this.mixImg();
        },
        select1(){
            this.exhibition_type = document.getElementById("type").value;
        },
        select2(){
            return this.room = document.getElementById("room").value;    
        },
        sent(e){
                fetch('php/bac_exhibition_edit.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        ID:this.id,
                        NAME: this.name,
                        EXHIBITION_TYPE: this.exhibition_type,
                        START_DAY: this.start_day,
                        END_DAY: this.end_day,
                        MAIN_TITLE: this.main_title,
                        ROOM: this.room,
                        INTRODUCTION: this.introduction,
                        MAIN_IMAGE: this.main_img,
                        SUB_IMAGE: this.sub_img,
                        OTHER_IMAGE: this.other_img,
                        situation:this.situation,
                    }),
                })
                // .then(resp => resp.json())
                .then(body => {
                    console.log(body);
                    if(body !=""){
                    location = e
                    alert("發送成功");
                    }
                });
        },
        insert(e){
            if(e.target.innerHTML =="送出資料")
            {
                this.situation = "上線";
                this.sent("./back_exhibition.html")
            }else{
                this.situation = "草稿";
                this.sent("./back_exhibition_draft.html")
            }    
        }
        
        
        
    },
})