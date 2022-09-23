<!-- 後台  -->
<?php
include("./PDO/connection_inc.php");
$ex_back_info = json_decode(file_get_contents("php://input"), true);

$sql = "
      insert into MEMBER(NAME, EMAIL, PHONE, PASSWORD, LEVEL, REGISTER_DAY, SUBSCRIPTION) 
      values('test1', 'test@email', 88888888, 'test', DEFAULT, now(), 1);
  ";

$stmt = $pdo->prepare($sql);
$stmt->bindValue(":name", $ex_back_info["name"]);
$stmt->bindValue(":email", $ex_back_info["email"]);
$stmt->bindValue(":phone", $ex_back_info["phone"]);
$stmt->bindValue(":password", $ex_back_info["password"]);
$stmt->bindValue(":subscription", $ex_back_info["subscription"]);

$stmt->execute();

if ($stmt->rowCount() == 1) {
  $ex_back_info["successful"] = true;
  $ex_back_info["message"] = "新增成功";
} else {
  $ex_back_info["successful"] = false;
  $ex_back_info["message"] = "新增失敗";
}
echo json_encode($ex_back_info);
