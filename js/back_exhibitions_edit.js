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
       
       img1:"",
       img2:"",
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
    methods:{
        getFiles1(e){
            return this.img1 =  e.target.files[0].name +'|'+ e.target.files[1].name;
        },
        getFiles2(e){
            return this.img2 =  e.target.files[0].name;
        },
        getFiles3(e){
            return this.img3 =  e.target.files[0].name;
        },
        getFiles4(e){
            return this.img4 =  e.target.files[0].name;
        },
        getFiles5(e){
            return this.img5 =  e.target.files[0].name;
        },
        getFiles6(e){
            return this.img6 =  e.target.files[0].name;
        },
        getFiles7(e){
            return this.img7 =  e.target.files[0].name;
        },
        select1(){
            return this.exhibition_type = document.getElementById("type").value;
            // return this.exhibition_type = selected;
            
        },
        select2(){
            return this.room = document.getElementById("room").value;
            // return this.room = selected;
        }
        // insert(){
        //     fetch('php/back_news_edit.php', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify({
        //             TITLE: this.title,
        //             DATE: this.theDate,
        //             IMAGE: this.image,
        //             CONTENT: this.content,
        //             INFO_TYPE: this.announcement,
        //             TOP: this.top,
        //         }),
        //     })
        //     .then(resp => resp.json())
        //     .then(body => {
        //         console.log(body);
        //         if(body !=""){
        //         location = "inex.html"
        //         alert("發送成功");
        //         }
        //     });
        // }
        
    },
})