<?php
include("./PDO/connection_inc.php");

// 接收前端傳來的JSON格式
$member = json_decode(file_get_contents("php://input"), true);

$sql = " 
    insert into REVERSE.MEMBER(name,email,phone,password,register_day,subscription)
    values (?,?,?,?,now(),?) 
";


$stmt = $pdo->prepare($sql);
$stmt->bindValue(1, $member["name"]); 
$stmt->bindValue(2, $member["email"]); 
$stmt->bindValue(3, $member["phone"]); 
$stmt->bindValue(4, $member["pwd"]); 
$stmt->bindValue(5, $member["sub"]); 
$stmt->execute();


echo json_encode($stmt->fetchAll()[0]);

?>