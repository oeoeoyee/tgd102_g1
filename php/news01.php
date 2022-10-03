<?php
    include("./PDO/connection_inc.php");
    // $news_id = $_GET["id"];
    $information = json_decode(file_get_contents("php://input"), true);

    // print_r ($information);
    
    // $news_id = htmlspecialchars($_GET["id"]);
    // echo ($news_id);

    // -----------------------------------------------------
    // $sql = " SELECT INFO_ID, INFO_TYPE, TITLE, CONTENT, IMAGE, DATE, TOP, SITUATION
    //          FROM INFORMATION 
    //          WHERE INFO_ID = :id or INFO_ID = (:id+1) or INFO_ID = (:id-1)";

    $sql = " SELECT INFO_ID, INFO_TYPE, TITLE, CONTENT, IMAGE, DATE, TOP, SITUATION
             FROM INFORMATION 
             WHERE SITUATION = '上線'
             ORDER BY INFO_ID desc";

    $statement = $pdo->prepare($sql);
    // $statement->bindValue(":id", $news_id);
    $statement->execute();

    // fetchAll() 取回執行結果的方法
    $news = $statement->fetchAll();

    echo json_encode($news);
?>