<?php
// 清 COOKIE
if (isset($_COOKIE['PHPSESSID'])) {
    unset($_COOKIE['PHPSESSID']);
    setcookie('PHPSESSID', null, -1, '/');
    return true;
} else {
    return false;
}
// 清 SESSION
session_destroy();
