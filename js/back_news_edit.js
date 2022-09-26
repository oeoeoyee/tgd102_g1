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

    },
    mounted(){
       
    },
    updated(){
        console.log(this.title);
        console.log(this.time);
        console.log(this.time);

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
                this.sent("./back_news_draft.html")
            }else{
                this.situation = "草稿";
                this.sent("./back_news.html")
            }    
        }
        
    },
})