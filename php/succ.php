<?php
include("./PDO/connection_inc.php");

// 接收前端傳來的JSON格式
$member = json_decode(file_get_contents("php://input"), true);



$sql = " SELECT 
            od.ORDER_ID,
            od.DELEGATE_NAME,
            od.DELEGATE_PHONE,
            o.VISIT_DAY,
            o.PAYMENT_ACC
        FROM ORDER_DETAIL od
            join `ORDER` o
                on od.ORDER_ID = o.ORDER_ID
        where od.ORDER_ID = :orderId
        ";
session_start();

$stmt = $pdo->prepare($sql);
$stmt->bindValue(":orderId", $_SESSION["orderId"]);
// $stmt->bindValue(":password", $member["password"]);
$stmt->execute();

echo json_encode($stmt->fetchAll());

?>