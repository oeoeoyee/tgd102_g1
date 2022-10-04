// 取網址id
var getUrlString = location.href;
var url = new URL(getUrlString);
var newsID = url.searchParams.get('id');

addEventListener('load', function(){
    var infoLength;
    var fetchgetArray;  //取得fetch取得之陣列

    fetch("./php/news01.php")
    .then(resp => resp.json())
    .then((info) => {
        // 把fetch的陣列存出來
        fetchgetArray = info;
        // 將index變成一陣列的長度
        infoLength = Object.keys(info).length;
        var thisIndex = 0;
        for(let i = 0; i <= info.length-1; i++){
            if(info[i].INFO_ID == newsID){
                thisIndex = i;
                // break;
            }
        }

        // 上一則消息
        var preIndex = parseInt(thisIndex) + 1;
        // 下一則消息
        var nextIndex = parseInt(thisIndex) - 1;


        // news01頁 - 上方主要消息(先用index值看看)
        // 如果是最舊一則，不會有上一則
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

        news01_title.innerHTML = info[thisIndex].TITLE;
        news01_type.innerHTML = info[thisIndex].INFO_TYPE;
        news01_img.src = "./images/" + info[thisIndex].IMAGE;
        news01_date.innerHTML = info[thisIndex].DATE;
        news01_content.innerHTML = info[thisIndex].CONTENT;

        if(thisIndex === infoLength - 1){
            news01_next_title.innerHTML = info[nextIndex].TITLE;
            news01_next_date.innerHTML = info[nextIndex].DATE;
            news01_next_type.innerHTML = info[nextIndex].INFO_TYPE;
        }else if (thisIndex === 0){
            news01_pre_title.innerHTML = info[preIndex].TITLE;
            news01_pre_date.innerHTML = info[preIndex].DATE;
            news01_pre_type.innerHTML = info[preIndex].INFO_TYPE;
        }else{
            news01_pre_title.innerHTML = info[preIndex].TITLE;
            news01_pre_date.innerHTML = info[preIndex].DATE;
            news01_pre_type.innerHTML = info[preIndex].INFO_TYPE;
    
            news01_next_title.innerHTML = info[nextIndex].TITLE;
            news01_next_date.innerHTML = info[nextIndex].DATE;
            news01_next_type.innerHTML = info[nextIndex].INFO_TYPE;
        }
    });

    // news01頁 - 上下則消息跳轉 (先用index值看看)
    const news01_pre = document.getElementsByClassName("news01_others_last")[0];
    const news01_next = document.getElementsByClassName("news01_others_next")[0];
    let preID = -1;
    let nextID = -1;
    news01_pre.addEventListener('click', function(){
        for(let i = 0; i <= fetchgetArray.length-2; i++){
            if(fetchgetArray[i].INFO_ID == newsID){
                preID = fetchgetArray[i + 1].INFO_ID;
            }
        }
        console.log(preID);
        if(preID==-1){
            alert("已是最後一則");
        }
        else{
            window.location.href = `./news_01.html?id=${preID}`;
        }
    });
    news01_next.addEventListener('click', function(){
        for(let i = 1; i <= fetchgetArray.length-1; i++){
            if(fetchgetArray[i].INFO_ID == newsID){
                nextID = fetchgetArray[i - 1].INFO_ID;
            }
        }
        console.log(preID);
        if(nextID==-1){
            alert("已是最新一則");
        }
        else{
            window.location.href = `./news_01.html?id=${nextID}`;
        }
    });
})


// 分享用function
function tweetClick() {
    var url = `https://tibamef2e.com/tgd102/g1/dist/news_01.html?id=${newsID}`;
    // var text = "分享給您 溯‧REVERSE博物館 的最新消息！";
    window.open(`http://twitter.com/share?url=${encodeURIComponent(url)}`, '');
}   

function fbClick() {
    var url = `https://tibamef2e.com/tgd102/g1/dist/news_01.html?id=${newsID}`;
    // var text = "分享給您 溯‧REVERSE博物館 的最新消息！";
    window.open(`https://www.facebook.com/sharer.php?u=${encodeURIComponent(url)}`, '');
}

function lineClick() {
    console.log(newsID);
    var url = `https://tibamef2e.com/tgd102/g1/dist/news_01.html?id=${newsID}`;
    // var text = "分享給您溯‧REVERSE博物館 的最新消息！";
    window.open(`http://line.naver.jp/R/msg/text/?${encodeURIComponent(url)}`, '');
}
