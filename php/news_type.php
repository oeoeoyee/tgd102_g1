<?php
    include("./PDO/connection_inc.php");
    $info_type = $_GET["type"];
    // $information = json_decode(file_get_contents("php://input"), true);

    // -----------------------------------------------------
    $sql = " SELECT INFO_ID, INFO_TYPE, TITLE, CONTENT, IMAGE, DATE
             FROM INFORMATION 
             WHERE INFO_TYPE = :type
             ORDER BY INFO_ID desc";

    $statement = $pdo->prepare($sql);
    $statement->bindValue(":type", $info_type);
    $statement->execute();

    // fetchAll() 取回執行結果的方法
    $informations = $statement->fetchAll();

    echo json_encode($informations);

?>