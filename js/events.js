
let lists_n = [
    {
        name:"林布蘭·哈爾曼松特展",
        text:"林布蘭·哈爾曼松·范萊因是歐洲巴洛克繪畫藝術的代表畫家之一，被稱為荷蘭歷史上最偉大的畫家。",
        time:"2022.08.13  - 2023.01.31",
        img:"./images/events_01.png",
        room:"A",
        link:"./event_01.html",
    },
    {
        name:"梵谷·文森特展",
        text:"文森·威廉·梵谷，荷蘭後印象派畫家。作為表現主義的先驅，並深深影響了二十世紀藝術...",
        time:"2022.06.13 - 2022.12.31",
        img:"./images/events_02.png",
        room:"B",
    },
];

let lists_f = [
    {
        name:"弗雷德裏個展",
        text:"弗裏塞克擅長於描繪豐滿而優美的女性肖像，畫中人物往往出現於綠叢茂盛和鮮花繽紛的花園...",
        time:"2022.10.13 - 2023.12.13",
        img:"./images/events_03.png",
        room:"C",
    },
    {
        name:"印象派特展",
        text:"本展收攏世界各地知名印象派畫家作品，深入印象派的世界中...",
        time:"2022.11.13 - 2023.01.13",
        img:"./images/events_04.png",
        room:"E",
    },
];

let lists_p = [
    {
        name:"GUCCI百年特展",
        text:"走入Gucci《Archetypes 原典》展場間，宛若遊走在多元異想所串連起的Alessandro Michele私人宇宙！",
        time:"2022.05.13 -  2022.08.31",
        img:"./images/events_05.png",
        room:"D",
    },
    {
        name:"克勞德‧莫內特展",
        text:"奧斯卡-克勞德·莫內是印象派代表人物及創始人之一，「印象」一詞即是源自其名作《印象·日出》。",
        time:"2022.04.18 -  2022.07.22",
        img:"./images/events_06.png",
        room:"A",
    },
    {
        name:"YOHJI YAMAMOTO個展",
        text:"進入YOHJI YAMAMOTO的黑色哲學中，體會布料於空間所描繪的黑色詩意。",
        time:"2022.3.13 -  2022.06.29",
        img:"./images/events_07.png",
        room:"B",
    },
    {
        name:"YOHJI YAMAMOTO個展",
        text:"進入YOHJI YAMAMOTO的黑色哲學中，體會布料於空間所描繪的黑色詩意。",
        time:"2022.3.13 -  2022.06.29",
        img:"./images/events_07.png",
        room:"C",
    },
];



new Vue({
    el:"#app",
    data(){
        return{
        years:['全部年分',2022,2021,2020,2019,2018],
        lists1:lists_n,
        lists2:lists_f,
        lists3:lists_p,
        }
    },
    
      mounted() {
        fetch("../../XML_JSON_CSV/bookData.json").then(res => res.json()).then(res =>this.books= res)
        
      },
      
     methods:{
         waterfall(){
            let sum = 0;
            let events_btn = document.querySelector('.events_btn');
            events_btn.style.display = "none";
            let container = document.querySelector('.event_3');
            let str = `
            <div class="event_pass"  v-for="(item) in lists2.slice(0,1)">
            <div class="event_pass_img">
                <div>
                    <a href="#"><img :src='item.img' :alt="item.name"></a>
                </div>
            </div>
            <div class="infocard_m">
                <h3>{{item.name}}
                    <span>&rarr;</span>
                </h3>
                <h5>{{item.text}}</h5>
                <div></div>
                <h5>過往展覽</h5>
                <p>{{item.time}}</p>
            </div>
          </div></div>`;
            for (let i = 0; i < 3; i++) {
                sum+=1
                container.insertAdjacentHTML('beforeend', str)
            }
            
            window.addEventListener('scroll', addDemo);
            
            function addDemo() {
                if(sum < 10){
                if (window.pageYOffset + window.innerHeight + 200 < document.documentElement.offsetHeight) return; 
                    
                for (let i = 0; i < 3; i++) {
                    sum+=1
                    container.insertAdjacentHTML('beforeend', str)
                }
                }
            }
            
        }

     },
      


  });

  


  
