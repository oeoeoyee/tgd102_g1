<!-- 取得會員資料 -->
<?php
include("./PDO/connection_inc.php");
$memberId = $_GET["memberId"];

// -----------------------------------------------------
$sql = "select NAME, PHONE, LEVEL from MEMBER where MEMBER_ID = :id";
// -----------------------------------------------------
// 路徑==> /tgd102_g1/dist/php/get_member_info.php?memberId=1

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
