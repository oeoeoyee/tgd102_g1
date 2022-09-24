
// news頁 - vue - 全部訊息
Vue.component('all', {
    data (){
        return{
            imgPath: './images/',
            newsArray:[],
        }
    },

    mounted(){
        const api = "./php/news.php"; // 要從哪裡得到資料

        // 老師範例26
        fetch(api)
            .then(res => res.json())
            .then(res => this.newsArray = res);
    },

    template: `
    <!-- 消息列 -->
    <ul class="news_list news_becenter">
        <li v-for="info in newsArray" @click="toNews01(info.INFO_ID)" id="to_next">
            <a href="./news_01.html">
                <!-- 圖片 -->
                <div class="news_list_img">
                    <img :src="imgPath + info.IMAGE" :alt="info.alt"/>
                </div>
                <!-- 資訊卡中(特展、最新消息) -->
                <div class="infocard_m">
                    <h3>{{info.TITLE}}
                        <span>&rarr;</span>
                    </h3>
                    <h5>{{info.CONTENT}}</h5>
                    <div></div>
                    <h5>{{info.INFO_TYPE}}</h5>
                    <p>{{info.DATE}}</p>
                </div>
            </a>
        </li>
    </ul>
    `,
    // 取得當下按的li的id
    methods:{
        toNews01(i_news){
            // console.log(i_news);
            sessionStorage.setItem('toNews01', i_news);
        },

        // console.log(info[i_news]);
        // const to_next = document.querySelector("#to_next");
        // to_next.addEventListener('click', function(e){
        //     fetch('./php/news.php', {
        //         method: 'GET', 
        //         headers: { 'Content-Type': 'application/json' },
        //         body: JSON.stringify({
        //             // "INFO_ID": info[i_news],
        //         })
        //     })
        //         .then((resp) => resp.json())
        // })

    }
})

// news頁 - vue - 活動訊息
Vue.component('activity', {
    template: `
    <!-- 消息列 -->
    <ul class="news_list news_becenter">
        <li>
            <a href="./news_01.html">
                <!-- 圖片 -->
                <div class="news_list_img">
                    <img src="./images/news_07.png" alt="518活動圖片">
                </div>
                <!-- 資訊卡中(特展、最新消息) -->
                <div class="infocard_m">
                    <h3>518博物館日 期間限定優惠
                        <span>&rarr;</span>
                    </h3>
                    <h5>新一季常設展覽多出十九世紀主題，新一季常設展覽多出十九世紀主題......</h5>
                    <div></div>
                    <h5>活動訊息</h5>
                    <p>2022.05.13 -  2022.08.31</p>
                </div>
            </a>
        </li>
        <li>
            <a href="./news_01.html">
                <!-- 圖片 -->
                <div class="news_list_img">
                    <img src="./images/news_08.png" alt="振興券活動圖片">
                </div>
                <!-- 資訊卡中(特展、最新消息) -->
                <div class="infocard_m">
                    <h3>博物館振興券活動
                        <span>&rarr;</span>
                    </h3>
                    <h5>新一季常設展覽多出十九世紀主題</h5>
                    <div></div>
                    <h5>活動訊息</h5>
                    <p>2022.05.13 -  2022.08.31</p>
                </div>
            </a>
        </li>
        <li>
            <a href="./news_01.html">
                <!-- 圖片 -->
                <div class="news_list_img">
                    <img src="./images/news_07.png" alt="518活動圖片">
                </div>
                <!-- 資訊卡中(特展、最新消息) -->
                <div class="infocard_m">
                    <h3>518博物館日 期間限定優惠
                        <span>&rarr;</span>
                    </h3>
                    <h5>新一季常設展覽多出十九世紀主題，新一季常設展覽多出十九世紀主題......</h5>
                    <div></div>
                    <h5>活動訊息</h5>
                    <p>2022.05.13 -  2022.08.31</p>
                </div>
            </a>
        </li>
        <li>
            <a href="./news_01.html">
                <!-- 圖片 -->
                <div class="news_list_img">
                    <img src="./images/news_08.png" alt="振興券活動圖片">
                </div>
                <!-- 資訊卡中(特展、最新消息) -->
                <div class="infocard_m">
                    <h3>博物館振興券活動
                        <span>&rarr;</span>
                    </h3>
                    <h5>新一季常設展覽多出十九世紀主題</h5>
                    <div></div>
                    <h5>活動訊息</h5>
                    <p>2022.05.13 -  2022.08.31</p>
                </div>
            </a>
        </li>
        <li>
            <a href="./news_01.html">
                <!-- 圖片 -->
                <div class="news_list_img">
                    <img src="./images/news_07.png" alt="518活動圖片">
                </div>
                <!-- 資訊卡中(特展、最新消息) -->
                <div class="infocard_m">
                    <h3>518博物館日 期間限定優惠
                        <span>&rarr;</span>
                    </h3>
                    <h5>新一季常設展覽多出十九世紀主題，新一季常設展覽多出十九世紀主題......</h5>
                    <div></div>
                    <h5>活動訊息</h5>
                    <p>2022.05.13 -  2022.08.31</p>
                </div>
            </a>
        </li>
    </ul>
    `,
})

