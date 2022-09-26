<?php
include("./PDO/connection_inc.php");

// 接收前端傳來的JSON格式
$member = json_decode(file_get_contents("php://input"), true);

$sql = " 
    insert into REVERSE.ORDER_DETAIL(ticket_type,EXHIBITION_NAME,DELEGATE_NAME,DELEGATE_PHONE,GROUP_NUM,GROUP_PRICE,VOICE_GUIDE,NAVIGATE_GUIDE)
    values ('團體',?,?,?,?,?,?,?);
    insert into REVERSE.order(member_id,order_day,VISIT_DAY,payment_type,PRICE) 
    values (3,now(),?,?,?)
    ";


$stmt = $pdo->prepare($sql);
$stmt->bindValue(1, $member["exhibition"]); 
$stmt->bindValue(2, $member["name"]); 
$stmt->bindValue(3, $member["phone"]); 
$stmt->bindValue(4, $member["group"]); 
$stmt->bindValue(5, $member["ticket"]); 
$stmt->bindValue(6, $member["pod"]); 
$stmt->bindValue(7, $member["tour"]); 
$stmt->bindValue(8, $member["date"]); 
$stmt->bindValue(9, $member["pay"]); 
$stmt->bindValue(10, $member["total"]); 
$stmt->execute();

$members = $stmt->fetchAll();

echo json_encode($members);

?>