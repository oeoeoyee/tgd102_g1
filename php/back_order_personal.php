<?php
include("./PDO/connection_inc.php");
$order_id = $_GET["id"];

$Order_info = json_decode(file_get_contents("php://input"), true);


// -----------------------------------------------------
$sql = "SELECT * from `ORDER` o
            join ORDER_DETAIL od
            on o.ORDER_ID = od.ORDER_ID
            where o.ORDER_ID = :id";


$stmt = $pdo->prepare($sql);
$stmt->bindValue(":id", $order_id);
$stmt->execute();

$order = $stmt->fetchAll();

echo json_encode($order);