// news頁 - vue - 館方訊息
Vue.component('museum', {
    template: `
    <!-- 消息列 -->
    <ul class="news_list news_becenter">
        <li>
            <a href="./news_01.html">
                <!-- 圖片 -->
                <div class="news_list_img">
                    <img src="./images/news_04.jpg" alt="票價調整相關照片">
                </div>
                <!-- 資訊卡中(特展、最新消息) -->
                <div class="infocard_m">
                    <h3>新一季參觀須知及票價調整通知
                        <span>&rarr;</span>
                    </h3>
                    <h5>新一季常設展覽多出十九世紀主題，......</h5>
                    <div></div>
                    <h5>館方訊息</h5>
                    <p>2022.05.13 -  2022.08.31</p>
                </div>
            </a>
        </li>
        <li>
            <a href="./news_01.html">
                <!-- 圖片 -->
                <div class="news_list_img">
                    <!-- 同置頂照片 -->
                    <img src="./images/news_06.png" alt="博物館照片">
                </div>
                <!-- 資訊卡中(特展、最新消息) -->
                <div class="infocard_m">
                    <h3>冬季館內定期整修公告
                        <span>&rarr;</span>
                    </h3>
                    <h5>新一季常設展覽多出十九世紀主題，......</h5>
                    <div></div>
                    <h5>館方訊息</h5>
                    <p>2022.05.13 -  2022.08.31</p>
                </div>
            </a>
        </li>
        <li>
            <a href="./news_01.html">
                <!-- 圖片 -->
                <div class="news_list_img">
                    <!-- 同置頂照片 -->
                    <img src="./images/news_05.png" alt="博物館外觀照">
                </div>
                <!-- 資訊卡中(特展、最新消息) -->
                <div class="infocard_m">
                    <h3>歡迎來到 溯‧REVERSE博物館
                        <span>&rarr;</span>
                    </h3>
                    <h5>新一季常設展覽多出十九世紀主題，......</h5>
                    <div></div>
                    <h5>館方訊息</h5>
                    <p>2022.05.13 -  2022.08.31</p>
                </div>
            </a>
        </li>
        <li>
            <a href="./news_01.html">
                <!-- 圖片 -->
                <div class="news_list_img">
                    <img src="./images/news_04.jpg" alt="票價調整相關照片">
                </div>
                <!-- 資訊卡中(特展、最新消息) -->
                <div class="infocard_m">
                    <h3>新一季參觀須知及票價調整通知
                        <span>&rarr;</span>
                    </h3>
                    <h5>新一季常設展覽多出十九世紀主題，......</h5>
                    <div></div>
                    <h5>館方訊息</h5>
                    <p>2022.05.13 -  2022.08.31</p>
                </div>
            </a>
        </li>
        <li>
            <a href="./news_01.html">
                <!-- 圖片 -->
                <div class="news_list_img">
                    <!-- 同置頂照片 -->
                    <img src="./images/news_06.png" alt="博物館照片">
                </div>
                <!-- 資訊卡中(特展、最新消息) -->
                <div class="infocard_m">
                    <h3>冬季館內定期整修公告
                        <span>&rarr;</span>
                    </h3>
                    <h5>新一季常設展覽多出十九世紀主題，......</h5>
                    <div></div>
                    <h5>館方訊息</h5>
                    <p>2022.05.13 -  2022.08.31</p>
                </div>
            </a>
        </li>
    </ul>
    `,
})

