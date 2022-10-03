<?php
// 取得展覽資料
include("./PDO/connection_inc.php");
// 放進 SQL 語法的 :id
if (isset($_GET["ex_id"])) {

  $ex_id = $_GET["ex_id"];

  // 展覽內頁 1 筆 + 後 3 筆資料
  $sql = "
  SELECT 
    ID,
    NAME,
    EXHIBITION_TYPE,
    MAIN_TITLE,
    INTRODUCTION,
    MAIN_IMAGE,
    SUB_IMAGE,
    OTHER_IMAGE
  FROM
    EXHIBITION
  WHERE ID <= :id
  ORDER BY ID desc limit 6";

  $stmt = $pdo->prepare($sql);
  $stmt->bindValue(":id", $ex_id);
  $stmt->execute();
  $exhibitions = $stmt->fetchAll();

  echo json_encode($exhibitions);
} else {
  // 展覽外頁 8筆
  $sql = "
  select ID, MAIN_IMAGE, EXHIBITION_TYPE, NAME, START_DAY, END_DAY, ROOM
        FROM EXHIBITION ORDER BY ID desc limit 8;";

  $stmt = $pdo->prepare($sql);
  $stmt->execute();
  $exhibitions = $stmt->fetchAll();

  echo json_encode($exhibitions);
}
