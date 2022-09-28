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
$stmt->bindValue(5, $member["sub"] ? 1 : 0); 
$stmt->execute();


// echo json_encode($stmt->);

if($stmt->rowCount() == 1 ){
    $member["successful"] = true;
    $member["message"] = "註冊成功";
}else{
    $member["successful"] = false;
    $member["message"] = "註冊失敗";
}
echo json_encode($member);

?>