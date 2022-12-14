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

  mounted() {
    const ex_infoID = sessionStorage.getItem("ex_infoID");
    fetch(`./php/ex_info.php?ex_id=${ex_infoID}`)
      .then((resp) => resp.json())
      .then((resp) => {
        this.packages = resp;
      });
  },

  methods: {
    // 展覽 ID
    ex_infoID(e) {
      console.log(e.ID);
      sessionStorage.setItem("ex_infoID", e.ID);
    },
  },

  beforeCreate() {},

  updated() {
    // Swiper 套件
    new Swiper(".mySwiper", {
      slidesPerView: 1,
      centeredSlides: false,
      spaceBetween: 10,
      // 分頁小按鈕
      pagination: {
        el: ".ex_info_btn",
        clickable: true,
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".arrow-right",
        prevEl: ".arrow-left",
      },
      // 斷點
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    });
  },

  beforeUpdate() {
    this.packages.forEach((el) => {
      return (
        // 切割完回傳
        (el.MAIN_IMAGE = el.MAIN_IMAGE.split("|")),
        (el.OTHER_IMAGE = el.OTHER_IMAGE.split("|"))
      );
    });
    return;
  },
});
