<?php
//    學校開發環境
// -----------------------------------------
$URL = "mysql:host=192.168.0.109;dbname=REVERSE"; // mysql:host= [ SQL 的 IP 位置 ] ; dbname= [ DB 名稱 ] "
$USERNAME = "reverse"; // username
$PASSWORD = "P@ssw0rd"; // password
$pdo = new PDO($URL, $USERNAME, $PASSWORD);
// -----------------------------------------
//
//
//    校外開發環境 ( 需建立個人電腦端測試用 DB [REVERSE_TEST] ) 
// -----------------------------------------
// $URL = "mysql:host=localhost;dbname=REVERSE_TEST";
// // $URL = "mysql:host=localhost;dbname=REVERSE";
// $USERNAME = "root";
// $PASSWORD = "password";
// $pdo = new PDO($URL, $USERNAME, $PASSWORD);
// -----------------------------------------

//    TIBAME上線用
// -----------------------------------------
// $db_url = "mysql:host=127.0.0.1;dbname=tibamefe_tgd102g1;charset=utf8";
// $db_user = "tibamefe_since2021";
// $db_pass = "vwRBSb.j&K#E";
// // $db_select = "tibamefe_tgd102g1";
// $pdo = new PDO($db_url, $db_user, $db_pass);
// -----------------------------------------




?>