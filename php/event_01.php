<?php

include("./PDO/connection_inc.php");
       //建立SQL語法
       // $sql = "SELECT * FROM EVENT";
       // $statement = $pdo->prepare($sql);
       // $statement->execute();
       // $data = $statement->fetchAll();
       // echo json_encode($data);
       $news_id = $_GET["id"];
       $EVENT = json_decode(file_get_contents("php://input"), true);
           $sql = " SELECT *
                   FROM EVENT 
                   WHERE ID = :id ";
       $statement = $pdo->prepare($sql);
       $statement->bindValue(":id", $news_id);
       $statement->execute();
       $news = $statement->fetchAll();
       echo json_encode($news);


       
?>