// news頁 - vue
let news_vm = new Vue({
    el: '#app_news', 
    data: {
        content: 'all',

        allNews: true, 
        museumNews: false,
        activeNews: false
    },
    methods: {
        changeColor(){
            if(this.content === 'all'){
                this.allNews = true;
                this.museumNews =false;
                this.activeNews = false;
            }else if(this.content === 'museum'){
                this.allNews = false;
                this.museumNews =true;
                this.activeNews = false;
            }else if(this.content === 'activity'){
                this.allNews = false;
                this.museumNews =false;
                this.activeNews = true;
            }
        },
        // toNext(info){
        //     console.log(info.INFO_ID);
        // },
    },
    computed: {
        
    }
})


// news頁 - 置頂的兩篇文章
addEventListener('load', function(){
    const top_title_top = document.querySelector("#news_top_title");
    const top_date_top = document.querySelector("#news_top_date");
    
    fetch("./php/news.php")
        .then((resp) => resp.json())
        // .then(resp) // 好像也可以?
        .then((info) => {
            (top_title_top.innerHTML = info[0].TITLE),
            (top_date_top.innerHTML = info[0].DATE);
        });
})
    
// news01頁 - 畫面跳轉停止預設事件
// addEventListener('click', function(e){
//     if(e.target.closest("div").classList.contains("news_list_img") || e.target.closest("div").classList.contains("infocard_m")){
//         e.preventDefault();
//     }
// })

// news01頁 - 內容
const news01_title = document.querySelector("#news01_title");
const news01_type = document.querySelector("#news01_type");
const news01_img = document.querySelector("#news01_img");
const news01_date = document.querySelector("#news01_date");
const news01_content = document.querySelector("#news01_content");
const news01_pre_title = document.querySelector("#news01_pre_title");
const news01_pre_date = document.querySelector("#news01_pre_date");
const news01_pre_type = document.querySelector("#news01_pre_type");
const news01_next_title = document.querySelector("#news01_next_title");
const news01_next_date = document.querySelector("#news01_next_date");
const news01_next_type = document.querySelector("#news01_next_type");

addEventListener('load', function(){
    const idNext = sessionStorage.getItem('toNews01');
    const idThis = parseInt(idNext) - 1;
    const idPre = parseInt(idNext) - 2;
    console.log(idNext);
    console.log(idThis);
    console.log(idPre);
    fetch("./php/news.php")
    .then((resp) => resp.json())
    // .then(resp) // 好像也可以?
    .then((info) => {
        // news01頁 - 上方主要消息
        (news01_title.innerHTML = info[idThis].TITLE);
        (news01_type.innerHTML = info[idThis].INFO_TYPE);
        (news01_img.src = "./images/" + info[idThis].IMAGE);
        (news01_date.innerHTML = info[idThis].DATE);
        (news01_content.innerHTML = info[idThis].CONTENT);

        // news01頁 - 上一則消息
        (news01_pre_title.innerHTML = info[idPre].TITLE);
        (news01_pre_date.innerHTML = info[idPre].DATE);
        (news01_pre_type.innerHTML = info[idPre].INFO_TYPE);

        // news01頁 - 下一則消息
        (news01_next_title.innerHTML = info[idNext].TITLE);
        (news01_next_date.innerHTML = info[idNext].DATE);
        (news01_next_type.innerHTML = info[idNext].INFO_TYPE);
    });
})

// news01頁 - 上下則消息 set session storage item 
const news01_pre = document.getElementsByClassName("news01_others_last")[0];
const news01_next = document.getElementsByClassName("news01_others_next")[0];
// news01_pre.addEventListener('click', function(i_news){
//     sessionStorage.setItem('toNews01', i_news);
// });




// news頁 - gsap
// 5
gsap.registerPlugin(ScrollTrigger);

gsap.to(".gsap_right", {
x: 0,
scrollTrigger: {
    trigger: ".gsap_right",
    start: "top center",
    end: "top 100px",
    scrub: true,
    // markers: true,
    // id: "scrub"
}
});

gsap.to(".gsap_left", {
x: 0,
scrollTrigger: {
    trigger: ".gsap_left",
    start: "top bottom",
    end: "top 100px",
    scrub: true,
    // markers: true,
    // id: "scrub"
}
});