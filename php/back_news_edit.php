<?php

include("./PDO/connection_inc.php");
       //建立SQL語法
       $INFORMATION = json_decode(file_get_contents("php://input"), true);
        // $sql = "SELECT * FROM INFORMATION";
        $sql = "INSERT INTO INFORMATION(TITLE,DATE,IMAGE,CONTENT,INFO_TYPE,TOP) values (:TITLE,:DATE,:IMAGE,:CONTENT,:INFO_TYPE,:TOP)";

       //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
       $statement = $pdo->prepare($sql);
        $statement->bindValue(":TITLE", $INFORMATION["TITLE"]);
        $statement->bindValue(":DATE", $INFORMATION["DATE"]);
        $statement->bindValue(":IMAGE", $INFORMATION["IMAGE"]);
        $statement->bindValue(":CONTENT", $INFORMATION["CONTENT"]);
        $statement->bindValue(":INFO_TYPE", $INFORMATION["INFO_TYPE"]);
        $statement->bindValue(":TOP", $INFORMATION["TOP"]);
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

