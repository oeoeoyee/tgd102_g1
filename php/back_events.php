<?php

include("./PDO/connection_inc.php");
       //建立SQL語法
       $EVENT = json_decode(file_get_contents("php://input"), true);
        // $sql = "SELECT * FROM INFORMATION";
        $sql = "INSERT INTO EVENT(eng_title,title,start_day,end_day,room,main_img,main_content,events_img,events_title,events_content,artist_title,artist_img,artist_content,pj_title1,pj_img1,pj_content1,pj_title2,pj_img2,pj_content2,pj_title3,pj_img3,pj_content3,situation)
          values (:eng_title,:title,:start_day,:end_day,:room,:main_img,:main_content,:events_img,:events_title,:events_content,:artist_title,:artist_img,:artist_content,:pj_title1,:pj_img1,:pj_content1,:pj_title2,:pj_img2,:pj_content2,:pj_title3,:pj_img3,:pj_content3,:situation)";
        // $sql = "INSERT INTO EVENT(eng_title)
        //  values ('aa')";


       //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
       $statement = $pdo->prepare($sql);
        $statement->bindValue(":eng_title", $EVENT["eng_title"]);
        $statement->bindValue(":title", $EVENT["title"]);
        $statement->bindValue(":start_day", $EVENT["start_day"]);
        $statement->bindValue(":end_day", $EVENT["end_day"]);
        $statement->bindValue(":room", $EVENT["room"]);
        $statement->bindValue(":main_img", $EVENT["main_img"]);
        $statement->bindValue(":main_content", $EVENT["main_content"]);
        $statement->bindValue(":events_img", $EVENT["events_img"]);
        $statement->bindValue(":events_title", $EVENT["events_title"]);
        $statement->bindValue(":events_content", $EVENT["events_content"]);
        $statement->bindValue(":artist_img", $EVENT["artist_img"]);
        $statement->bindValue(":artist_title", $EVENT["artist_title"]);
        $statement->bindValue(":artist_content", $EVENT["artist_content"]);
        $statement->bindValue(":pj_title1", $EVENT["pj_title1"]);
        $statement->bindValue(":pj_img1", $EVENT["pj_img1"]);
        $statement->bindValue(":pj_content1", $EVENT["pj_content1"]);
        $statement->bindValue(":pj_title2", $EVENT["pj_title2"]);
        $statement->bindValue(":pj_img2", $EVENT["pj_img2"]);
        $statement->bindValue(":pj_content2", $EVENT["pj_content2"]);
        $statement->bindValue(":pj_title3", $EVENT["pj_title3"]);
        $statement->bindValue(":pj_img3", $EVENT["pj_img3"]);
        $statement->bindValue(":pj_content3", $EVENT["pj_content3"]);
        $statement->bindValue(":situation", $EVENT["situation"]);
        $statement->execute();
        
?>

