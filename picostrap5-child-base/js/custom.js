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
    } else {
      console.log("Not contact Page");
    }
  } else {
    console.log("Page is a livecanvas Editor, Function not executed");
  }

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
// Menu Page header/footer maniputlation
// --------------------------------------------------------------------

if (jQuery(location).attr("href") !== "about:srcdoc") {
  console.log("Page is NOT a livecanvas Editor");

  if (jQuery(location).attr("pathname") == "/menu/") {
    console.log("On Menu page");

    jQuery("nav").hide();
    jQuery("footer").hide();

    jQuery("html").addClass("hide-scrollbar");

    //run gsap scroll trigger code
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.defaults({
      toggleActions: "restart pause resume pause",
      scroller: ".gsap-menu-container",
    });

    gsap.to(".course-item-2", {
      scrollTrigger: ".course-item-2",
    });

    gsap.to(".course-item-3", {
      scrollTrigger: {
        trigger: ".course-item-3",
      },
    });
  } else {
    console.log("Not Menu Page");
  }
} else {
  console.log("Page is a livecanvas Editor, Function not executed");
}
