<?php

include ("./PDO/connection_inc.php");

// -----------------------------------------------------

// $sql = " SELECT MEMBER_ID, SUVSCRIPTION_DAY 
//          FROM SUB_LIST";

$sql = " SELECT DET.EXHIBITION_NAME, SUM(DET.CHILD_NUM + DET.ADULT_NUM + DET.DISCOUNT_NUM + DET.GROUP_NUM) PEO_NUM
         FROM ORDER_DETAIL DET
         LEFT JOIN `ORDER` ORD ON (DET.ORDER_ID = ORD.ORDER_ID)
         WHERE ORD.VISIT_DAY BETWEEN '2022-09-01' AND '2022-10-31'
         GROUP BY DET.EXHIBITION_NAME";

$statement = $pdo->prepare($sql);
$statement->execute();

$chart_peo = $statement->fetchAll();

echo json_encode($chart_peo);

?>