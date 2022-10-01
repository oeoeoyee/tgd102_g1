addEventListener('load', function(){
    // 取網址id
    var getUrlString = location.href;
    var url = new URL(getUrlString);
    var newsID = url.searchParams.get('id');
    // console.log(newsID);
    fetch(`./php/news01.php?id=`+newsID, {
        method: 'POST', 
        headers: {'Content-Type':'application/json'}, 
        body: JSON.stringify({
            // 要是資料表的欄位名嗎?
            ID: newsID,
            // IDNext: newsID + 1, 
            // IDPre: newsID - 1
        })
    })
    .then(resp => resp.json())
    .then((info) => {
        // news01頁 - 上方主要消息
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
        if(info.length < 3 && info[0].INFO_ID === 1){
            news01_title.innerHTML = info[0].TITLE;
            news01_type.innerHTML = info[0].INFO_TYPE;
            news01_img.src = "./images/" + info[0].IMAGE;
            news01_date.innerHTML = info[0].DATE;
            news01_content.innerHTML = info[0].CONTENT;
        }else{
            news01_title.innerHTML = info[1].TITLE;
            news01_type.innerHTML = info[1].INFO_TYPE;
            news01_img.src = "./images/" + info[1].IMAGE;
            news01_date.innerHTML = info[1].DATE;
            news01_content.innerHTML = info[1].CONTENT;
        }

        // news01頁 - 上一則消息
        if(info.length < 3 && info[0].INFO_ID === 1){
        }else{
            news01_pre_title.innerHTML = info[0].TITLE;
            news01_pre_date.innerHTML = info[0].DATE;
            news01_pre_type.innerHTML = info[0].INFO_TYPE;
        }

        // news01頁 - 下一則消息
        if(info.length < 3 && info[0].INFO_ID === 1){
            news01_next_title.innerHTML = info[1].TITLE;
            news01_next_date.innerHTML = info[1].DATE;
            news01_next_type.innerHTML = info[1].INFO_TYPE;
        }else{
            news01_next_title.innerHTML = info[2].TITLE;
            news01_next_date.innerHTML = info[2].DATE;
            news01_next_type.innerHTML = info[2].INFO_TYPE;
        }
    });

    // news01頁 - 上下則消息跳轉 
    const news01_pre = document.getElementsByClassName("news01_others_last")[0];
    const news01_next = document.getElementsByClassName("news01_others_next")[0];
    news01_pre.addEventListener('click', function(){
        let preID = parseInt(newsID) - 1
        window.location.href = `news_01.html?id=${preID}`;
    });
    news01_next.addEventListener('click', function(){
        let nextID = parseInt(newsID) + 1
        window.location.href = `news_01.html?id=${nextID}`;
    });
})


// 分享用function
function tweetClick() {
    // var url = "https://tibamef2e.com/tgd102/g1/dist/news_01.html?id= + 'newsID' + ";
    var url = "http://urlfromcms.com";
    var text = "分享給您 溯‧REVERSE博物館 的最新消息！";
    window.open('http://twitter.com/share?url='+encodeURIComponent(url)+'&text='+encodeURIComponent(text), '');
}   

function fbClick() {
    // var url = "https://tibamef2e.com/tgd102/g1/dist/news_01.html?id= + 'newsID' + ";
    var url = "http://urlfromcms.com";
    var text = "分享給您 溯‧REVERSE博物館 的最新消息！";
    window.open('https://www.facebook.com/sharer.php?u='+encodeURIComponent(url)+'&text='+encodeURIComponent(text), '');
}

function lineClick() {
    // var url = "https://tibamef2e.com/tgd102/g1/dist/news_01.html?id= + 'newsID' + ";
    var url = "http://urlfromcms.com";
    var text = "分享給您 溯‧REVERSE博物館 的最新消息！";
    window.open('http://line.naver.jp/R/msg/text/?'+encodeURIComponent(url)+'&text='+encodeURIComponent(text), '');
}


// news01頁 - 內容
// addEventListener('load', function(){
    // 再見了
    // const news01_title = document.querySelector("#news01_title");
    // const news01_type = document.querySelector("#news01_type");
    // const news01_img = document.querySelector("#news01_img");
    // const news01_date = document.querySelector("#news01_date");
    // const news01_content = document.querySelector("#news01_content");
    // const news01_pre_title = document.querySelector("#news01_pre_title");
    // const news01_pre_date = document.querySelector("#news01_pre_date");
    // const news01_pre_type = document.querySelector("#news01_pre_type");
    // const news01_next_title = document.querySelector("#news01_next_title");
    // const news01_next_date = document.querySelector("#news01_next_date");
    // const news01_next_type = document.querySelector("#news01_next_type");
    // let idThis = sessionStorage.getItem('toNews01');
    // const idNext = parseInt(idThis) + 1;
    // const idPre = parseInt(idThis) - 1;
    // fetch("./php/news.php")
    // .then((resp) => resp.json())
    // // .then(resp) // 好像也可以?
    // .then((info) => {
    //     // news01頁 - 上方主要消息
    //     (news01_title.innerHTML = info[idThis].TITLE);
    //     (news01_type.innerHTML = info[idThis].INFO_TYPE);
    //     (news01_img.src = "./images/" + info[idThis].IMAGE);
    //     (news01_date.innerHTML = info[idThis].DATE);
    //     (news01_content.innerHTML = info[idThis].CONTENT);

    //     // news01頁 - 上一則消息
    //     (news01_pre_title.innerHTML = info[idPre].TITLE);
    //     (news01_pre_date.innerHTML = info[idPre].DATE);
    //     (news01_pre_type.innerHTML = info[idPre].INFO_TYPE);

    //     // news01頁 - 下一則消息
    //     (news01_next_title.innerHTML = info[idNext].TITLE);
    //     (news01_next_date.innerHTML = info[idNext].DATE);
    //     (news01_next_type.innerHTML = info[idNext].INFO_TYPE);
    // });

    // // news01頁 - 上下則消息 set get session storage item 
    // const news01_pre = document.getElementsByClassName("news01_others_last")[0];
    // const news01_next = document.getElementsByClassName("news01_others_next")[0];
    // news01_pre.addEventListener('click', function(){
    //     let toPre = sessionStorage.getItem('toNews01');
    //     sessionStorage.setItem('toNews01', parseInt(toPre) - 1);
    // });
    // news01_next.addEventListener('click', function(){
    //     let toNext = sessionStorage.getItem('toNews01');
    //     sessionStorage.setItem('toNews01', parseInt(toNext) + 1);
    // });

    // 網址加id的方式
        // .then(function(array){
        //     // console.log(array);
        //     const idArray = [];
        //     // console.log(idArray);
        //     for(i = 0; i < array.length; i++){
        //         idArray.push(array[i].INFO_ID);
        //         // console.log(idArray);
        //     }
        //     return array;
        // })
// })