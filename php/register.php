<!-- 註冊用PHP HTML未新增JS -->
<?php
include("./connection_inc.php");
// 1 接收前端傳來的JSON格式字串，並轉成PHP中的物件
$member = json_decode(file_get_contents("php://input"), true);

// -----------------------------------------------------
$sql = "
      insert into MEMBER(NAME, EMAIL, PHONE, PASSWORD, LEVEL, REGISTER_DAY, SUBSCRIPTION) 
      values(:name, :email, :phone, :password, DEFAULT, now(), subscription)
    ";
// -----------------------------------------------------

$stmt = $pdo->prepare($sql);
$stmt->bindValue(":name", $member["name"]);
$stmt->bindValue(":email", $member["email"]);
$stmt->bindValue(":phone", $member["phone"]);
$stmt->bindValue(":password", $member["password"]);
$stmt->bindValue(":subscription", $member["subscription"]);

$stmt->execute();

// 3 回應給前端 註冊成功或是失敗

if ($stmt->rowCount() == 1) {
  $member["successful"] = true;
  $member["message"] = "註冊成功";
} else {
  $member["successful"] = false;
  $member["message"] = "註冊失敗";
}
echo json_encode($member);
