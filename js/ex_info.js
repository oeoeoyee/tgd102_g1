Vue.component("ex_info_img", {
  props: ["msg"],

  template: `
      <div class="ex_info_art_item">
        <img :src="'./images/'+ msg.OTHER_IMAGE[0]" class="ex_art_item-0" />
        <img :src="'./images/'+ msg.OTHER_IMAGE[1]" class="ex_art_item-1" />
        <img :src="'./images/'+ msg.OTHER_IMAGE[2]" class="ex_art_item-2" />
        <img :src="'./images/'+ msg.OTHER_IMAGE[3]" class="ex_art_item-3" />
        <img :src="'./images/'+ msg.OTHER_IMAGE[4]" class="ex_art_item-4" />
      </div>
      `,
});

new Vue({
  el: "#ex_app",

  data: {
    // 空陣列 等資料
    packages: [],
  },

  beforeCreate() {
    fetch("./php/ex_info.php?ex_id=1", {
      mode: "no-cors",
    })
      .then((resp) => resp.json())
      .then((resp) => {
        this.packages = resp;
      });
  },

  beforeUpdate() {
    let splite = [this.packages];
    splite.map((el) => {
      return (
        (el.MAIN_IMAGE = el.MAIN_IMAGE.split("|")),
        (el.OTHER_IMAGE = el.OTHER_IMAGE.split("|"))
      );
    });
    return;
  },
});
