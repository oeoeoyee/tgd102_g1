<?php
    include("./PDO/connection_inc.php");
    // $news_id = $_GET["news_id"];
    // $information = json_decode(file_get_contents("php://input"), true);

    // -----------------------------------------------------
    $sql = " SELECT INFO_ID, INFO_TYPE, TITLE, CONTENT, DATE FROM INFORMATION 
            ORDER BY INFO_ID desc
            LIMIT 3";
    $statement = $pdo->prepare($sql);
    // $statement->bindValue(":id", $news_id);
    $statement->execute();

    // fetchAll() 取回執行結果的方法
    $news = $statement->fetchAll();

    echo json_encode($news);
    
    // echo json_encode($info);
    //將二維陣列取出顯示其值
    // foreach($data as $index => $row){
    //     echo $row["INFO_ID"];   //欄位名稱
    //     echo " / ";
    //     echo $row["INFO_TYPE"];    //欄位名稱
    //     echo " / ";
    //     echo $row["TITLE"];    //欄位名稱
    //     echo " / ";
    //     echo $row["CONTENT"];    //欄位名稱
    //     echo " / ";
    //     echo $row["IMAGE"];    //欄位名稱
    //     echo " / ";
    //     echo $row["DATE"];    //欄位名稱
    //     echo " <br> ";
    // }

    // // 老師講義 p.132
    // // bindParam、bindValue 會檢查數據格式 , 防止SQL Injection
    // // bindValue ( $parameter , $value or $variable)；下方 bindParam() 第二個參數只能是變數
    // // execute() 是執行方法
    // $statement->bindValue(":INFO_ID", $information);
    // // $statement->bindValue(":TITLE", $information["TITLE"]);
    // $statement->execute();

    // session_start();
    // $_SESSION["info_id"] = ;
?>