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


