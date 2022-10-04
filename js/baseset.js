// rwd hamburger
$(function () {			
    $('.header_burger').click(function(){
        // console.log("aaa");
        $('.header_ul').toggleClass('header_out');
        $('.header_ul').toggleClass('header_in');
    })
});


// header 滾動視窗 導覽列收合
// console.log("aa");

// 加上 if 判斷有沒有 ID = app_totop 的再去綁定 scroll 事件 ( 除錯 )
if( document.getElementById('app_totop')){
  window.addEventListener("scroll", function(){
    let scroll_first = window.scrollY;
  
    window.addEventListener("scroll", function(){
        let scroll_second = window.scrollY;
        let header = document.getElementsByTagName("header")[0];
  
        if((scroll_first - scroll_second) < 0){
            header.classList.remove("-headdown");
            header.classList.add("-headup");
        }else{
            header.classList.remove("-headup");
            header.classList.add("-headdown");
        }
  
        scroll_first = scroll_second;
    });
  });
}



// vuevue 到頂的按鈕 
// $(function(){
//     let pageHeight = $(document.body).top
//     $('.totop').click(function(){
//         console.log("bbb");
//         console.log($(document.body).top);  
//         pageHeight = 0
//     })
//     console.log($(document.body).top);
// });

// vuevue 到頂的按鈕 
Vue.directive('scroll',{
    bind:function(el,binding){
      window.addEventListener('scroll',()=>{          
        let fnc = binding.value;
        fnc(el);
      })
    }
})

var totop_vm = new Vue({
    el: "#app_totop",
    data:{
      goTop: false,
      scrollTop: ""
    },
    methods:{        
      gotop: function(){          
        let speed = 10;
        let timer = setInterval(function(){            
          this.scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
          if(this.scrollTop>0){
            this.scrollTop = (this.scrollTop - speed >0) ? (this.scrollTop - speed) : 0;
            speed += 20;
            window.scrollTo(0,this.scrollTop);
          }else{
            clearInterval(timer);
          }
        },16)
      },
      showTop: function(){          
        // this.scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        this.scrollTop = window.pageYOffset;
        if(this.scrollTop>350){
            this.goTop = true;
        }else{
            this.goTop = false;
        }
      }

    }
});


// footer 訂閱電子報(insert email)
// 嘗試綁定 ( 除錯 )
try {
  const subButton = document.querySelector('#eletter_sub');
  subButton.addEventListener('click', function(e){
    let inputEmail = document.querySelector('#eletter_input');
    let reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
    let delVal = '';
    console.log(inputEmail.value);
    if(inputEmail.value !== '' && reg.test(inputEmail.value) === true){
      inputEmail.value = delVal;
      // fetch('./php/eletter_sub.php', {
      //   method: 'POST', 
      //   headers: {'Content-Type':'application/json'}, 
      //   body: JSON.stringify({
      //     email: inputEmail.value
      //   })
      // });
      alert("訂閱成功");
    }else{
      inputEmail.value = delVal;
      alert('請輸入正確EMail格式 ! ');
    }
  })
} catch (error) {}

// 
// curl "https://api.emailable.com/v1/verify?email=john@smith.com&api_key=your_api_key"
