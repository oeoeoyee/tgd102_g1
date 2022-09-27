$('#summernote').summernote({
  placeholder: "編輯資訊",
  tabsize: 2,
  height: 200,
});

var markupStr ="";			
$(function () {
  $('#summernote').change(function(){
    //  markupStr = $('#summernote').summernote('code');
     console.log(markupStr);
  })
});	



  let vm1 = new Vue({
    el:"#app",
    data:{
      title:"",
      start_day:"",
      summer:"",
      situation:"",
    },
    mounted(){
      
    },
    methods:{

       },
  })

  let vm2 = new Vue({
    el:"#app2",
    data:{},
    methods:{

      sent(e){
        fetch('php/back_newsletter_edit.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title:vm1.title,
                start_day:vm1.start_day,
                summer:vm1.summer,
                situation:vm1.situation,
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