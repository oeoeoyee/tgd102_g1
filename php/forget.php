<?php

include("./PDO/connection_inc.php");
$MEMBER = json_decode(file_get_contents("php://input"), true);



if($MEMBER["newpassword"] !=""){
    $sql = " UPDATE MEMBER SET PASSWORD =:newpassword
            WHERE EMAIL = :email";

       $statement = $pdo->prepare($sql);
       $statement->bindValue(":email", $MEMBER["email"]);
       $statement->bindValue(":newpassword", $MEMBER["newpassword"]);



}else{
    $sql = " SELECT EMAIL
            FROM MEMBER 
            WHERE EMAIL = :email";

       $statement = $pdo->prepare($sql);
       $statement->bindValue(":email", $MEMBER["email"]);


}
    //    $MEMBER = json_decode(file_get_contents("php://input"), true);
    //        $sql = " SELECT EMAIL
    //                FROM MEMBER 
    //                WHERE EMAIL = :email";
    //    $statement = $pdo->prepare($sql);
    //    $statement->bindValue(":email", $MEMBER["email"]);
    //    $statement->bindValue(":newpassword", $MEMBER["newpassword"]);
       $statement->execute();
       $news = $statement->fetchAll();
       echo json_encode($news);

// include("./PDO/connection_inc.php");
//        //建立SQL語法
//        $sql = "SELECT * FROM  MEMBER WHERE ";

//        //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
//        $statement = $pdo->prepare($sql);
//        $statement->execute();
//        //抓出全部且依照順序封裝成一個二維陣列
//        $data = $statement->fetchAll();

//        echo json_encode($data);
// ?>


       