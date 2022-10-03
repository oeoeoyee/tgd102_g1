<?php
    include("./PDO/connection_inc.php");
    $news_id = $_GET["id"];
    $EVENT = json_decode(file_get_contents("php://input"), true);

    // print_r ($information);
    
    // $news_id = htmlspecialchars($_GET["id"]);
    // echo ($news_id);

    // -----------------------------------------------------
        $sql = " SELECT *
                FROM EVENT 
                WHERE ID = :id ";
    $statement = $pdo->prepare($sql);
    $statement->bindValue(":id", $news_id);
    $statement->execute();

    // fetchAll() 取回執行結果的方法
    $news = $statement->fetchAll();
    echo json_encode($news);
?>