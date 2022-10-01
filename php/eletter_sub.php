<?php
    include("./PDO/connection_inc.php");
    // $insert_email = $_GET["email", "date"];
    $information = json_decode(file_get_contents("php://input"), true);
        
    // -----------------------------------------------------
    $sql = " INSERT into SUB_LIST (EMAIL, SUVSCRIPTION_DAY) 
             VALUES (:email, now());";
    $statement = $pdo->prepare($sql);
    $statement->bindValue(":email", $information["email"]);
    $statement->execute();

    // fetchAll() 取回執行結果的方法
    $sub_email = $statement->fetchAll();
    echo json_encode($sub_email);
?>