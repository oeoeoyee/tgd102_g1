<?php

include ("./PDO/connection_inc.php");

// -----------------------------------------------------

// $sql = " SELECT MEMBER_ID, SUVSCRIPTION_DAY 
//          FROM SUB_LIST";

$sql = " SELECT EXHIBITION_NAME, PAYMENT_DAY, CHILD_NUM, ADULT_NUM, DISCOUNT_NUM, GROUP_NUM
         FROM ORDER_DETAIL";

$statement = $pdo->prepare($sql);
$statement->execute();

$chart_peo = $statement->fetchAll();

echo json_encode($chart_peo);

?>