//   let container = document.querySelector('footer');
//   let str = `<div class="event_pass"  >
//   <div class="event_pass_img">
//       <div>
//           <a href="#"><img :src='item.img' :alt="item.name"></a>
//       </div>
//   </div>
//   <div class="infocard_m">
//       <h3>{{item.name}}
//           <span>&rarr;</span>
//       </h3>
//       <h5>{{item.text}}</h5>
//       <div></div>
//       <h5>過往展覽</h5>
//       <p>{{item.time}}</p>
//   </div>
// </div></div>`;
  
//   window.addEventListener('scroll', addDemo);
  
//   function addDemo() {
//       /* 不是底部則跳出函式 */
//       if (window.pageYOffset + window.innerHeight < document.documentElement.offsetHeight) return; 
  
//       for (let i = 0; i < 5; i++) {
//           container.insertAdjacentHTML('beforebegin', str)
//       }
//   }


//  gsap -------------------------------------------------

 // console.log(document.body.scrollWidth);
 gsap.to(['.event_0 h1','.event_0 div'], {
    keyframes: [
        { duration: 0, clipPath: 'inset(0rem 120rem 0rem 0rem)', ease: "sine.inOut", },
        { duration: 1.5, clipPath: 'inset(0rem 0rem 0rem 0rem)', ease: "sine.inOut", },
    ]
});

gsap.to(['.event_now_top h2','.event_now_top .event_left_line'], {
    keyframes: [
        { duration: 0, clipPath: 'inset(0rem 0rem 0rem 30rem)', ease: "sine.inOut", },
        { duration: 1.5, clipPath: 'inset(0rem 0rem 0rem 0rem)', ease: "sine.inOut", },
    ]
});
    gsap.to('.gsap_animation_1 img', {
        keyframes: [
            { duration: 0, clipPath: 'inset(0rem 27rem 0rem 0rem)'},
            { duration: 1.5, clipPath: 'inset(0rem 0rem 0rem 0rem)',ease: "sine.inOut" },
            

        ]
    });
    gsap.to(['.gsap_animation_1 h4','.gsap_animation_1 h5'], {
        keyframes: [
            {duration: 0, opacity:0},
            { duration: .5, x:60,opacity:0 },
            { duration: .7, x:0, opacity:1,ease: "sine.inOut"},
        ]

    });
    gsap.to('.gsap_animation_1 .event_title_c', {
        
        keyframes: [
            {duration: 0, opacity:0},
            { duration: .5, y:60, opacity:0, },
            { duration: .7 ,y:0, opacity:1,ease: "sine.inOut"},
        ]

    });


gsap.registerPlugin(ScrollTrigger);

// $(this).resize(function(){


if(document.body.scrollWidth > 900){
    // gsap_animation_x(".gsap_animation_1",['.gsap_animation_1 h4','.gsap_animation_1 h5']);
    // gsap_animation_y(".gsap_animation_1",'.gsap_animation_1 .event_title_c');
    // gsap_animation_path(".gsap_animation_1",".gsap_animation_1 img");



gsap_animation_path(".gsap_animation_2",".gsap_animation_2 img");
gsap_animation_x(".gsap_animation_2",['.gsap_animation_2 h4','.gsap_animation_2 h5']);
gsap_animation_y(".gsap_animation_2",'.gsap_animation_2 .event_title_c');
function gsap_animation_path(t,x){
    gsap
    .timeline({
        scrollTrigger: {
        trigger: t,
        start: "-=500",
        end:"-=500",
        scrub:3.0,
        },
    })
    
    
    .fromTo((x), {
        clipPath: 'inset(2rem 27rem 3rem 0rem)'
    },{
        duration: 2,
        ease: "sine.inOut",
        clipPath: 'inset(0rem 0rem 0rem 0rem)'
    })
};//function

function gsap_animation_x(t,x){
    gsap
    .timeline({
        scrollTrigger: {
        trigger: t,
        start: "-=500",
        end:"-=500",
        scrub:3.0,
        },
    })

    .fromTo(x,{
        x:60,
        opacity:0
    },{
        x:0,
        opacity:1,
        duration: 2,
        ease: "sine.inOut",
    })

};
function gsap_animation_y(t,x){
    gsap
    .timeline({
        scrollTrigger: {
        trigger: t,
        start: "-=500",
        end:"-=500",
        scrub:3.0,
        },
    })

    .fromTo(x,{
        y:60,
        opacity:0
    },{
        y:0,
        opacity:1,
        duration: 2,
        ease: "sine.inOut",
    })
};
    }