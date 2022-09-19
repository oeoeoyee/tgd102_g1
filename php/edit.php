<!-- 會員資料編輯 待改 -->
<?php
include("./connection_inc.php");
$member = json_decode(file_get_contents("php://input"), true);

// -----------------------------------------------------
$sql = "
      update MEMBER
      set PASSWORD = :password,
          NICKNAME = :nickname
      where
          USERNAME = :username 
    ";
// -----------------------------------------------------

$stmt = $pdo->prepare($sql);
$stmt->bindValue(":username", $member["username"]);
$stmt->bindValue(":password", $member["password"]);
$stmt->bindValue(":nickname", $member["nickname"]);
$stmt->execute();

if ($stmt->rowCount() == 1) {
  $member["successful"] = true;
  $member["message"] = "修改成功";
} else {
  $member["successful"] = false;
  $member["message"] = "修改失敗";
}

echo json_encode($member);
