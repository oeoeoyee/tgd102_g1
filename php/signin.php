<?php
include("./PDO/connection_inc.php");

// 接收前端傳來的JSON格式
$member = json_decode(file_get_contents("php://input"), true);

$sql = " 
    INSERT INTO MEMBER(NAME,EMAIL,PHONE,PASSWORD,REGISTER_DAY,SUBSCRIPTION)
    VALUES (?,?,?,?,now(),?);
";


$stmt = $pdo->prepare($sql);
$stmt->bindValue(1, $member["signin_name"]);
$stmt->bindValue(2, $member["signin_email"]);
$stmt->bindValue(3, $member["signin_phone"]);
$stmt->bindValue(4, $member["signin_pwd"]);
$stmt->bindValue(5, $member["signin_sub"] ? 1 : 0);
$stmt->execute();


// echo json_encode($stmt->);

if ($stmt->rowCount() != 0) {

    $sql = "
    SELECT *
    FROM MEMBER 
    WHERE EMAIL = ? and password = ? ;";
    $stmt = $pdo->prepare($sql);
    $stmt->bindValue(1, $member["signin_email"]);
    $stmt->bindValue(2, $member["signin_pwd"]);
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
