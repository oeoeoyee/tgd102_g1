<?php
include("./PDO/connection_inc.php");
// $memberId = $_GET["memberId"];

// -----------------------------------------------------
$sql = "SELECT 
            o.ORDER_ID, o.ORDER_DAY, od.EXHIBITION_NAME,
            o.VISIT_DAY, o.PRICE, o.PAYMENT_TYPE, 
            od.DELEGATE_NAME,
            o.PAYMENT_STATUS from REVERSE.ORDER o
            join REVERSE.ORDER_DETAIL od
            on o.ORDER_ID = od.ORDER_ID";
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
