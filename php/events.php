<?php

include("./PDO/connection_inc.php");
       //建立SQL語法
       $sql = "SELECT * FROM EVENTS_TEST ORDER by start_date desc";

       //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
       $statement = $pdo->prepare($sql);
       $statement->execute();
       //抓出全部且依照順序封裝成一個二維陣列
       $data = $statement->fetchAll();

       echo json_encode($data);
?>