<?php

include ("./PDO/connection_inc.php");

// -----------------------------------------------------

// $sql = " SELECT MEMBER_ID, SUVSCRIPTION_DAY 
//          FROM SUB_LIST";

$sql = " SELECT MONTH(VISIT_DAY) `MONTH`, SUM(PRICE) TOTAL_PRICE
         FROM `ORDER`
         WHERE YEAR(VISIT_DAY) = YEAR(NOW())
         GROUP BY MONTH(VISIT_DAY)
         ORDER BY `MONTH`";

$statement = $pdo->prepare($sql);
$statement->execute();

$chart_year = $statement->fetchAll();

echo json_encode($chart_year);

?>