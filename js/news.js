// news頁 - vue - 全部訊息
// Vue.component('all', {
Vue.component('news', {

    props: ['type'], 
    // 已在html綁定 :type="CURRENT_INFO_TYPE"

    data (){
        return{
            // 圖片路徑
            imgPath: './images/',
            // 資料庫的所有消息
            allNewsArray: [],
            // 當下顯示的消息
            newsArray: [],
            // 頁數
            pageArray: [],
            // 每頁的資訊量
            perPage: 5,
            // 當前在的頁數
            thisPage: 1,
        }
    },

    mounted(){
        let newsphp, type;
        switch (this.type) {
            case 'all':
                newsphp = "./php/news.php";
                break;
            case 'museum':
                newsphp = "./php/news_type.php";
                type = '館方訊息';
                break;
            case 'activity':
                newsphp = "./php/news_type.php";
                type = '活動訊息';
                break;
        }

        fetch(`${newsphp}?type=${type}`)
        .then(res => res.json())
        // 將字串20字以後加上....
        .then(function(data){
            for(let i = 0; i < data.length; i++){
                if(data[i]["CONTENT"].toString().length > 20){
                    data[i]["CONTENT"] = data[i]["CONTENT"].toString().slice(0,20) + "......";
                }
                // if(data[i]["TITLE"].toString().length > 18){
                //     data[i]["TITLE"] = data[i]["TITLE"].toString().slice(0,18) + "...";
                // }
            }
            return data;
        })
        .then(data => {
            // 定義allNewsArray(全部資料的陣列))(記得加this!)
            this.allNewsArray = data;
            // 定義pageArray(算頁數並做成陣列)
            // this.pageArray = Math.ceil(this.allNewsArray.length / this.perPage);
            let totalPage = Math.ceil(this.allNewsArray.length / this.perPage);
            // 也可以把t 寫在上面設為變數 但要記得加this.
            let t = 0;
            for(let i = 0; i < totalPage; i++){
                t++;
                this.pageArray.push(t);
            }
            // 計算每頁infocard數量(用slice把newsArray)
            this.newsArray = this.allNewsArray.slice((this.thisPage-1) * this.perPage, this.thisPage * this.perPage);
            return data;
        })
    },

    // 已不用 - 取得index
    // template: `
    // <!-- 消息列 -->
    // <ul class="news_list news_becenter">
    //     <li v-for="(info,index) in newsArray" @click="toNews01(index.toString())" id="to_next">
    //         <a href="./news_01.html">
    //             <!-- 圖片 -->
    //             <div class="news_list_img">
    //                 <img :src="imgPath + info.IMAGE" :alt="info.alt"/>
    //             </div>
    //             <!-- 資訊卡中(特展、最新消息) -->
    //             <div class="infocard_m">
    //                 <h3>{{info.TITLE}}
    //                     <span>&rarr;</span>
    //                 </h3>
    //                 <h5>{{info.CONTENT}}</h5>
    //                 <div></div>
    //                 <h5>{{info.INFO_TYPE}}</h5>
    //                 <p>{{info.DATE}}</p>
    //             </div>
    //         </a>
    //     </li>
    // </ul>
    // `,
    
    // 取得陣列
    template: `
    <!-- 消息列 -->
    <div>
        <ul class="news_list news_becenter">
            <li v-for="(info, index) in newsArray" :key="id"  @click="toNews01(index.toString())">
                <a :href="'./news_01.html?id='+info.INFO_ID">
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
        <ul class="news_page news_becenter">
            <li>＜</li>
            <li v-for="(num, index) in pageArray" @click="changePage(pageArray[index])">{{num}}</li>
            <li>＞</li>
        </ul>
    </div>
    `,
    // news頁 - 備用 - 取得當下按的li的id
    // methods:{
    //     toNews01(i_news){
    //         // console.log(i_news);
    //         sessionStorage.setItem('toNews01', i_news);
    //     },
    //     // slice20(){
    //     //     newsArray.CONTENT.slice(0,20) + ".......";
    //     // },
    // }

    methods:{
        // 取得當下按的li的index
        toNews01(i_news){
            console.log(i_news)
        //     console.log(info);
            // sessionStorage.setItem('toNews01', i_news);
        },
        // 換下方頁數
        changePage(num){
            this.thisPage = num;
            // return this.thisPage;
            this.newsArray = this.allNewsArray.slice((this.thisPage-1) * this.perPage, this.thisPage * this.perPage);
        },
    },

    computed:{}
})

// news頁 - vue - 活動訊息
// news頁 - vue - 館方訊息

// news頁 - vue
let news_vm = new Vue({
    el: '#app_news', 
    data: {
        content: 'all',
        CURRENT_INFO_TYPE:'all',

        // allNews: true, 
        // museumNews: false,
        // activeNews: false,

        options:{
            // option 是 { title:'全部', },....
            // key 是 'all'、'museum'、'activity'
            
            'all':{
                title:'全部消息',
            },
            'museum':{
                title:'館方訊息',
            },
            'activity':{
                title:'活動訊息',
            }
        }
    },
    methods: {
        // changeColor(){
        //     if(this.content === 'all'){
        //         this.allNews = true;
        //         this.museumNews =false;
        //         this.activeNews = false;
        //     }else if(this.content === 'museum'){
        //         this.allNews = false;
        //         this.museumNews =true;
        //         this.activeNews = false;
        //     }else if(this.content === 'activity'){
        //         this.allNews = false;
        //         this.museumNews =false;
        //         this.activeNews = true;
        //     }
        // },
    },
    computed: {}
})


// news頁 - 置頂的兩篇文章
addEventListener('load', function(){
    const top_title_top = document.querySelector("#news_top_title");
    const top_date_top = document.querySelector("#news_top_date");
    const top_content_top = document.querySelector("#news_top_content");
    const top_title_down = document.querySelector("#news_down_title");
    const top_date_down = document.querySelector("#news_down_date");
    const top_content_down = document.querySelector("#news_down_content");

    
    fetch("./php/news.php")
        .then((resp) => resp.json())
        // .then(resp) // 好像也可以?
        .then((info) => {
            // 設定置頂陣列，讓網頁取用最新設置頂的消息
            let top1_array = [];
            let top2_array = [];
            for(let i = 0; i< info.length; i++){
                if(info[i].TOP === "Top1"){
                    top1_array.push(i);
                }else if(info[i].TOP === "Top2"){
                    top2_array.push(i);
                }else{}
            }

            (top_title_top.innerHTML = info[top1_array[0]].TITLE),
            (top_date_top.innerHTML = info[top1_array[0]].DATE);
            (top_content_top.innerHTML = info[top1_array[0]].CONTENT);
            (top_title_down.innerHTML = info[top2_array[0]].TITLE);
            (top_date_down.innerHTML = info[top2_array[0]].DATE);
            (top_content_down.innerHTML = info[top2_array[0]].CONTENT);
        });
})

    
// news頁 - 備用 - 畫面跳轉停止預設事件
// addEventListener('click', function(e){
//     if(e.target.closest("div").classList.contains("news_list_img") || e.target.closest("div").classList.contains("infocard_m")){
//         e.preventDefault();
//     }
// })

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