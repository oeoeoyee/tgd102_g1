<?php

include("./PDO/connection_inc.php");
       //建立SQL語法
       $EXHIBITION = json_decode(file_get_contents("php://input"), true);
        // $sql = "SELECT * FROM INFORMATION";
        $sql = "INSERT INTO EXHIBITION(NAME,EXHIBITION_TYPE,START_DAY,END_DAY,MAIN_TITLE,ROOM,INTRODUCTION,MAIN_IMAGE,SUB_IMAGE,OTHER_IMAGE,situation)
         values (:NAME,:EXHIBITION_TYPE,:START_DAY,:END_DAY,:MAIN_TITLE,:ROOM,:INTRODUCTION,:MAIN_IMAGE,:SUB_IMAGE,:OTHER_IMAGE,:situation)";

       //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
       $statement = $pdo->prepare($sql);
        $statement->bindValue(":NAME", $EXHIBITION["NAME"]);
        $statement->bindValue(":EXHIBITION_TYPE", $EXHIBITION["EXHIBITION_TYPE"]);
        $statement->bindValue(":START_DAY", $EXHIBITION["START_DAY"]);
        $statement->bindValue(":END_DAY", $EXHIBITION["END_DAY"]);
        $statement->bindValue(":MAIN_TITLE", $EXHIBITION["MAIN_TITLE"]);
        $statement->bindValue(":ROOM", $EXHIBITION["ROOM"]);
        $statement->bindValue(":INTRODUCTION", $EXHIBITION["INTRODUCTION"]);
        $statement->bindValue(":MAIN_IMAGE", $EXHIBITION["MAIN_IMAGE"]);
        $statement->bindValue(":SUB_IMAGE", $EXHIBITION["SUB_IMAGE"]);
        $statement->bindValue(":OTHER_IMAGE", $EXHIBITION["OTHER_IMAGE"]);
        $statement->bindValue(":situation", $EVENT["situation"]);
        $statement->execute();
        
        // $result_count = $statement->rowCount();
      


    //    //---------------------------------------------------

    //    //建立SQL
    //    $sql = "INSERT INTO member(Account, PWD, CreateDate) VALUES ('王小明', 'abc123', NOW())";

    //    //執行
    //    $pdo->exec($sql);
    // echo json_decode($INFORMATION)

    //    echo "新增成功!"

?>

