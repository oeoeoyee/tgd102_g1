<?php
include("./PDO/connection_inc.php");
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

  switch ($variable) {
    case 'MEMBER_INFO':
      $sql = " 
        SELECT MEMBER_ID, NAME, EMAIL, PHONE, register_day, level, EXPIRE_DAY
        from MEMBER
        WHERE MEMBER_ID = :userID and NAME = :userNAME;";
      break;

    default:
      # code... nothing
      break;
  }



  $stmt = $pdo->prepare($sql);
  $stmt->bindValue(":userID", $member["userID"]);
  $stmt->bindValue(":userNAME", $member["userNAME"]);
  $stmt->execute();

  $data = $stmt->fetchAll();
} else {
  // 沒有的話直接回傳 無登入訊息
  $data["successful"] = '無登入資訊';
}

echo json_encode($data);
