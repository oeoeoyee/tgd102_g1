<?php
include("./PDO/connection_inc.php");

// 接收前端傳來的JSON格式
$member = json_decode(file_get_contents("php://input"), true);

$sql = " SELECT member_id,name,email,phone,register_day,level,EXPIRE_DAY
        from REVERSE.MEMBER
        ";

$stmt = $pdo->prepare($sql);
// $stmt->bindValue(1, $member["name"]);
// $stmt->bindValue(":password", $member["password"]);
$stmt->execute();

echo json_encode($stmt->fetchAll()[1]);

?>