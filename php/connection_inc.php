<?php
// mysql:host=SQL的IP位置;dbname=DB名稱
$URL = "mysql:host=172.20.10.6;dbname=REVERSE";
// username
$USERNAME = "reverse";
// password
$PASSWORD = "P@ssw0rd";
$pdo = new PDO($URL, $USERNAME, $PASSWORD);
?>