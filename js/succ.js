// 購票成功 ajax
const n1 = document.querySelector('#n1');
const n2 = document.querySelector('#n2');
const n3 = document.querySelector('#n3');
fetch("./php/succ.php")
.then(rsp => rsp.json(
    console.log(rsp)
))
.then(list => {
    const user = list[0];
    n1.insertAdjacentHTML('beforeend',`
        <li>姓名：<span>${user.DELEGATE_NAME}</span></li>
        <li>電話：<span>${user.DELEGATE_PHONE}</span></li>
    `);
    n2.insertAdjacentHTML('beforeend',`
        <li>訂單編號：<span>${user.ORDER_ID}</span></li>
        <li>入館日期：<span>${user.VISIT_DAY}</span></li>
    `);
    n3.insertAdjacentHTML('beforeend',`
        <li>銀行代碼：822 中國信託</li>
        <li>匯款帳號：<span>${user.PAYMENT_ACC}</span></li>
    `);
})