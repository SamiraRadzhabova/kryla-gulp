document.addEventListener("DOMContentLoaded", function (event) {
  const rootElement = document.documentElement;

  // lang toggle
  const langBtn = document.querySelectorAll(".lang__btn");

  if (langBtn?.length) {
    langBtn.forEach((btn) => {
      btn.addEventListener("click", () => {
        langBtn.forEach((el) => {
          el.classList.remove("active");
        });
        btn.classList.add("active");
      });
    });
  }

  // submenu in the header
  const submenu = document.querySelectorAll(".submenu");

  if (submenu?.length) {
    submenu.forEach((item) => {
      item.addEventListener("click", () => {
        if (!item.classList.contains("open")) {
          submenu.forEach((el) => {
            el.classList.remove("open");
          });
        }

        item.classList.toggle("open");
      });
    });

    window.addEventListener("click", (event) => {
      if (
        !event.target.closest(".submenu") ||
        event.target.classList.contains("submenu__item")
      ) {
        submenu.forEach((item) => {
          item.classList.remove("open");
        });
      }
    });
  }

  // burger menu
  const header = document.querySelector(".header");
  const burger = document.querySelector(".burger");

  if (burger) {
    burger.addEventListener("click", () => {
      header.classList.toggle("open");
      burger.classList.toggle("open");
      rootElement.classList.toggle("block");

      // let headerOpen = document.querySelector(".header.open");

      // if (headerOpen) {
      //   let navItem = headerOpen.querySelectorAll('.header.open .nav__item');

      //   navItem.forEach((item) => {
      //     item.addEventListener('click', function () {
      //       header.classList.remove('open');
      //       burger.classList.remove('open');
      //       rootElement.classList.remove('block');
      //     });
      //   });
      // };
    });
  }

  console.log("DOM fully loaded and parsed");
});
