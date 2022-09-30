<?php

include("./PDO/connection_inc.php");
       //建立SQL語法
       $INFORMATION = json_decode(file_get_contents("php://input"), true);
        // $sql = "SELECT * FROM INFORMATION";
        $isNew = $INFORMATION["INFO_ID"] == null || strlen($INFORMATION["INFO_ID"]) == 0;
        if($isNew){
            $sql = "INSERT INTO INFORMATION(TITLE,DATE,IMAGE,CONTENT,INFO_TYPE,TOP,situation) values (:TITLE,:DATE,:IMAGE,:CONTENT,:INFO_TYPE,:TOP,:situation)";
        }else{
            $sql = "UPDATE INFORMATION SET TITLE = :TITLE,DATE = :DATE,IMAGE = :IMAGE, CONTENT = :CONTENT, INFO_TYPE = :INFO_TYPE, TOP = :TOP, situation = :situation WHERE INFO_ID = :INFO_ID" ;
        }
        

       //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
       $statement = $pdo->prepare($sql);
       if(!$isNew){
        $statement->bindValue(":INFO_ID", $INFORMATION["INFO_ID"]);
       }
        $statement->bindValue(":TITLE", $INFORMATION["TITLE"]);
        $statement->bindValue(":DATE", $INFORMATION["DATE"]);
        $statement->bindValue(":IMAGE", $INFORMATION["IMAGE"]);
        $statement->bindValue(":CONTENT", $INFORMATION["CONTENT"]);
        $statement->bindValue(":INFO_TYPE", $INFORMATION["INFO_TYPE"]);
        $statement->bindValue(":TOP", $INFORMATION["TOP"]);
        $statement->bindValue(":situation", $INFORMATION["situation"]);
        $statement->execute();
        // $arr =new array();
        echo json_encode("");
        // $result_count = $statement->rowCount();
      


    //    //---------------------------------------------------

    //    //建立SQL
    //    $sql = "INSERT INTO member(Account, PWD, CreateDate) VALUES ('王小明', 'abc123', NOW())";

    //    //執行
    //    $pdo->exec($sql);
    

    //    echo "新增成功!"

?>

