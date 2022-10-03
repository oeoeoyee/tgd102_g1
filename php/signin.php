<?php
include("./PDO/connection_inc.php");

// 接收前端傳來的JSON格式
$member = json_decode(file_get_contents("php://input"), true);

$sql = " 
    insert into MEMBER(NAME,EMAIL,PHONE,PASSWORD,REGISTER_DAY,SUBSCRIPTION)
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

if ($stmt->rowCount() == 1) {

    $sql = "
    select *
    from MEMBER where 
    EMAIL = ? and password = ?;
    ";
    $stmt = $pdo->prepare($sql);
    $stmt->bindValue(1, $member["email"]);
    $stmt->bindValue(2, $member["pwd"]);
    $stmt->execute();

    $member_ID = $stmt->fetchAll();

    if (count($member_ID) != 0) {
        $member = $member_ID[0];
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
            "LEVEL" => $member["LEVEL"],
        ]);
    } else {
        $resp_body = (object) [
            "successful" => false,
            "message" => "信箱或密碼錯誤"
        ];
        echo json_encode($resp_body);
    }
}
