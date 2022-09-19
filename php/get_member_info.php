<!-- 取得會員資料 -->
<?php
include("./connection_inc.php");
$memberId = $_GET["memberId"];

// -----------------------------------------------------
$sql = "select NAME, PHONE, LEVEL from MEMBER where MEMBER_ID = :id";
// -----------------------------------------------------

$stmt = $pdo->prepare($sql);
$stmt->bindValue(":id", $memberId);
$stmt->execute();

$members = $stmt->fetchAll();

if (count($members) == 1) {
  $member = $members[0];
  $member["successful"] = true;
} else {
  $member["successful"] = false;
  $member["message"] = "無此會員";
}

echo json_encode($member);
