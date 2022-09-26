<?php
include("./PDO/connection_inc.php");

// 接收前端傳來的JSON格式
$member = json_decode(file_get_contents("php://input"), true);

$sql = " SELECT 
                od.ORDER_ID,
                od.EXHIBITION_NAME,
                od.DELEGATE_NAME,
                od.DELEGATE_PHONE,
                od.PAYMENT_DAY,
                od.CHILD_NUM,
                od.CHILD_PRICE,
                od.DISCOUNT_NUM,
                od.DISCOUNT_PRICE,
                od.ADULT_NUM,
                od.ADULT_PRICE,
                od.VOICE_GUIDE,
                o.ORDER_DAY,
                o.VISIT_DAY,
                o.PRICE,
                o.PAYMENT_TYPE,
                o.PAYMENT_STATUS
        FROM REVERSE.ORDER_DETAIL od
                join REVERSE.order o
                        on od.ORDER_ID = o.ORDER_ID
        ";


$stmt = $pdo->prepare($sql);
// $stmt->bindValue(1, $member["name"]);
// $stmt->bindValue(":password", $member["password"]);
$stmt->execute();


echo json_encode($stmt->fetchAll()[2]);

?>