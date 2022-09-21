<?php
// 取得展覽資料
include("./PDO/connection_inc.php");
$ex_id = $_GET["ex_id"];

$sql = "select NAME, INTRODUCTION from EXHIBITION where ID = :id";

$stmt = $pdo->prepare($sql);
$stmt->bindValue(":id", $ex_id);
$stmt->execute();

$exhibitions = $stmt->fetchAll();

if (count($exhibitions) == 1) {
  $info = $exhibitions[0];
  $info["successful"] = true;
} else {
  $info["successful"] = false;
  $info["message"] = "無資料"; 
}

echo json_encode($info);

// print_r($info);

