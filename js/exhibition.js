gsap.registerPlugin(ScrollTrigger); // GSAP

let exhibition_vue = new Vue({
  el: "#exhibition_vue",
  data: {
    ex_Array: [],
  },

  mounted: function () {
    fetch("./php/ex_info.php")
      .then((resp) => resp.json())
      .then((resp) => {
        this.ex_Array = resp;
      });
  },

  methods: {
    // 展覽 ID
    ex_infoID(e) {
      // console.log(e.ID);
      sessionStorage.setItem("ex_infoID", e.ID);
    },
  },

  updated() {
    // 側邊欄淡去
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".ex_img8",
          start: "-50%",
          end: "-50%",
          scrub: 1,
        },
      })
      .fromTo(
        ".sidebarNav",
        {
          opacity: 1,
        },
        {
          opacity: 0,
        }
      );
    // GSAP
    if (780 < document.body.scrollWidth) {
      // L // R
      // BANNER 1
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".ex_img1 h3",
            start: "-=800",
            end: "-=800",
            scrub: 3,
          },
        })
        .fromTo(
          ".ex_img1 h3",
          {
            x: -100,
            opacity: 0,
          },
          {
            duration: 2,
            ease: "sine.inOut",

            x: 0,
            opacity: 1,
          }
        );
      gsap // R
        .timeline({
          scrollTrigger: {
            trigger: [".ex_img1 h4", ".ex_img1 h5"],
            start: "-=1000",
            end: "-=1000",
            scrub: 3,
          },
        })
        .fromTo(
          [".ex_img1 h4", ".ex_img1 h5"],
          {
            x: 100,
            opacity: 0,
          },
          {
            duration: 2,
            ease: "sine.inOut",

            x: 0,
            opacity: 1,
          }
        );

      // BANNER 2
      gsap // L
        .timeline({
          scrollTrigger: {
            trigger: [".ex_img2 h4", ".ex_img2 h5"],
            start: "-=1000",
            end: "-=1000",
            scrub: 3,
          },
        })
        .fromTo(
          [".ex_img2 h4", ".ex_img2 h5"],
          {
            x: -100,
            opacity: 0,
          },
          {
            duration: 2,
            ease: "sine.inOut",

            x: 0,
            opacity: 1,
          }
        );
      gsap // R
        .timeline({
          scrollTrigger: {
            trigger: ".ex_img2 h3",
            start: "-=800",
            end: "-=800",
            scrub: 3,
          },
        })
        .fromTo(
          ".ex_img2 h3",
          {
            x: 100,
            opacity: 0,
          },
          {
            duration: 2,
            ease: "sine.inOut",

            x: 0,
            opacity: 1,
          }
        );

      // BANNER 3
      gsap // R
        .timeline({
          scrollTrigger: {
            trigger: ".ex_img3 h3",
            start: "-=800",
            end: "-=800",
            scrub: 3,
          },
        })
        .fromTo(
          ".ex_img3 h3",
          {
            x: -100,
            opacity: 0,
          },
          {
            duration: 2,
            ease: "sine.inOut",

            x: 0,
            opacity: 1,
          }
        );
      gsap // L
        .timeline({
          scrollTrigger: {
            trigger: [".ex_img3 h4", ".ex_img3 h5"],
            start: "-=1000",
            end: "-=1000",
            scrub: 3,
          },
        })
        .fromTo(
          [".ex_img3 h4", ".ex_img3 h5"],
          {
            x: 100,
            opacity: 0,
          },
          {
            duration: 2,
            ease: "sine.inOut",

            x: 0,
            opacity: 1,
          }
        );

      // BANNER 4
      gsap // L
        .timeline({
          scrollTrigger: {
            trigger: [".ex_img4 h4", ".ex_img4 h5"],
            start: "-=1000",
            end: "-=1000",
            scrub: 3,
          },
        })
        .fromTo(
          [".ex_img4 h4", ".ex_img4 h5"],
          {
            x: -100,
            opacity: 0,
          },
          {
            duration: 2,
            ease: "sine.inOut",

            x: 0,
            opacity: 1,
          }
        );
      gsap // R
        .timeline({
          scrollTrigger: {
            trigger: ".ex_img4 h3",
            start: "-=800",
            end: "-=800",
            scrub: 3,
          },
        })
        .fromTo(
          ".ex_img4 h3",
          {
            x: 100,
            opacity: 0,
          },
          {
            duration: 2,
            ease: "sine.inOut",

            x: 0,
            opacity: 1,
          }
        );

      // BANNER 5
      gsap // R
        .timeline({
          scrollTrigger: {
            trigger: ".ex_img5 h3",
            start: "-=800",
            end: "-=800",
            scrub: 3,
          },
        })
        .fromTo(
          ".ex_img5 h3",
          {
            x: -100,
            opacity: 0,
          },
          {
            duration: 2,
            ease: "sine.inOut",

            x: 0,
            opacity: 1,
          }
        );
      gsap // L
        .timeline({
          scrollTrigger: {
            trigger: [".ex_img5 h4", ".ex_img5 h5"],
            start: "-=1000",
            end: "-=1000",
            scrub: 3,
          },
        })
        .fromTo(
          [".ex_img5 h4", ".ex_img5 h5"],
          {
            x: 100,
            opacity: 0,
          },
          {
            duration: 2,
            ease: "sine.inOut",

            x: 0,
            opacity: 1,
          }
        );

      // BANNER 6
      gsap // L
        .timeline({
          scrollTrigger: {
            trigger: ".ex_img6 h3",
            start: "-=800",
            end: "-=800",
            scrub: 3,
          },
        })
        .fromTo(
          ".ex_img6 h3",
          {
            x: -100,
            opacity: 0,
          },
          {
            duration: 2,
            ease: "sine.inOut",

            x: 0,
            opacity: 1,
          }
        );
      gsap // R
        .timeline({
          scrollTrigger: {
            trigger: [".ex_img6 h4", ".ex_img6 h5"],
            start: "-=1000",
            end: "-=1000",
            scrub: 3,
          },
        })
        .fromTo(
          [".ex_img6 h4", ".ex_img6 h5"],
          {
            x: 100,
            opacity: 0,
          },
          {
            duration: 2,
            ease: "sine.inOut",

            x: 0,
            opacity: 1,
          }
        );

      // BANNER 7
      gsap // L
        .timeline({
          scrollTrigger: {
            trigger: [".ex_img7 h4", ".ex_img7 h5"],
            start: "-=1000",
            end: "-=1000",
            scrub: 3,
          },
        })
        .fromTo(
          [".ex_img7 h4", ".ex_img7 h5"],
          {
            x: -100,
            opacity: 0,
          },
          {
            duration: 2,
            ease: "sine.inOut",

            x: 0,
            opacity: 1,
          }
        );
      gsap // R
        .timeline({
          scrollTrigger: {
            trigger: ".ex_img7 h3",
            start: "-=800",
            end: "-=800",
            scrub: 3,
          },
        })
        .fromTo(
          ".ex_img7 h3",
          {
            x: 100,
            opacity: 0,
          },
          {
            duration: 2,
            ease: "sine.inOut",

            x: 0,
            opacity: 1,
          }
        );

      // BANNER 8
      gsap // L
        .timeline({
          scrollTrigger: {
            trigger: ".ex_img8 h3",
            start: "-=800",
            end: "-=800",
            scrub: 3,
          },
        })
        .fromTo(
          ".ex_img8 h3",
          {
            x: -100,
            opacity: 0,
          },
          {
            duration: 2,
            ease: "sine.inOut",

            x: 0,
            opacity: 1,
          }
        );
      gsap // R
        .timeline({
          scrollTrigger: {
            trigger: [".ex_img8 h4", ".ex_img8 h5"],
            start: "-=1000",
            end: "-=1000",
            scrub: 3,
          },
        })
        .fromTo(
          [".ex_img8 h4", ".ex_img8 h5"],
          {
            x: 100,
            opacity: 0,
          },
          {
            duration: 2,
            ease: "sine.inOut",

            x: 0,
            opacity: 1,
          }
        );
    }

    // 出現範圍
    var topSec = document.querySelectorAll(".top");
    $(window).scroll(function () {
      var topPos = $(topSec).offset().top;
      var topBot = topPos + $(topSec).outerHeight(true);

      if ($(window).scrollTop() > topBot) {
        $(".sidebarNav").addClass("sidebarNavIn");
      } else {
        $(".sidebarNav").removeClass("sidebarNavIn");
      }
    });

    // slidebar的 li 按鈕
    var sidebarNavButton = document.querySelectorAll(".sidebarNavItem");
    // 展覽的 li
    var sidebarNavLi = document.querySelectorAll(".section");

    var header = document.querySelector("header");

    // 抵達時變化 -> 抵達前
    $(sidebarNavLi).each(function (i) {
      var navSec = sidebarNavLi[i];
      var navBut = sidebarNavButton[i];

      $(window).scroll(function () {
        var navPos = $(navSec).offset().top;
        var secBot = navPos + $(navSec).outerHeight(true);
        var headerBot = $(header).outerHeight(true) * 3;

        if (
          $(this).scrollTop() > navPos - headerBot &&
          $(this).scrollTop() < secBot - headerBot
        ) {
          $(navBut).css("background-color", "#AE2000");
          $(navBut).find("div>p").css("display", "block");
          $(navSec).find("div").css("filter", "brightness(100%)");
        } else {
          $(navBut).css("background-color", "initial");
          $(navBut).find("div>p").css("display", "none");
          $(navSec).find("div").css("filter", "brightness(40%)");
        }
      });
    });

    // 錨點
    $(document).ready(function () {
      $(".scrollLink").on("click", function (e) {
        if (this.hash !== "") {
          e.preventDefault();

          var hash = this.hash;

          $("html, body").animate(
            {
              scrollTop: $(hash).offset().top - 200,
            },
            800,
            function () {
              hash = hash - 200;
              window.location.hash = hash;
            }
          );
        }
      });
    });
  },

  beforeUpdate() {
    this.ex_Array.forEach((el) => {
      return (
        // 切割完回傳
        (el.MAIN_IMAGE = el.MAIN_IMAGE.split("|"))
      );
    });
    // console.log(this.ex_Array);
  },
});
