
  let vm1 = new Vue({
    el:"#app",
    data:{
      id:"",
      title:"",
      start_day:"",
      summer:"",
      situation:"",
      summer_note_instance:null
    },
    mounted(){
      $('#summernote').summernote({
        placeholder: "編輯資訊",
        tabsize: 2,
        height: 200,
        // callbacks: {
        //   onChange: function(contents, $editable) {
        //     console.log('onChange:', contents, $editable);
        //   }
        // }
      });

      const self = this
      
      var markupStr ="";			
      // $(function () {
        $('#summernote').on('summernote.change',function(){
          markupStr = $('#summernote').summernote('code');
          self.summer = markupStr;
          console.log( self.summer);
           
        })
      // });	
      
      let that = this;
        let getUrlString = location.href;
        let url = new URL(getUrlString);
        let newsID = url.searchParams.get('id'); //抓id
        if(newsID !== null){
            fetch(`./php/back_newsletter_edit_select.php?id=`+newsID,{
                method: 'POST', 
                headers: {'Content-Type':'application/json'}, 
                body: JSON.stringify({
                ID: newsID,//這是幹嘛用的
                })
            })
            .then(resp => resp.json())
            .then((info)=>{
                that.id = info[0].ID;
                that.title =info[0].SUBJECT;
                that.start_day =info[0].MAIL_DAY;
                that.summer =info[0].CONTENT;
                that.situation =info[0].STATE;
                let e = $('.note-editable').html(self.summer);
                if(e !== ""){
                  $('.note-placeholder').css({"display":"none"});
                  
                }
                
            })
        };
    },
    methods:{

      sent(e){
        fetch('php/back_newsletter_edit.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ID:vm1.id,
                title:vm1.title,
                start_day:vm1.start_day,
                summer:vm1.summer,
                situation:vm1.situation,
            }),
        })
        // .then(resp => resp.json())
        .then(body => {
            if(body !=""){
            location = e
            alert("發送成功");
            }
        });
      },

      insert(e){
        markupStr = $('#summernote').summernote('code');
        vm1.summer = markupStr;
        if(e.target.innerHTML =="送出資料")
        {
            vm1.situation = "上線";
            this.sent("back_newsletter_list.html")

        }else{
            vm1.situation = "草稿";
            this.sent("back_newsletter_list.html")
            

        }    
    }
    },
  })

