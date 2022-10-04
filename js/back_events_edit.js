new Vue({
    el:"#app",
    data:{
        ID:"",
        eng_title:"",
        title:"",
        date:"",
        start_day:"",
        end_day:"",
        room:"",
        room_select: [
            "選擇展廳",
             "A",
             "B",
             "C",
             "D",
             "E",
        ],
        main_img:"2張圖片",
        main_content:"",
        events_img:"2張圖片",
        events_title:"",
        events_content:"",
        artist_title:"",
        artist_img:"",
        artist_content:"",
        pj_title1:"",
        pj_img1:"",
        pj_content1:"",
        pj_title2:"",
        pj_img2:"",
        pj_content2:"",
        pj_title3:"",
        pj_img3:"",
        pj_content3:"",
        situation:"",

    },
    mounted(){
        let that = this;
        let getUrlString = location.href;
        let url = new URL(getUrlString);
        let newsID = url.searchParams.get('id'); //抓id
        if(newsID !== null){
            fetch(`./php/back_events_edit_select.php?id=`+newsID,{
                method: 'POST', 
                headers: {'Content-Type':'application/json'}, 
                body: JSON.stringify({
                ID: newsID,//這是幹嘛用的
                })
            })
            .then(resp => resp.json())
            .then((info)=>{
                that.ID = info[0].ID,
                that.eng_title = info[0].eng_title,
                that.title = info[0].title,
                that.start_day = info[0].start_day,
                that.end_day = info[0].end_day,
                that.room = info[0].room,
                that.main_img = info[0].main_img,
                that.main_content = info[0].main_content,
                that.events_img = info[0].events_img,
                that.events_title = info[0].events_title,
                that.events_content = info[0].events_content,
                that.artist_img = info[0].artist_img,
                that.artist_title = info[0].artist_title,
                that.artist_content = info[0].artist_content,
                that.pj_title1 = info[0].pj_title1,
                that.pj_img1 = info[0].pj_img1,
                that.pj_content1 = info[0].pj_content1,
                that.pj_title2 = info[0].pj_title2,
                that.pj_img2 = info[0].pj_img2,
                that.pj_content2 = info[0].pj_content2,
                that.pj_title3 = info[0].pj_title3,
                that.pj_img3 = info[0].pj_img3,
                that.pj_content3 = info[0].pj_content3,
                that.situation =info[0].situation
            })
        };
    },
    methods:{
        select1(){
            this.room = document.getElementById("type").value;
        },
        getFiles1(e){
            this.main_img = e.target.files[0].name +'|'+ e.target.files[1].name;
        },
        getFiles2(e){
            this.events_img = e.target.files[0].name +'|'+ e.target.files[1].name;
        },
        getFiles3(e){
            this.artist_img = e.target.files[0].name 
        },
        getFiles4(e){
            this.pj_img1 = e.target.files[0].name 
        },
        getFiles5(e){
            this.pj_img2 = e.target.files[0].name 
        },
        getFiles6(e){
            this.pj_img3 = e.target.files[0].name 
        },
        change_date(){
            var re = /-/gi
            this.date = this.start_day.replace(re,".")  +'\b - \b' + this.end_day.replace(re,".")
        },
        sent(e){
            fetch('php/back_events.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ID:this.ID,
                    eng_title: this.eng_title,
                    title: this.title,
                    start_day: this.start_day,
                    end_day: this.end_day,
                    room: this.room,
                    main_img: this.main_img,
                    main_content: this.main_content,
                    events_img: this.events_img,
                    events_title: this.events_title,
                    events_content: this.events_content,
                    artist_img: this.artist_img,
                    artist_title: this.artist_title,
                    artist_content: this.artist_content,
                    pj_title1: this.pj_title1,
                    pj_img1: this.pj_img1,
                    pj_content1: this.pj_content1,
                    pj_title2: this.pj_title2,
                    pj_img2: this.pj_img2,
                    pj_content2: this.pj_content2,
                    pj_title3: this.pj_title3,
                    pj_img3: this.pj_img3,
                    pj_content3: this.pj_content3,
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
                this.sent("./back_events.html")
            }else{
                this.situation = "草稿";
                this.sent("./back_events_draft.html")
            }
            
        }
    },


}) 