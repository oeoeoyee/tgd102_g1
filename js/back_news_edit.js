new Vue({
    el:"#app",
    data:{
        title:"",
        theDate: "",
        image:"",
        content:"",
        announcement:'',
        top:"",
        situation:"",
        info_id:"",

    },
    mounted(){
        let that = this;
        var getUrlString = location.href;
        var url = new URL(getUrlString);
        var newsID = url.searchParams.get('id'); //抓id
        if(newsID !== null){
            fetch(`./php/back_news_edit_select.php?id=`+newsID,{
                method: 'POST', 
                headers: {'Content-Type':'application/json'}, 
                body: JSON.stringify({
                ID: newsID,//這是幹嘛用的
                })
            })
            .then(resp => resp.json())
            .then((info)=>{
                console.log(info[0]);
                that.title =info[0].TITLE;
                that.theDate =info[0].DATE;
                that.image =info[0].IMAGE;
                that.content =info[0].CONTENT;
                that.announcement =info[0].INFO_TYPE;
                that.top =info[0].TOP;
                that.situation =info[0].SITUATION;
                that.info_id = info[0].INFO_ID;
                
            })
        };
        
    },
    updated(){
        // console.log(this.title);
        // console.log(this.time);
        // console.log(this.time);

    },
    methods:{
        getFiles(e){
            console.log( e.target.files[0].name);
            return this.image =  e.target.files[0].name;
        },
        sent(e){
            fetch('php/back_news_edit.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    INFO_ID:this.info_id,
                    TITLE: this.title,
                    DATE: this.theDate,
                    IMAGE: this.image,
                    CONTENT: this.content,
                    INFO_TYPE: this.announcement,
                    TOP: this.top,
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
                this.sent("./back_news.html")
            }else{
                this.situation = "草稿";
                this.sent("./back_news_draft.html")
            } 
        }
        
    },
})

