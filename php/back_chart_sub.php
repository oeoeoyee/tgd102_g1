<?php

include ("./PDO/connection_inc.php");

// -----------------------------------------------------

// $sql = " SELECT MEMBER_ID, SUVSCRIPTION_DAY 
//          FROM SUB_LIST";

$sql = " SELECT INFO_TYPE, INFO_ID
         FROM INFORMATION";

$statement = $pdo->prepare($sql);
$statement->execute();

$chart_sub = $statement->fetchAll();

echo json_encode($chart_sub);

?>