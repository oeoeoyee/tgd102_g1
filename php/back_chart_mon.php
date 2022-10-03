<?php

include ("./PDO/connection_inc.php");

// -----------------------------------------------------

// $sql = " SELECT MEMBER_ID, SUVSCRIPTION_DAY 
//          FROM SUB_LIST";

$sql = " SELECT DAY(VISIT_DAY) `DAY`, SUM(PRICE) TOTAL_PRICE
         FROM `ORDER`
         WHERE MONTH(VISIT_DAY) = MONTH(NOW())
         GROUP BY DAY(VISIT_DAY)
         ORDER BY `DAY`";

$statement = $pdo->prepare($sql);
$statement->execute();

$chart_mon = $statement->fetchAll();

echo json_encode($chart_mon);

?>