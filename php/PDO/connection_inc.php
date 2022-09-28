<?php
//    學校開發環境
// -----------------------------------------
$URL = "mysql:host=192.168.0.190;dbname=REVERSE"; // mysql:host= [ SQL 的 IP 位置 ] ; dbname= [ DB 名稱 ] "
$USERNAME = "reverse"; // username
$PASSWORD = "P@ssw0rd"; // password
$pdo = new PDO($URL, $USERNAME, $PASSWORD);
// -----------------------------------------
//
//
//    校外開發環境 ( 需建立個人電腦端測試用 DB ) 
// -----------------------------------------
// $URL = "mysql:host=localhost;dbname=REVERSE_TEST";
// $USERNAME = "root";
// $PASSWORD = "password";
// $pdo = new PDO($URL, $USERNAME, $PASSWORD);
// -----------------------------------------
?>