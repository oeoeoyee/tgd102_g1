const member = document.querySelector("tbody");
fetch("./php/member.php")
  .then((resp) => resp.json())
  .then((resp) => {
    if (resp.successful == "無登入資訊") {
      location.replace("./login.html");
    } else {
    }
  });
