<?php
include("./PDO/connection_inc.php");

// 接收前端傳來的JSON格式
$member = json_decode(file_get_contents("php://input"), true);

$sql = " 
    insert into ORDER_DETAIL(TICKET_TYPE,EXHIBITION_NAME,DELEGATE_NAME,DELEGATE_PHONE,GROUP_NUM,GROUP_PRICE,VOICE_GUIDE,NAVIGATE_GUIDE,PAYMENT_DAY)
    values ('團體',?,?,?,?,?,?,?,now())
";
$stmt = $pdo->prepare($sql);
$stmt->bindValue(1, $member["exhibition"]); 
$stmt->bindValue(2, $member["name"]); 
$stmt->bindValue(3, $member["phone"]); 
$stmt->bindValue(4, $member["group"]); 
$stmt->bindValue(5, $member["ticket"]); 
$stmt->bindValue(6, $member["pod"] == 1 ? 1 : 0);
$stmt->bindValue(7, $member["tour"] == 1 ? 1 : 0);
$stmt->execute();
$orderId = $pdo->lastInsertId();
session_start();
$_SESSION["orderId"] = $orderId;

$sql = " 
    insert into `ORDER`(MEMBER_ID, ORDER_ID,ORDER_DAY,VISIT_DAY,PAYMENT_TYPE,PRICE,PAYMENT_STATUS) 
    values (?, ?, now(), ?, ?, ?, 1)
";
$stmt = $pdo->prepare($sql);
$stmt->bindValue(1, $member["memberID"]); 
$stmt->bindValue(2, $orderId); 
$stmt->bindValue(3, $member["date"]); 
$stmt->bindValue(4, $member["pay"]); 
$stmt->bindValue(5, $member["total"]); 
$stmt->execute();
// $members = $stmt->fetchAll();

echo json_encode($orderId);

?>