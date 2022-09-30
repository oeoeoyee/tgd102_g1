<?php
// 連線的 php
include("./PDO/connection_inc.php");
//---------------------------------------------------

// 前端送來的資料
$DB_info = json_decode(file_get_contents("php://input"), true);

// 1. 取得輸入欄位送來的值
// $keywords = htmlspecialchars($_GET["keywords"]);
$keywords = isset($_GET["keywords"]) ? $_GET["keywords"] : '';


// 2. 比對資料 選擇發送不同的 SQL 語法
//    $DB_info["tbName"] = HTML 傳來的 data-tbname="value" 內的值
//    不同 TABLE 發送搜尋不同 TABLE 的語法

//    請依照需求調整 SQL 語法 拜託了 >.O

// 沒有收到 keyword 就
if (isset($_GET["keywords"])) {
  switch ($DB_info["tbName"]) {
    case 'INFORMATION': // 消息
      $sql = "
      SELECT INFO_ID, INFO_TYPE, TITLE, CONTENT, DATE  
      FROM INFORMATION
      where
        INFO_TYPE like concat(:keywords, '%') 
        OR TITLE like concat(:keywords, '%')
        OR CONTENT like concat(:keywords, '%')
        OR DATE like concat(:keywords, '%');";
      break;

    case 'EVENTS':  // 特展
      $sql = "
      SELECT ID, start_date, end_date, name ,room
      FROM EVENTS_TEST
      where 
        ID like concat(:keywords, '%') 
        OR start_date like concat(:keywords, '%')
        OR end_date like concat(:keywords, '%')
        OR name like concat(:keywords, '%')
        OR room like concat(:keywords, '%');";
      break;

    case 'EXHIBITION': // 普展
      $sql = "
      SELECT ID, START_DAY, EXHIBITION_TYPE, NAME, ROOM  
      FROM EXHIBITION
      where 
        ID like concat(:keywords, '%') 
        OR START_DAY like concat(:keywords, '%') 
        OR EXHIBITION_TYPE like concat(:keywords, '%')
        OR NAME like concat(:keywords, '%')
        OR ROOM like concat(:keywords, '%');";
      break;
    case 'MEMBER': // 會員資料
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
      break;
    case 'ORDER': // 訂單資訊
      $sql = "
      SELECT o.ORDER_ID, o.ORDER_DAY, od.EXHIBITION_NAME, o.VISIT_DAY, o.PRICE, o.PAYMENT_TYPE, od.DELEGATE_NAME, o.PAYMENT_STATUS 
      FROM REVERSE.ORDER o join REVERSE.ORDER_DETAIL od 
      on o.ORDER_ID = od.ORDER_ID 
      where
        o.ORDER_ID like concat(:keywords, '%') 
        OR o.ORDER_DAY like concat(:keywords, '%') 
        OR od.EXHIBITION_NAME like concat(:keywords, '%')
        OR o.VISIT_DAY like concat(:keywords, '%')
        OR o.PRICE like concat(:keywords, '%')
        OR o.PAYMENT_TYPE like concat(:keywords, '%')
        OR od.DELEGATE_NAME like concat(:keywords, '%') 
        OR o.PAYMENT_STATUS like concat(:keywords, '%');";
      break;
    case 'SUB_LIST': // 訂閱
      $sql = "
      SELECT ID, NAME, MEMBER_ID, EMAIL, SUVSCRIPTION_DAY
      FROM SUB_LIST
      WHERE
        ID like concat(:keywords, '%') 
        OR NAME like concat(:keywords, '%') 
        OR MEMBER_ID like concat(:keywords, '%')
        OR EMAIL like concat(:keywords, '%')
        OR SUVSCRIPTION_DAY like concat(:keywords, '%');";
      break;
    case 'NEWSLETTER_LIST': //電子報
      $sql = "
      SELECT ID, SUBJECT, MAIL_DAY, STATE
      FROM NEWSLETTER
      where 
        ID like concat(:keywords, '%') 
        OR SUBJECT like concat(:keywords, '%') 
        OR MAIL_DAY like concat(:keywords, '%')
        OR STATE like concat(:keywords, '%');";
      break;

    default:
      # code... nothing
      break;
  };

  // 2. 將 關鍵字 放進 SQL 語法中

  $statement = $pdo->prepare($sql);
  $statement->bindValue(":keywords", $keywords); // 關鍵字
  $statement->execute();
  $data = $statement->fetchAll();

  // json_encode 轉換資料結構
  echo json_encode($data);
} else {
  // 有收到 tbName 就抓全部資料
  if (isset($DB_info["tbName"])) {
    switch ($DB_info["tbName"]) {
      case 'INFORMATION': // 消息
        $sql = "
      SELECT * 
      FROM INFORMATION 
      ORDER by INFO_ID desc;";
        break;

      case 'EVENTS':  // 特展
        $sql = "
      SELECT * 
      FROM EVENTS_TEST;";
        break;

      case 'EXHIBITION': // 普展
        $sql = "
      SELECT * 
      FROM EXHIBITION;";
        break;

      case 'MEMBER': // 會員資料
        $sql = "
      SELECT * 
      FROM MEMBER;";
        break;

      case 'ORDER': // 訂單資訊
        $sql = "
      SELECT o.ORDER_ID, o.ORDER_DAY, od.EXHIBITION_NAME, o.VISIT_DAY, o.PRICE, o.PAYMENT_TYPE, od.DELEGATE_NAME, o.PAYMENT_STATUS 
      FROM REVERSE.ORDER o join REVERSE.ORDER_DETAIL od 
      on o.ORDER_ID = od.ORDER_ID;";
        break;

      case 'SUB_LIST': // 訂閱
        $sql = "
      SELECT * 
      FROM SUB_LIST;";
        break;

      case 'NEWSLETTER_LIST': //電子報
        $sql = "
      SELECT * 
      FROM NEWSLETTER;";
        break;

      default:
        # code... nothing
        break;
    };
    $statement = $pdo->prepare($sql);
    $statement->execute();
    $data = $statement->fetchAll();
    echo json_encode($data);
  }
};



// 接法
// 
// HTML 需增加以下內容
// 
// 1. table 自訂屬性 data-tbname=""
// 
// 2. 搜尋欄位 id="keyWord" 套用 Vue 
//    範例
//    layout/search_component.html