new Vue({
    el:"#app",
    data:{
        id:"",
        date:"",
        artist_content: "林布蘭·哈爾曼松·范萊因是歐洲巴洛克繪畫藝術的代表畫家之一，也是17世紀荷蘭黃金時代繪畫的主要人物，被稱為荷蘭歷史上最偉大的畫家；在2004年票選最偉大的荷蘭人當中，他排行位於第九，次於第八的安妮·法蘭克。他所處的年代被稱為荷蘭黃金時代，荷蘭的科學藝術與商貿成就達到頂峰。",
        artist_img: "event01_04.png",
        artist_title: "林布蘭·哈爾曼松",
        end_day: "2023-01-31",
        eng_title: "REMBRANDT HARMENSZOON VAN RIJN",
        events_content: "林布蘭把一個原本枯燥的話題變成了一個事件：男人們從工作中抬起頭來，好像被不速之客打擾了。",
        events_img: "event01_02.png|event01_03.png",
        events_title: "市政官 1662",
        main_content: "林布蘭一生用無數的繪畫、版畫和素描描繪了自己。他很可能用他的自畫像來練習對人臉及其情感的描繪，我們可以看到他有很多情緒和偽裝。本展網羅世界各地的林布蘭收藏，將原作一一呈現在館內，帶您一起欣賞光影魔術師的對於畫作中的細膩的變化。",
        main_img: "event01_01_01.png",
        pj_content1: "林布蘭把一個原本枯燥的話題變成了一個事件：男人們從工作中抬起頭來，好像被不速之客打擾了。",
        pj_content2: "林布蘭的這個寓言說道：“我們應該高興：因為這個兒子死了，又活了；迷路了，又找到了。",
        pj_content3: "此畫為林布蘭受僱於阿姆斯特丹射手連隊為其所作的肖像畫，林布蘭一改以往肖像畫中人物按照尊卑順序排列的原則，另闢蹊徑做出舞台化的效果。此畫所描繪的其實是白天隊長與副隊長的景象。",
        pj_img1: "event01_05.png",
        pj_img2: "event01_06.png",
        pj_img3: "event01_last.jpg",
        pj_title1: "市政官",
        pj_title2: "浪子回頭",
        pj_title3: "我只是在畫人，普通人，不是軍隊。",
        room: "A",
        start_day: "2022-08-13",
        title: "林布蘭·哈爾曼松" , 
        img1:"",
        imgM:"",
        item:{},

    },
    mounted() {
        let that = this;
        let getUrlString = location.href;
        let url = new URL(getUrlString);
        let newsID = url.searchParams.get('id'); //抓id
        // fetch("./php/event_01.php")
        //     .then(e => e.json())
        //     .then(list => {
        //         console.log(list);
        //         for (let item of list) {
        //             console.log(item);
        //             this.img1 =item.events_img.split("|")
        //              let re = /-/gi;
        //             this.date = item.start_day.replace(re,".")  +'\b - \b' + item.end_day.replace(re,".")
        //             return this.item = item;
        //         }
        //     }),
        fetch(`./php/event_01.php?id=`+newsID,{
            method: 'POST', 
            headers: {'Content-Type':'application/json'}, 
            body: JSON.stringify({
            ID: newsID,//這是幹嘛用的
            })
        })
         .then(e => e.json())
            .then(list => {
                console.log(list);
                for (let item of list) {
                    console.log(item);
                    this.imgM = item.main_img.split("|")
                    this.img1 = item.events_img.split("|")
                     let re = /-/gi;
                    this.date = item.start_day.replace(re,".")  +'\b - \b' + item.end_day.replace(re,".")
                    return this.item = item;
                }
            }),




            // this.img1 =this.item.events_img.split("|")
            console.log(this.img1);
            // re = /-/gi;
            // this.date = this.item.start_day.replace(re,".")  +'\b - \b' + this.item.end_day.replace(re,".")
        
   
        
        

    }, 

       updated(){
        
        if(800 < document.body.scrollWidth){
        gsap
        .to([".event01_2 .event01_2_content img",".event01_3 .event01_3_img img",".event01_3_title h4",".event01_3_title h5",".event01_3_title div",".event01_2_annotation div",".event01_2 .event01_2_title h4",".event01_2 .event01_2_title h5"],{
            opacity:0,
        })
        gsap //.event01_2 .event01_2_title event01_2_annotation
        .timeline({
            scrollTrigger: {
                trigger: ".event01_2 .event01_2_title",
                start: "-=500",
                end: "-=500",
                scrub: 3
            }
        })
        .to([".event01_2 .event01_2_title h4",".event01_2 .event01_2_title h5"],{
            keyframes: [
                {
                    duration: 0,
                    opacity:0,
                    // clipPath: "inset(0rem 65rem 0rem 0rem)"
                    x:100,
                }, {
                    duration: 1.5,
                    opacity:1,
                    // clipPath: "inset(0rem 0rem 0rem 0rem)",
                    x:0,
                    ease: "sine.inOut"
                }
            ]
        })
        gsap //.event01_2 .event01_2_title event01_2_annotation
        .timeline({
            scrollTrigger: {
                trigger: ".event01_2_annotation",
                start: "-=350",
                end: "-=350",
                scrub: 3
            }
        })
        .to(".event01_2_annotation div",{
            keyframes: [
                {
                    duration: 0,
                    opacity:0,
                    // clipPath: "inset(0rem 65rem 0rem 0rem)"
                    x:100,
                }, {
                    duration: 1.5,
                    opacity:1,
                    // clipPath: "inset(0rem 0rem 0rem 0rem)",
                    x:0,
                    ease: "sine.inOut"
                }
            ]
        })
        gsap
        .timeline({
            scrollTrigger: {
                trigger: "#img1",
                start: "-=500",
                end: "-=500",
                scrub: 3
            }
        })
        .to("#img1",{
            keyframes: [
                {
                    duration: 0,
                    opacity:0,
                    // clipPath: "inset(0rem 65rem 0rem 0rem)"
                    x:-100,
                }, {
                    duration: 1.5,
                    opacity:1,
                    // clipPath: "inset(0rem 0rem 0rem 0rem)",
                    x:0,
                    ease: "sine.inOut"
                }
            ]
        })
        gsap
        .timeline({
            scrollTrigger: {
                trigger: "#img2",
                start: "-=350",
                end: "-=350",
                scrub: 3
            }
        })
        .to("#img2",{
            keyframes: [
                {
                    duration: 0,
                    opacity:0,
                    // clipPath: "inset(0rem 65rem 0rem 0rem)"
                    x:-100,
                }, {
                    duration: 1.5,
                    opacity:1,
                    // clipPath: "inset(0rem 0rem 0rem 0rem)",
                    x:0,
                    ease: "sine.inOut"
                }
            ]
        })
        gsap 
        .timeline({
            scrollTrigger: {
                trigger: ".event01_3 .event01_3_img img",
                start: "-=400",
                end: "-=400",
                scrub: 3
            }
        })
        .to([".event01_3_title h4",".event01_3_title h5",".event01_3_title div"],{
            keyframes: [
                {
                    duration: 0,
                    x:-100,
                    opacity:0,
                    // clipPath: "inset(0rem 65rem 0rem 0rem)"
                }, {
                    duration: 1.5,
                    opacity:1,
                    x:0,
                    // clipPath: "inset(0rem 0rem 0rem 0rem)",
                    ease: "sine.inOut"
                }
            ]
        })
        gsap
        .timeline({
            scrollTrigger: {
                trigger: ".event01_3 .event01_3_img img",
                start: "-=500",
                end: "-=500",
                scrub: 3
            }
        })
        .to(".event01_3 .event01_3_img img",{
            keyframes: [
                {
                    duration: 0,
                    x:100,
                    opacity:0,
                    // clipPath: "inset(0rem 65rem 0rem 0rem)"
                }, {
                    duration: 1.5,
                    opacity:1,
                    x:0,
                    // clipPath: "inset(0rem 0rem 0rem 0rem)",
                    ease: "sine.inOut"
                }
            ]
        })
        //.event01_2 .event01_2_content img
        gsap
        .to(".event01_1 .event01_1_left_title h1",{
            keyframes: [
            { duration: 0, scale:.7, opacity: 0, },
            { duration: .7, scale:1, opacity: 1, }, 
            ]
        })
        gsap
        .to(".event01_1 .event01_1_left_content",{
            keyframes: [
            { duration: 0, y:40, opacity: 0, },
            { duration: .7, y:0, opacity: 1, }, 
            ]
        })
        gsap
        .to('.event01_1_right img', {
            keyframes: [
            { duration: 0, x: 100, opacity: 0, },
            { duration: .7, x: 0, opacity: 1, }, 
            ]
        });
        // gsap
        // .timeline({
        //     scrollTrigger: {
        //         trigger: '.event01_5 .event01_5_textborder h4',
        //         start: "-=500",
        //         end: "+=200",
        //         scrub: 3
        //     }
        // })
        // .fromTo('.event01_5 .event01_5_textborder h4', {
        //     x:900
        // }, {
        //     x:0,
        //     duration: 2,
        //     ease: "sine.inOut"
        // })
        gsap
        .timeline({
            scrollTrigger: {
                trigger: '.event01_4 .event01_4_content ul',
                start: "-=1000",
                end: "-=500",
                scrub: 3
            }
        })
        .fromTo('.event01_4 .event01_4_content ul', {
            x:900
        }, {
            x:0,
            duration: 2,
            ease: "sine.inOut"
        });
        gsap
        .timeline({
            scrollTrigger: {
                trigger: ".event01_5",
                pin: '.event01_5',
                // start: "",
                end: "+=100%",
                scrub: 3
            }
        })
        .to(".event01_5 .event01_5_img .event01_5_text01 div p",{
            // y: '-100', opacity:0,
            y: '-5.2vw', opacity:0,

        })
        .to('.event01_5 .event01_5_img img', {
            // x: '700', y: '-700',scale:3.5
            x: '36.45vw', y: '-36.45vw',scale:3.5

        })
        .to('.event01_5 .event01_5_img img', {
            // x: '1700', y: '-100',scale:3.5
            x: '88.5vw', y: '-5.2vw',scale:3.5

        })
        .to('.event01_5 .event01_5_img img', {
            // x: '-1000', y: '0',scale:3.5
            x: '-52vw', y: '0',scale:3.5

        })
        .to('.event01_5 .event01_5_img img', {
            // x: '-1750', y: '-100',scale:3.5
            x: '-91.1vw', y: '-5.2vw',scale:3.5

        })
        .to('.event01_5 .event01_5_img img', {
            // x: '-400', y: '-800',scale:3
            x: '-20.8vw', y: '-41.6vw',scale:3

        })
        .to('.event01_5 .event01_5_img img', {
            // x: '0', y: '-300',scale:2
            x: '0', y: '-15.6vw',scale:2

        })
        .to('.event01_5 .event01_5_img img', {
            // x: "0", y: '-300', scale:.7
            x: "0", y: '-15.6vw', scale:.7

        });
       }     
    }
});