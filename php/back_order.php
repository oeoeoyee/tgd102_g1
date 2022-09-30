<?php
include("./PDO/connection_inc.php");
// $memberId = $_GET["memberId"];

// -----------------------------------------------------
$sql = "SELECT 
            o.ORDER_ID, o.ORDER_DAY, od.EXHIBITION_NAME,
            o.VISIT_DAY, o.PRICE, o.PAYMENT_TYPE, 
            od.DELEGATE_NAME,
            o.PAYMENT_STATUS from `ORDER` o
            join ORDER_DETAIL od
            on o.ORDER_ID = od.ORDER_ID";

$sql2 = "SELECT 
            o.ORDER_ID, o.ORDER_DAY, od.EXHIBITION_NAME,
            o.VISIT_DAY, o.PAYMENT_TYPE, o.PRICE
            from `ORDER` o
            join ORDER_DETAIL od
            on o.ORDER_ID = od.ORDER_ID
            where MEMBER_ID = 3";
// -----------------------------------------------------
// 路徑==> /tgd102_g1/dist/php/get_member_info.php?memberId=1

$stmt = $pdo->prepare($sql);
// $stmt->bindValue(":id", $memberId);
$stmt->execute();

$order = $stmt->fetchAll();

// if (count($members) == 1) {
//   $member = $members[0];
//   $member["successful"] = true;
// } else {
//   $member["successful"] = false;
//   $member["message"] = "無此會員";
// }

// print_r($members);

echo json_encode($order);
