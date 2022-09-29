<?php
include("./PDO/connection_inc.php");
$member = json_decode(file_get_contents("php://input"), true);

// 判斷有沒有接收到資料
if ($member == null) {
  $member["message"] = "無會員資訊";
  $member["successful"] = false;
  echo json_encode($member);
  return;
}

// -----------------------------------------------------
$sql = "
    select *
    from member where 
    EMAIL = :useremail and password = :password;
  ";
// -----------------------------------------------------

$stmt = $pdo->prepare($sql);
$stmt->bindValue(":useremail", $member["useremail"]); // 信箱
$stmt->bindValue(":password", $member["password"]); // 密碼
$stmt->execute();

$members = $stmt->fetchAll();
// 取得資料 != 0
if (count($members) != 0) {
  $member = $members[0];
  $member["successful"] = true;
  session_start();
  if ($_SESSION != null) {
    session_regenerate_id();
  }
  $_SESSION["loggedin"] = true;
  $_SESSION["member"] = (object) $member;
  echo json_encode([
    "successful" => true,
    "MEMBER_ID" => $member["MEMBER_ID"],
    "NAME" => $member["NAME"],
    "EMAIL" => $member["EMAIL"],
  ]);
} else {
  $resp_body = (object) [
    "successful" => false,
    "message" => "信箱或密碼錯誤"
  ];
  echo json_encode($resp_body);
}
