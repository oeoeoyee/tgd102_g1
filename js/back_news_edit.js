new Vue({
    el:"#app",
    data:{
        title:"",
        theDate: "",
        image:"",
        content:"",
        announcement:'',
        top:"",
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
        insert(){
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
                }),
            })
            .then(resp => resp.json())
            .then(body => {
                console.log(body);
                if(body !=""){
                location = "inex.html"
                alert("發送成功");
                }
            });
        
        }
        
    },
})