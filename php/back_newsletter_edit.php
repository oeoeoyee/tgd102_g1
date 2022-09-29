<?php

include("./PDO/connection_inc.php");
       //建立SQL語法
       $NEWSLETTER = json_decode(file_get_contents("php://input"), true);
        // $sql = "SELECT * FROM INFORMATION";
        $isNew = $NEWSLETTER["ID"] == null || strlen($NEWSLETTER["ID"]) == 0;
        if($isNew){
                $sql = "INSERT INTO NEWSLETTER(SUBJECT,MAIL_DAY,CONTENT,STATE) values (:title,:start_day,:summer,:situation);";
        }else{
                $sql = "UPDATE NEWSLETTER SET SUBJECT = :title, MAIL_DAY = :start_day, CONTENT = :summer, STATE = :situation  WHERE ID = :id" ;   
        }
       
       
       
                //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
       $statement = $pdo->prepare($sql);
       if(!$isNew){
        $statement->bindValue(":id", $NEWSLETTER["ID"]);
       }
        $statement->bindValue(":title", $NEWSLETTER["title"]);
        $statement->bindValue(":start_day", $NEWSLETTER["start_day"]);
        $statement->bindValue(":summer", $NEWSLETTER["summer"]);
        $statement->bindValue(":situation", $NEWSLETTER["situation"]);
        $statement->execute();
        // $arr =new array();
        // echo json_encode("");
?>

