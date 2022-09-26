<?php
include("./PDO/connection_inc.php");
//---------------------------------------------------

// 1. 取得變數
$keywords = htmlspecialchars($_GET["keywords"]);

// vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// select A 欄位 or B 欄位...
// from 表單 
// where A 欄位 like &xxx&;
//    or B 欄位 like &xxx&;... 

$sql = "
SELECT INFO_ID, INFO_TYPE, TITLE, CONTENT, DATE  
FROM INFORMATION 
where 
  INFO_ID like concat(:keywords, '%') 
  OR INFO_TYPE like concat(:keywords, '%') 
  OR TITLE like concat(:keywords, '%')
  OR CONTENT like concat(:keywords, '%')
  OR DATE like concat(:keywords, '%');";

// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

// 2. 將變數放進 SQL 語法中
$statement = $pdo->prepare($sql);
$statement->bindValue(":keywords", $keywords);
$statement->execute();

// 3. fetchall 資料
$data = $statement->fetchAll();

// 列印陣列
// print_r($data);

// json_encode 轉換資料結構
echo json_encode($data);
