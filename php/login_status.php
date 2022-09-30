<?php
include("./PDO/connection_inc.php");

$member_WhatToDo = json_decode(file_get_contents("php://input"), true);
// SESSION 內的資料
session_start();

// 判斷 SESSION 有沒有 member 資料
if (isset($_SESSION["member"])) {
  // 有就把資料帶入
  $userNAME = $_SESSION["member"]->NAME; // 名稱
  $userID = $_SESSION["member"]->MEMBER_ID; // ID
  $userMAIL = $_SESSION["member"]->EMAIL;  // 信箱
  // 承接
  $member["userNAME"] = $userNAME;
  $member["userID"] = $userID;
  $member["userMAIL"] = $userMAIL;

  // 將會員要的資料 呈現在對應的頁面
  if (isset($member_WhatToDo["WantToDo"])) {
    switch ($member_WhatToDo["WantToDo"]) {
      case 'MEMBER_INFO': // 資訊
        $sql = " 
          SELECT MEMBER_ID, NAME, EMAIL, PHONE, REGISTER_DAY, LEVEL, EXPIRE_DAY
          from MEMBER
          WHERE MEMBER_ID = :userID and NAME = :userNAME;";

        $stmt = $pdo->prepare($sql);
        $stmt->bindValue(":userID", $member["userID"]);
        $stmt->bindValue(":userNAME", $member["userNAME"]);
        $stmt->execute();

        $data = $stmt->fetchAll();
        break;

      case 'MEMBER_ORDER': // 訂單
        $sql = " 
          SELECT *
          from `ORDER`
          WHERE MEMBER_ID = :userID;";

        $stmt = $pdo->prepare($sql);
        $stmt->bindValue(":userID", $member["userID"]);
        $stmt->execute();

        $data = $stmt->fetchAll();
        break;

      case 'MEMBER_LEVEL': // 等級
        $sql = " 
          SELECT *
          from MEMBER
          WHERE MEMBER_ID = :userID;";

        $stmt = $pdo->prepare($sql);
        $stmt->bindValue(":userID", $member["userID"]);
        $stmt->execute();

        $data = $stmt->fetchAll();
        break;

      default:
        # code... nothing
        break;
    }
  };

  echo json_encode($data);
} else {
  // 沒有的話直接回傳 無登入訊息
  $data["successful"] = '無登入資訊';

  echo json_encode($data);
}
