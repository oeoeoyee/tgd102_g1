<?php
// 取得展覽資料
include("./PDO/connection_inc.php");
// 放進 SQL 語法的 :id
// GET 資料 ?ex_id=:id
$ex_id = $_GET["ex_id"];

$sql = "select ID, NAME, EXHIBITION_TYPE, MAIN_TITLE, INTRODUCTION, MAIN_IMAGE, SUB_IMAGE, OTHER_IMAGE  from EXHIBITION where ID = :id";

$stmt = $pdo->prepare($sql);
$stmt->bindValue(":id", $ex_id);
$stmt->execute();

$exhibitions = $stmt->fetchAll();

// 只會抓到 1 筆資料 ; == 1
if (count($exhibitions) == 1) {
  $info = $exhibitions[0];
  $info["successful"] = true;
} else {
  $info["successful"] = false;
  $info["message"] = "無資料";
}

echo json_encode($info);

// print_r($info);
