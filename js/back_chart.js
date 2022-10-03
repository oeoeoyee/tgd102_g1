// var sub_info
addEventListener('load', function(){

    // chart1 - fetch data >> 整理 >> 套用到圖表
    getMonData();
    function getMonData(){
        fetch(`./php/back_chart_mon.php`)
        .then((resp) => resp.json())
        .then(function(resp){

            // 抓取當月天數
            let each_day = 31
            switch(new Date().getMonth()){
                case 0:
                case 2:
                case 4:
                case 6:
                case 7:
                case 9:
                case 11:
                    each_day = 31;
                    break;
                
                case 3:
                case 5:
                case 8:
                case 10:
                    each_day = 30;
                    break;

                default: each_days = 28; // 或days = 29
        }

            // 做日期表格(放在js chart的)
            let date_array = [];
            for(let i = 0; i < each_day; i++){
                date_array.push( i + 1);
            }

            // 做價錢表格(放在js chart的)
            let price_array = new Array(each_day).fill(0);
            for(let i = 0; i < resp.length; i++){
                price_array[resp[i].DAY - 1] = resp[i].TOTAL_PRICE;
            }

            // chart1 month
            chartMon();
            function chartMon(){
                const monCtx = document.getElementById('monthChart').getContext('2d');
                const monChart = new Chart(monCtx, {
                    type: 'line',
                    data: {
                        // labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
                        labels: date_array,
                        datasets: [{
                            label: '單日門票營收',
                            // data: [12, 19, 3, 5, 2, 3],
                            data: price_array,
                            borderColor: [
                                'rgba(54, 162, 235, 1)',
                            ],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        },
                        plugins: {
                            title: {
                                display: true,
                                text: '本月門票總營收'
                            }
                        }
                    }
                });
            }
            return resp;
        });
        
    }


    // chart2 - fetch data >> 整理 >> 套用到圖表
    getPeoData();
    function getPeoData(){
        fetch(`./php/back_chart_peo.php`)
        .then((resp) => resp.json())
        .then(function(resp){

            let exhib_array = [];
            let peo_array = [];

            resp.forEach(element => {
                exhib_array.push(element.EXHIBITION_NAME);
                peo_array.push(element.PEO_NUM);
            });

            // chart2 people flow
            chartPeo();
            function chartPeo(){
                // chart2 people
                const peoCtx = document.getElementById('peopleChart').getContext('2d');
                const peopleChart = new Chart(peoCtx, {
                    type: 'pie',
                    data: {
                        labels: exhib_array,
                        // labels: ['常設展', '林布蘭·哈爾曼松', '奇怪殭屍展', '歷代皇帝展', '琺瑯瓷器展',],
                        datasets: [{
                            label: '',
                            data: peo_array,
                            // data: [12, 19, 3, 5, 3],
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)'
                            ],
                            borderWidth: 1,
                            hoverOffset: 4
                        }]
                    },
                    options: {
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        },
                        plugins: {
                            title: {
                                display: true,
                                text: '每日觀展人流比率'
                            }
                        }
                    }
                });
            }
            return resp;
        });
        
    }
        
    
    // chart3 - fetch data >> 整理 >> 套用到圖表
    getYearData();
    function getYearData(){
        fetch(`./php/back_chart_year.php`)
        .then((resp) => resp.json())
        .then(function(resp){

            // 做月份和價錢表格(放在js chart的)
            let yprice_array = new Array(12).fill(0);
            for(let i = 0; i < resp.length; i++){
                yprice_array[resp[i].MONTH - 1] = resp[i].TOTAL_PRICE;
            }

            // chart3 year
            chartYear();
            function chartYear(){
                const yearCtx = document.getElementById('yearChart').getContext('2d');
                const yearChart = new Chart(yearCtx, {
                    type: 'line',
                    data: {
                        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12',],
                        datasets: [{
                            label: '每月營收額',
                            // data: [12, 19, 3, 5, 2, 3, 7, 8, 4, 10, 5, 7],
                            data: yprice_array,
                            borderColor: [
                                'rgba(54, 162, 235, 1)',
                            ],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        },
                        plugins: {
                            title: {
                                display: true,
                                text: '本年門票總營收'
                            }
                        }
                    }
                });
            }
            return resp;
        });
        
    }


    // chart4 - fetch data >> 整理 >> 套用到圖表
    getSubData();
    function getSubData(){
        fetch(`./php/back_chart_sub.php`)
        .then((resp) => resp.json())
        .then(function(resp){
            // 訂閱會員非會員(現在是訊息種類比例)
            let sub_info = [];
            let yes = 0;
            let no = 0;
            for(let i = 0; i < resp.length; i++){
                if(resp[i].MEMBER_ID){
                    yes++;
                }else{
                    no++;
                }
            }
            sub_info.push(yes, no);
            
            // chart4 subscription
            chartSub();
            function chartSub(){
                const subCtx = document.getElementById('subChart').getContext('2d');
                const subChart = new Chart(subCtx, {
                    type: 'bar',
                    data: {
                        labels: ['會員', '非會員',],
                        datasets: [{
                            label: '會員訂閱人數',
                            // data: [5, 3],
                            data: sub_info,
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                            ],
                            borderWidth: 1,
                            barThickness: 30,
                            
                            // barPercentage: 0.5,
                            // maxBarThickness: 8,
                            // minBarLength: 2,
                        }]
                    },
                    options: {
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        },
                        plugins: {
                            title: {
                                display: true,
                                text: '本月電子報訂閱人數',
                                padding: {
                                    top: 10,
                                    bottom: 10
                                }
                            }
                        }
                    }
                });
            }
            return resp;
        });
        
    }
});