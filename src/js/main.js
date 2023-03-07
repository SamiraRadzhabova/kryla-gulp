document.addEventListener("DOMContentLoaded", function (event) {
  const rootElement = document.documentElement;

  // lang toggle
  const langBtn = document.querySelectorAll(".lang__btn");

  if (langBtn) {
    setActiveClass(langBtn);
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

  if (burger && header) {
    burger.addEventListener("click", () => {
      header.classList.toggle("open");
      burger.classList.toggle("open");
      rootElement.classList.toggle("block");

      // const headerOpen = document.querySelector(".header.open");

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

  // buttons hover animation
  const buttons = document.querySelectorAll(".btn");

  if (buttons?.length) {
    buttons.forEach((button) => {
      ["mouseenter", "mouseout"].forEach((mouseEvent) => {
        button.addEventListener(mouseEvent, (e) => {
          let buttonPosition = button.getBoundingClientRect();
          let mousePositionX = e.clientX - buttonPosition.left;
          let mousePositionY = e.clientY - buttonPosition.top;

          const span = button.querySelector("span");

          if (span) {
            span.style.top = `${mousePositionY}px`;
            span.style.left = `${mousePositionX}px`;
          }
        });
      });
    });
  }

  // donat section
  const banks = document.querySelectorAll(".donat__bank");
  const sumButtons = document.querySelectorAll(".donat__sum");

  if (banks) {
    setActiveClass(banks);
  }

  if (sumButtons) {
    setActiveClass(sumButtons);
  }

  // accordion
  const accordion = document.querySelectorAll(".accordion");
  const accordionBody = document.querySelectorAll(".accordion__body");
  const accordionContent = document.querySelectorAll(".accordion__content");

  if (accordion) {
    accordion.forEach((item, i) => {
      item.addEventListener("click", () => {
        if (!item.classList.contains("active")) {
          accordion.forEach((el, index) => {
            el.classList.remove("active");
            accordionBody[index].style.maxHeight = "0";
          });
          item.classList.add("active");

          let height = accordionContent[i].offsetHeight;
          accordionBody[i].style.maxHeight = `${height}px`;
        } else {
          item.classList.remove("active");
          accordionBody[i].style.maxHeight = "0";
        }
      });
    });
  }

  function setActiveClass(element) {
    element.forEach((btn) => {
      btn.addEventListener("click", () => {
        element.forEach((el) => {
          el.classList.remove("active");
        });

        btn.classList.add("active");
      });
    });
  }

  console.log("DOM fully loaded and parsed");
});
