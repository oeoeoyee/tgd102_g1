<?php
include("./PDO/connection_inc.php");


$member_WhatToDo = json_decode(file_get_contents("php://input"), true);
// SESSION 內的資料
session_start();

// 判斷 SESSION 有沒有 member 資料
if (isset($_SESSION["member"])) {
  // 有就把資料帶入
  $userID = $_SESSION["member"]->MEMBER_ID; // ID
  // $userMAIL = $_SESSION["member"]->EMAIL;  // 信箱
  // $userNAME = $_SESSION["member"]->NAME; // 名稱
  // 承接
  $member["userID"] = $userID;
  // $member["userMAIL"] = $userMAIL;
  // $member["userNAME"] = $userNAME;

  // 將會員要的資料 呈現在對應的頁面
  if (isset($member_WhatToDo["WantToDo"])) {
    switch ($member_WhatToDo["WantToDo"]) {
      case 'MEMBER_INFO': // 資訊
        $sql = " 
          SELECT MEMBER_ID, NAME, EMAIL, PHONE, REGISTER_DAY, LEVEL, EXPIRE_DAY
          from MEMBER
          WHERE MEMBER_ID = :userID;";

        $stmt = $pdo->prepare($sql);
        $stmt->bindValue(":userID", $member["userID"]);

        break;

      case 'MEMBER_ORDER': // 訂單
        $sql = " 
          SELECT *
          from `ORDER`
          WHERE MEMBER_ID = :userID;";

        $stmt = $pdo->prepare($sql);
        $stmt->bindValue(":userID", $member["userID"]);

        break;

      case 'MEMBER_LEVEL': // 等級
        $sql = " 
          SELECT LEVEL, EXPIRE_DAY
          from MEMBER
          WHERE MEMBER_ID = :userID;";

        $stmt = $pdo->prepare($sql);
        $stmt->bindValue(":userID", $member["userID"]);

        break;

      case 'MEMBER_ORDER_DETAIL': // 等級
        // 訂單明細
        // $ORDER_id = $_GET["id"];
        $ORDER_id = $member_WhatToDo["my_ORDER_ID"];

        $sql = " 
          SELECT 
            od.ORDER_ID,
            od.EXHIBITION_NAME,
            od.DELEGATE_NAME,
            od.DELEGATE_PHONE,
            od.PAYMENT_DAY,
            od.CHILD_NUM,
            od.CHILD_PRICE,
            od.DISCOUNT_NUM,
            od.DISCOUNT_PRICE,
            od.ADULT_NUM,
            od.ADULT_PRICE,
            od.VOICE_GUIDE,
            o.ORDER_DAY,
            o.VISIT_DAY,
            o.PRICE,
            o.PAYMENT_TYPE,
            o.PAYMENT_STATUS
          FROM ORDER_DETAIL od
            join `ORDER` o
            on od.ORDER_ID = o.ORDER_ID
          WHERE o.ORDER_ID = :ORDER_ID;";

        $stmt = $pdo->prepare($sql);
        $stmt->bindValue(":ORDER_ID", $ORDER_id);



        break;

      default:
        # code... nothing
        break;
    }
  };


  $stmt->execute();

  $data = $stmt->fetchAll();

  echo json_encode($data);
} else {
  // 沒有的話直接回傳 無登入訊息
  $data["successful"] = '無登入資訊';

  echo json_encode($data);
}
