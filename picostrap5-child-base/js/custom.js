// to enable the enqueue of this optional JS file,
// you'll have to uncomment a row in the functions.php file
// just read the comments in there mate

console.log("Custom js file loaded");

//add here your own js code. Vanilla JS welcome.

jQuery(document).ready(function () {
  console.log("ready!");

  // --------------------------------------------------------------------
  // Homepage Page
  // --------------------------------------------------------------------

  if (jQuery(location).attr("href") !== "about:srcdoc") {
    console.log("Page is NOT a livecanvas Editor");
    if (jQuery(window).width() >= 1320) {
      jQuery("#eventDate").insertAfter(".navbar-brand");
    } else {
      jQuery("#eventDate").insertBefore("#homepageHeader");
    }
    jQuery(window).on("resize", function () {
      if (jQuery(window).width() >= 1320) {
        jQuery("#eventDate").insertAfter(".navbar-brand");
      } else {
        jQuery("#eventDate").insertBefore("#homepageHeader");
      }
    });
  } else {
    console.log("Page is a livecanvas Editor, Function not executed");
  }

  // --------------------------------------------------------------------
  // Contact Page
  // --------------------------------------------------------------------

  if (jQuery(location).attr("href") !== "about:srcdoc") {
    console.log("Page is NOT a livecanvas Editor");
    if (jQuery(location).attr("pathname") == "/contact/") {
      console.log("On contact page");
      if (jQuery(window).width() >= 1320) {
        jQuery("#eventDate").insertAfter(".navbar-brand");
      } else {
        jQuery("#eventDate").insertBefore("#contactHeader");
      }
      jQuery(window).on("resize", function () {
        if (jQuery(window).width() >= 1320) {
          jQuery("#eventDate").insertAfter(".navbar-brand");
        } else {
          jQuery("#eventDate").insertBefore("#contactHeader");
        }
      });
      // contact footer bg color
      jQuery("footer").addClass("bg-dark");
    } else {
      console.log("Not contact Page");
    }
  } else {
    console.log("Page is a livecanvas Editor, Function not executed");
  }

  // contact footer bg color

  // --------------------------------------------------------------------
  // Team Page
  // --------------------------------------------------------------------

  if (jQuery(location).attr("href") !== "about:srcdoc") {
    console.log("Page is NOT a livecanvas Editor");
    if (jQuery(location).attr("pathname") == "/meet-the-team/") {
      console.log("On team page");
      if (jQuery(window).width() >= 1320) {
        jQuery("#eventDate").insertAfter(".navbar-brand");
      } else {
        jQuery("#eventDate").insertBefore("#teamHeader");
      }
      jQuery(window).on("resize", function () {
        if (jQuery(window).width() >= 1320) {
          jQuery("#eventDate").insertAfter(".navbar-brand");
        } else {
          jQuery("#eventDate").insertBefore("#teamHeader");
        }
      });
    } else {
      console.log("Not team Page");
    }
  } else {
    console.log("Page is a livecanvas Editor, Function not executed");
  }
});

// --------------------------------------------------------------------
// Menu Page
// --------------------------------------------------------------------

// header/footer maniputlation

if (jQuery(location).attr("href") !== "about:srcdoc") {
  console.log("Page is NOT a livecanvas Editor");

  if (jQuery(location).attr("pathname") == "/menu/") {
    console.log("On Menu page");

    jQuery("nav").hide();
    jQuery("footer").hide();

    jQuery("html").addClass("hide-scrollbar");

    // jQuery(".course-item-2, .course-item-3, .course-item-footer").hide();

    //run gsap scroll trigger code
    // gsap.registerPlugin(ScrollTrigger);

    // ScrollTrigger.defaults({
    // toggleActions: "restart pause resume pause",
    // scroller: ".gsap-menu-container",
    // markers: true,
    // pin: true,
    // start: "top=-10",
    // end: "center",
    // onEnter: console.log("entered new slide"),
    // });

    // gsap.to(".course-item-1", {
    //   scrollTrigger: {
    //     trigger: ".course-item-1",
    //     onEnter: () => {
    //       console.log("entered slide 1");
    //       setTimeout(function () {
    //         jQuery(".course-item-2").show();
    //       }, 1000);
    // jQuery(window).mouseenter(function () {
    //   scrollLock = true;
    // });
    // jQuery(".gsap-menu-container").css("overflow", "hidden");
    // setTimeout(function () {
    //   jQuery(".gsap-menu-container").css("overflow", "");
    // }, 500);
    // },
    // },
    // scrollTrigger: ".course-item-1",
    // onEnter: () => console.log("entered slide 1"),
    // });

    // gsap.to(".course-item-2", {
    //   scrollTrigger: {
    //     trigger: ".course-item-2",
    //     onEnter: () => {
    //       console.log("entered slide 2");
    //     },
    //   },
    //   // scrollTrigger: ".course-item-2",
    //   // onEnter: () => console.log("entered slide 2"),
    // });

    // gsap.to(".course-item-3", {
    //   scrollTrigger: {
    //     trigger: ".course-item-3",
    //     onEnter: () => console.log("entered slide 3"),
    //   },
    // });
  } else {
    console.log("Not Menu Page");
  }
} else {
  console.log("Page is a livecanvas Editor, Function not executed");
}

// swiper

var swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 0,
  speed: 2000,
  mousewheel: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// svg animation

jQuery("#path-1").bind(
  "oanimationend animationend webkitAnimationEnd",
  function () {
    // jQuery(".menu-media").css("animation-name", "fade-in");
    jQuery(".menu-media").css("display", "block");
    jQuery(".course-item-1").css("display", "flex");
  }
);

// svg swpier_js animation play on view

jQuery(document).ready(function () {
  function checkForChanges() {
    if (jQuery("#ss-item-1").hasClass("swiper-slide-active")) {
      jQuery("#path-1").css("animation-name", "dash");
      jQuery("#path-1").finish();
      // svg finish animation on click
      jQuery("#ss-item-1").on("click", function () {
        jQuery("#path-1").finish();
        console.log("finished");
      });
      console.log("test");
    } else {
    }
    setTimeout(checkForChanges, 500);
  }

  jQuery(checkForChanges);
});

// https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
