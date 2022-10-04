<?php
include("./PDO/connection_inc.php");

// 接收前端傳來的JSON格式
$member = json_decode(file_get_contents("php://input"), true);

$sql = " 
    insert into ORDER_DETAIL(TICKET_TYPE,PAYMENT_DAY,EXHIBITION_NAME,DELEGATE_NAME,DELEGATE_PHONE,ADULT_NUM,ADULT_PRICE,DISCOUNT_NUM,DISCOUNT_PRICE,CHILD_NUM,CHILD_PRICE,VOICE_GUIDE)
    values ('個人',now(),?,?,?,?,?,?,?,?,?,?)
";
$stmt = $pdo->prepare($sql);
$stmt->bindValue(1, $member["exhibition"]); 
$stmt->bindValue(2, $member["name"]); 
$stmt->bindValue(3, $member["phone"]); 
$stmt->bindValue(4, $member["adult"]); 
$stmt->bindValue(5, $member["adultticket"]); 
$stmt->bindValue(6, $member["service"]); 
$stmt->bindValue(7, $member["serviceticket"]); 
$stmt->bindValue(8, $member["child"]); 
$stmt->bindValue(9, $member["childticket"]); 
$stmt->bindValue(10, $member["pod"] == 1 ? 1 : 0);
$stmt->execute();
$orderId = $pdo->lastInsertId();
session_start();
$_SESSION["orderId"] = $orderId;


// 隨機號碼
$arr = ['0','1','2','3','4','5','6','7','8','9','0','1','2','3','4','5','6','7','8','9'];
$ans = '';
for($i = 0; $i < 12; $i++){
    shuffle($arr);
    $ans = $ans.$arr[$i];
}


$sql = " 
    insert into `ORDER`(MEMBER_ID, ORDER_ID,ORDER_DAY,VISIT_DAY,PAYMENT_TYPE,PRICE,PAYMENT_STATUS,PAYMENT_ACC) 
    values (?, ?, now(), ?, ?, ?, '未付款' , ?)
";
$stmt = $pdo->prepare($sql);
$stmt->bindValue(1, $member["memberID"]); 
$stmt->bindValue(2, $orderId); 
$stmt->bindValue(3, $member["date"]); 
$stmt->bindValue(4, $member["pay"]); 
$stmt->bindValue(5, $member["total"]); 
$stmt->bindValue(6, $ans); 
$stmt->execute();
// $members = $stmt->fetchAll();

echo json_encode($orderId);

?>