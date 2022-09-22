<!-- 登入用 HTML未新增JS -->
<?php
include("./PDO/connection_inc.php");
$member = json_decode(file_get_contents("php://input"), true);

// -----------------------------------------------------

// 信箱、密碼
// $sql = "
//       select MEMBER_ID, NAME, LEVEL, EMAIL
//       from member where 
//       EMAIL = :email and password = :password;
//     ";

// -----------------------------------------------------

// Ury測試資料
$sql = "
      select NAME
      from member where 
      EMAIL = 'jay906223@gmail.com' and password = password;
  ";

// -----------------------------------------------------

$stmt = $pdo->prepare($sql);
// $stmt->bindValue(":email", $member["email"]);
// $stmt->bindValue(":password", $member["password"]);
$stmt->execute();

$members = $stmt->fetchAll();

// 有資料就送 SESSION 到 使用者Cookie
if ($stmt->rowCount() != 0) {
  $member = $members[0];
  $member["successful"] = true;
  session_start();
  $_SESSION['loggedin'] = true;
  $_SESSION['member'] = (object) $member;
} else {
  $member["successful"] = false;
  $member["message"] = "登入失敗";
}

echo json_encode($member);


