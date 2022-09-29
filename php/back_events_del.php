<?php

    include("./PDO/connection_inc.php");
    $delID = $_GET['id'];
    
    // $sql = " SELECT INFO_ID, INFO_TYPE, TITLE, CONTENT, IMAGE, DATE FROM INFORMATION ";
    // $sql = " DELETE FROM INFORMATION WHERE INFO_ID = :id ";
    $sql = " UPDATE EVENTS_TEST SET `situation` = '已下架' WHERE ID = :id ";
    
    // $id = json_to_obj()["INFO_ID"];
    $stmt = $pdo->prepare($sql);
    $stmt->bindValue(":id", $delID);
    $stmt->execute();

    // fetchAll() 取回執行結果的方法
    $back_events = $stmt->fetchAll();
    // echo傳回去json檔
    echo json_encode($back_events);

?>