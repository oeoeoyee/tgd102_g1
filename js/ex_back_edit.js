// register.addEventListener("click", () => {
//   const fr = new FileReader();
//   fr.addEventListener("load", (e) => {
//     // 路徑需調整
//     fetch("./php/ex_back_edit.php", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         email: email.value,
//         password: password.value,
//         name: name.value,
//       }),
//     })
//       .then((resp) => resp.json())
//       .then((body) => {
//         console.log(body);
//       });
//   });
// });
