new Vue({
    el:"#app",
    data:{
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

       



    },
    mounted(){
       
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
             this.main_img =  e.target.files[0].name +'|'+ e.target.files[1].name;
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
        
        
        insert(){
            fetch('php/bac_exhibition_edit.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
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
                }),
            })
            // .then(resp => resp.json())
            .then(body => {
                console.log(body);
                if(body !=""){
                location = "./back_exhibition.html"
                alert("發送成功");
                }
            });
        }
        
    },
})