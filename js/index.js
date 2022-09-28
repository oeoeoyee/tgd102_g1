// 首頁 特別展覽 GSAP JS
gsap.registerPlugin(ScrollTrigger);

let container = document.querySelector(".index_event_content");

let mm = gsap.matchMedia();

mm.add("(min-width: 500px)", () => {
    gsap.to(".index_event_content", {
        x: -2000,
        ease: "none",
        scrollTrigger: {
            trigger: ".index_event_content",
            start: "top 200",
            pin: true,
            scrub: 1,
            end: "bottom 300 ",
            // end: () => "+=" + container.offsetWidth,
        }
    });
});
mm.add("(max-width: 499px)", () => {
    gsap.to(".index_event_content", {
        x: -1100,
        ease: "none",
        scrollTrigger: {
            trigger: ".index_event_content",
            start: "top 150",
            pin: true,
            scrub: true,
            // end: "+=3000",
            end: () => "+=" + container.offsetWidth,
        }
    });
});

// 首頁 常設展覽 Initialize Swiper 
    let swiper = new Swiper(".swiper-container", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 40,
        pagination: {
        el: ".swiper-pagination",
        clickable: true,
        },
        autoplay: {
        delay: 2000,
        disableOnInteraction: false,
        },
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        },
    });

    // news頁 - 置頂的兩篇文章
// addEventListener('load', function(){
//     const top_title_top = document.querySelector("#news_top_title");
//     const top_date_top = document.querySelector("#news_top_date");
    
//     fetch("./php/news.php")
//         .then((resp) => resp.json())
//         // .then(resp) // 好像也可以?
//         .then((info) => {
//             (top_title_top.innerHTML = info[0].TITLE + `<span>&rarr;</span>`),
//             (top_date_top.innerHTML = info[0].DATE);
//         });
// })

// 最新消息VUE
let index_news_list = new Vue({
    el: '#index_news_list',
    data: {         //變數放這裡
        news:[
        
            // {TITLE: '518博物館日 期間限定優惠', CONTENT: '518國際博物館日 國際博物館日主旨在於達到文化交流，並增進多元族群間相互瞭解；而民眾也能透過展出藉以充實自己，培養終身學習理念。為慶祝2022博物館日，即日起至2022年12月31日，全票種價格調降50元，也將推出相關系列活動。', INFO_TYPE: '活動訊息', DATE:'2022-05-13'},
            // {TITLE: '新一季參觀須知及票價調整通知', CONTENT: '新一季常設展覽多出十九世紀主題，帶您遨遊在新藝術運動的世界。', INFO_TYPE: '館方訊息', DATE:'2022-04-20'},
            // {TITLE: '博物館振興券活動', CONTENT: '為鼓勵民眾看展，響應政府各類振興券齊發，本博物館同步推出回饋方案，凡來館現場購票使用五倍券或藝FUN券，可享「雙人看特展打九折」的超值優惠。', INFO_TYPE: '活動訊息', DATE:'2022-03-20'},
            {},
            
        ]
    },
    methods:{  //函數 "大部分" 放這裡
        checkText(theContent){
            return theContent.slice(0,25)
        },
            // ajax

    },
    mounted() {
        fetch("./php/index.php").then(res => res.json()).then(res => this.news = res);
    },
    computed: {  // 函數也可以放這裡但是放在這裡的函數 "不能傳參數，一定要有傳回值(return)"
    
    },
})