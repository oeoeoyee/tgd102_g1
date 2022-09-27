<?php
include("./PDO/connection_inc.php");
// 取得對應網頁給的 Table名 、 Column名
$DB_info = json_decode(file_get_contents("php://input"), true);
//---------------------------------------------------

// 1. 取得變數 
$keywords = htmlspecialchars($_GET["keywords"]);

// 2. 比對資料 選擇發送不同的 SQL 語法
// 判斷 Table 名稱 FOR '後台_消息管理' (O)
if ($DB_info["tbName"] == 'INFORMATION') {
  // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
  $sql = "
  SELECT INFO_ID, INFO_TYPE, TITLE, CONTENT, DATE  
  FROM INFORMATION
  where 
    INFO_TYPE like concat(:keywords, '%') 
    OR TITLE like concat(:keywords, '%')
    OR CONTENT like concat(:keywords, '%')
    OR DATE like concat(:keywords, '%');";
  // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
};

// 判斷 Table 名稱 FOR '後台_特別展覽' (O)
if ($DB_info["tbName"] == 'EVENTS') {
  // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
  $sql = "
  SELECT ID, start_date, end_date, name ,room
  FROM EVENTS_TEST
  where 
    ID like concat(:keywords, '%') 
    OR start_date like concat(:keywords, '%')
    OR end_date like concat(:keywords, '%')
    OR name like concat(:keywords, '%')
    OR room like concat(:keywords, '%');";
  // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
};

// 判斷 Table 名稱 FOR '後台_常設展覽' (O)
if ($DB_info["tbName"] == 'EXHIBITION') {
  // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
  $sql = "
  SELECT ID, START_DAY, EXHIBITION_TYPE, NAME, ROOM  
  FROM EXHIBITION
  where 
    ID like concat(:keywords, '%') 
    OR START_DAY like concat(:keywords, '%') 
    OR EXHIBITION_TYPE like concat(:keywords, '%')
    OR NAME like concat(:keywords, '%')
    OR ROOM like concat(:keywords, '%');";
  // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
};

// 判斷 Table 名稱 FOR '後台_會員管理' (O)
if ($DB_info["tbName"] == 'MEMBER') {
  // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
  $sql = "
  SELECT MEMBER_ID, REGISTER_DAY, LEVEL, NAME, PHONE, EMAIL 
  FROM MEMBER
  where 
    MEMBER_ID like concat(:keywords, '%') 
    OR REGISTER_DAY like concat(:keywords, '%') 
    OR LEVEL like concat(:keywords, '%')
    OR NAME like concat(:keywords, '%')
    OR PHONE like concat(:keywords, '%')
    OR EMAIL like concat(:keywords, '%');";
  // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
};

// 判斷 Table 名稱 FOR '後台_訂單管理' ( 尚無金額 )
if ($DB_info["tbName"] == 'ORDER') {
  // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
  $sql = "
  SELECT o.ORDER_ID, o.ORDER_DAY, od.EXHIBITION_NAME, o.VISIT_DAY, o.PAYMENT_TYPE, od.DELEGATE_NAME, o.PAYMENT_STATUS 
  FROM REVERSE.ORDER o join REVERSE.ORDER_DETAIL od 
  on o.ORDER_ID = od.ORDER_ID 
  where
    o.ORDER_ID like concat(:keywords, '%') 
    OR o.ORDER_DAY like concat(:keywords, '%') 
    OR od.EXHIBITION_NAME like concat(:keywords, '%')
    OR o.VISIT_DAY like concat(:keywords, '%')
    OR o.PAYMENT_TYPE like concat(:keywords, '%')
    OR od.DELEGATE_NAME like concat(:keywords, '%') 
    OR o.PAYMENT_STATUS like concat(:keywords, '%');";
  // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
};

// 判斷 Table 名稱 FOR '後台_訂閱名單' (O)
if ($DB_info["tbName"] == 'SUB_LIST') {
  // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
  $sql = "
  SELECT ID, NAME, MEMBER_ID, EMAIL, SUVSCRIPTION_DAY
  FROM SUB_LIST
  WHERE
    ID like concat(:keywords, '%') 
    OR NAME like concat(:keywords, '%') 
    OR MEMBER_ID like concat(:keywords, '%')
    OR EMAIL like concat(:keywords, '%')
    OR SUVSCRIPTION_DAY like concat(:keywords, '%');";
  // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
};

// 判斷 Table 名稱 FOR '後台_電子報清單' (O)
if ($DB_info["tbName"] == 'NEWSLETTER_LIST') {
  // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
  $sql = "
  SELECT ID, SUBJECT, MAIL_DAY, STATE
  FROM NEWSLETTER
  where 
    ID like concat(:keywords, '%') 
    OR SUBJECT like concat(:keywords, '%') 
    OR MAIL_DAY like concat(:keywords, '%')
    OR STATE like concat(:keywords, '%');";
  // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
};

// 2. 將變數放進 SQL 語法中
$statement = $pdo->prepare($sql);
$statement->bindValue(":keywords", $keywords); // 關鍵字
$statement->execute();
$data = $statement->fetchAll();

// json_encode 轉換資料結構
echo json_encode($data);


// 接法
// HTML 需增加以下內容
// table 自訂屬性 data-tbname=""

// 搜尋欄位 id="keyWord" 套用 Vue 
// 範例
// <input type="text" class="back_search" id="keyWord" v-model="keyWord" @keyup.13="enter_push" placeholder="查詢關鍵字...">