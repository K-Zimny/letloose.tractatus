// to enable the enqueue of this optional JS file,
// you'll have to uncomment a row in the functions.php file
// just read the comments in there mate

console.log("Custom js file loaded");

//add here your own js code. Vanilla JS welcome.

jQuery(document).ready(function () {
  console.log("ready!");

  // ============================================================================================================================================================== */
  // Page Experience Panel
  //  ============================================================================================================================================================== */

  var globalSoundsTokenGet = sessionStorage.getItem("globalSoundsTokenKey");

  if (
    jQuery(location).attr("pathname") == "/" ||
    jQuery(location).attr("pathname") == "/menu/"
  ) {
    // jQuery("header").css("display", "none");
    // jQuery("#homepage").css("display", "none");
    console.log("globalSoundsTokenGet: " + globalSoundsTokenGet);
    if (globalSoundsTokenGet == "null") {
      jQuery("#homepageExperiencesPanel").css("display", "none");
    } else if (
      globalSoundsTokenGet == "true" ||
      globalSoundsTokenGet == "false"
    ) {
      if (globalSoundsTokenGet == "true") {
        document.getElementById("pageAudioElement").play();
        jQuery("#pageVolumeElementMute").css("display", "none");
        jQuery("#pageVolumeElementPlay").css("display", "block");
      } else if (globalSoundsTokenGet == "false") {
        document.getElementById("pageAudioElement").pause();
        jQuery("#pageVolumeElementMute").css("display", "block");
        jQuery("#pageVolumeElementPlay").css("display", "none");
      } else {
      }
    } else {
      jQuery("header").css("display", "none");
      jQuery("#siteFooter").css("display", "none");
      jQuery("#homepage").css("display", "none");
      // jQuery("#homepageExperiencesPanel").css("display", "none");
      jQuery("#homepageExperiencesPanel").css("display", "flex");
      jQuery("#onloadBlankScreen").css("animation-name", "none");
      var globalSoundsToken = null;
      jQuery("#fullExperienceBtn").on("click", function () {
        jQuery("html, body").animate(
          {
            scrollTop: 0,
          },
          500
        );
        setTimeout(function () {
          jQuery("html").css("overflow-y", "hidden");
        }),
          2500;
        jQuery("#homepage").css("display", "block");
        //
        globalSoundsToken = "true";
        sessionStorage.setItem("globalSoundsTokenKey", globalSoundsToken);
        console.log("globalSoundsToken " + globalSoundsToken);

        document.getElementById("pageAudioElement").play();
        jQuery("#pageVolumeElementMute").css("display", "none");
        jQuery("#pageVolumeElementPlay").css("display", "block");

        //
        console.log("click");
        jQuery("#homepageExperiencesPanel").animate(
          {
            opacity: 0,
          },
          1000
        );
        setTimeout(function () {
          jQuery("#homepageExperiencesPanel").css("display", "none");
          jQuery("header").css("display", "block");
          jQuery("#siteFooter").css("display", "block");
        }, 1000);
        jQuery("#onloadBlankScreen").css("animation-delay", "1.5s");
        jQuery("#onloadBlankScreen").css(
          "animation-name",
          "onload-blank-screen"
        );
      });

      //

      jQuery("#basicExperienceBtn").on("click", function () {
        jQuery("html, body").animate(
          {
            scrollTop: 0,
          },
          500
        );
        setTimeout(function () {
          jQuery("html").css("overflow-y", "hidden");
        }),
          2500;
        jQuery("#homepage").css("display", "block");
        //
        globalSoundsToken = "false";
        sessionStorage.setItem("globalSoundsTokenKey", globalSoundsToken);
        console.log("globalSoundsToken " + globalSoundsToken);

        document.getElementById("pageAudioElement").pause();
        jQuery("#pageVolumeElementMute").css("display", "block");
        jQuery("#pageVolumeElementPlay").css("display", "none");

        //
        console.log("click");
        jQuery("#homepageExperiencesPanel").animate(
          {
            opacity: 0,
          },
          1000
        );
        setTimeout(function () {
          jQuery("#homepageExperiencesPanel").css("display", "none");
          jQuery("header").css("display", "block");
          jQuery("#siteFooter").css("display", "block");
        }, 1000);
        jQuery("#onloadBlankScreen").css(
          "animation-name",
          "onload-blank-screen"
        );
      });
    }
  }

  // ============================================================================================================================================================== */
  // Page audio Elements
  //  ============================================================================================================================================================== */
  if (jQuery(location).attr("pathname") == "/") {
    document.getElementById("pageAudioElement").volume = 0.5;
    jQuery("#pageVolumeElementMute").on("click", function () {
      console.log("mute clicked");
      document.getElementById("pageAudioElement").play();
      jQuery("#pageVolumeElementMute").css("display", "none");
      jQuery("#pageVolumeElementPlay").css("display", "block");
      globalSoundsToken = "true";
      sessionStorage.setItem("globalSoundsTokenKey", globalSoundsToken);
    });
    jQuery("#pageVolumeElementPlay").on("click", function () {
      console.log("play clicked");
      document.getElementById("pageAudioElement").pause();
      jQuery("#pageVolumeElementMute").css("display", "block");
      jQuery("#pageVolumeElementPlay").css("display", "none");
      globalSoundsToken = "false";
      sessionStorage.setItem("globalSoundsTokenKey", globalSoundsToken);
    });
  }

  if (jQuery(location).attr("pathname") == "/menu/") {
    document.getElementById("pageAudioElement").volume = 0.1;
    jQuery("#pageVolumeElementMute").on("click", function () {
      console.log("mute clicked");
      document.getElementById("pageAudioElement").play();
      jQuery("#pageVolumeElementMute").css("display", "none");
      jQuery("#pageVolumeElementPlay").css("display", "block");
      globalSoundsToken = "true";
      sessionStorage.setItem("globalSoundsTokenKey", globalSoundsToken);
    });
    jQuery("#pageVolumeElementPlay").on("click", function () {
      console.log("play clicked");
      document.getElementById("pageAudioElement").pause();
      jQuery("#pageVolumeElementMute").css("display", "block");
      jQuery("#pageVolumeElementPlay").css("display", "none");
      globalSoundsToken = "false";
      sessionStorage.setItem("globalSoundsTokenKey", globalSoundsToken);
    });
  }

  // ============================================================================================================================================================== */
  // Phone stop sound when off screen
  //  ============================================================================================================================================================== */

  if (jQuery(window).width() < 768) {
    jQuery(window)
      .focus(function () {
        // Unpause when window gains focus
        document.getElementById("pageAudioElement").play();
      })
      .blur(function () {
        // Pause when window loses focus
        document.getElementById("pageAudioElement").pause();
      });
  }

  // ============================================================================================================================================================== */
  // Page animation on load
  //  ============================================================================================================================================================== */
  if (jQuery(location).attr("pathname") !== "/") {
    jQuery("nav").css("opacity", "1");
    jQuery("#siteFooter").css("opacity", "1");
    jQuery("#onloadBlankScreen").css("animation-name", "onload-blank-screen");
    jQuery("#onloadBlankScreen").bind(
      "oanimationend animationend webkitAnimationEnd",
      function () {
        // jQuery(".menu-media").css("animation-name", "fade-in");
        jQuery("#onloadBlankScreen").css("display", "none");
      }
    );
  }

  // ============================================================================================================================================================== */
  // footer display on non open sllider pages
  //  ============================================================================================================================================================== */

  if (jQuery(location).attr("pathname") == "/") {
    jQuery("#siteFooter").css("opacity", "0");
  }

  // ============================================================================================================================================================== */
  // Homepage Intro Animation
  //  ============================================================================================================================================================== */
  // if (jQuery(location).attr("href") !== "https://www.letloosechicago.com/") {
  //   var firstSessionToken = "false";
  //   sessionStorage.setItem("firstSessionTokenKey", firstSessionToken);
  //   console.log(firstSessionToken);
  // }
  if (
    jQuery(location).attr("href") !==
    "https://www.letloosechicago.com/?lc_action_launch_editing=1"
  ) {
    var firstSessionTokenHomepage = sessionStorage.getItem(
      "firstSessionTokenKey"
    );
    console.log("firstSessionTokenHomepage: " + firstSessionTokenHomepage);
    if (
      // firstSessionTokenHomepage !== "false" ||
      firstSessionTokenHomepage == null
    ) {
      if (jQuery(location).attr("pathname") == "/") {
        jQuery("#fullExperienceBtn").on("click", function () {
          var firstSessionToken = "true";
          sessionStorage.setItem("firstSessionTokenKey", firstSessionToken);
          console.log(
            "firstSessionTokenHomepage after choice: " + firstSessionToken
          );
          jQuery("#homepageVideoBgFilter").css(
            "animation-name",
            "homepage-video-opacity"
          );
          jQuery("#homepageLogoAnimation").css(
            "animation-name",
            "homepage-logo-animation"
          );
          jQuery("#homepageHeaderH1Animation").css(
            "animation-name",
            "homepage-logo-animation-tagline"
          );
          jQuery("#homepage").css("visibility", "hidden");
          jQuery("nav").css("visibility", "hidden");
          jQuery("#siteFooter").css("visibility", "hidden");
          setTimeout(function () {
            // setTimeout(function () {
            jQuery("#homepage").css("visibility", "visible");
            jQuery("nav").css("visibility", "visible");
            jQuery("#siteFooter").css("visibility", "visible");
            jQuery("#siteFooter").css("opacity", "0");
            jQuery("#homepage").animate(
              {
                opacity: 1,
                // height: "toggle",
              },
              1000
            );
            // }, 3500);

            jQuery("nav").animate(
              {
                opacity: 1,
                // height: "toggle",
              },
              1000
            );

            jQuery("#siteFooter").animate(
              {
                opacity: 1,
                // height: "toggle",
              },
              1000
            );
            jQuery("#homepageLogoAnimation").css("display", "none");
            jQuery("html").css("overflow-y", "visible");
          }, 9500);
          // jQuery("#homepageLogoAnimation").bind(
          //   "oanimationend animationend webkitAnimationEnd",
          //   function () {
          //     // jQuery("#homepageLogoAnimation").css("display", "none");
          //     jQuery("html").css("overflow-y", "visible");
          //   }
          // );
        });
        jQuery("#basicExperienceBtn").on("click", function () {
          var firstSessionToken = "true";
          sessionStorage.setItem("firstSessionTokenKey", firstSessionToken);
          console.log(
            "firstSessionTokenHomepage after choice: " + firstSessionToken
          );
          jQuery("#homepageVideoBgFilter").css(
            "animation-name",
            "homepage-video-opacity"
          );
          jQuery("#homepageLogoAnimation").css(
            "animation-name",
            "homepage-logo-animation"
          );
          jQuery("#homepageHeaderH1Animation").css(
            "animation-name",
            "homepage-logo-animation-tagline"
          );
          jQuery("#homepage").css("visibility", "hidden");
          jQuery("nav").css("visibility", "hidden");
          jQuery("#siteFooter").css("visibility", "hidden");
          setTimeout(function () {
            // setTimeout(function () {
            jQuery("#homepage").css("visibility", "visible");
            jQuery("nav").css("visibility", "visible");
            jQuery("#siteFooter").css("visibility", "visible");
            jQuery("#siteFooter").css("opacity", "0");
            jQuery("#homepage").animate(
              {
                opacity: 1,
                // height: "toggle",
              },
              1000
            );
            // }, 3500);

            jQuery("nav").animate(
              {
                opacity: 1,
                // height: "toggle",
              },
              1000
            );
            jQuery("#siteFooter").animate(
              {
                opacity: 1,
                // height: "toggle",
              },
              1000
            );
            jQuery("#homepageLogoAnimation").css("display", "none");
            jQuery("html").css("overflow-y", "visible");
          }, 9500);
          // jQuery("#homepageLogoAnimation").bind(
          //   "oanimationend animationend webkitAnimationEnd",
          //   function () {
          //     jQuery("#homepageLogoAnimation").css("display", "none");
          //     jQuery("html").css("overflow-y", "visible");
          //   }
          // );
        });
      } else {
        jQuery("#homepage").css("display", "block");
        jQuery("#homepage").css("opacity", "1");
        jQuery("nav").css("opacity", "1");
        // jQuery("#siteFooter").css("opacity", "1");
        jQuery("#homepageLogoAnimation").css("display", "none");
      }
      jQuery("#onloadBlankScreen").bind(
        "oanimationend animationend webkitAnimationEnd",
        function () {
          // jQuery(".menu-media").css("animation-name", "fade-in");
          jQuery("#onloadBlankScreen").css("display", "none");
        }
      );
      jQuery("#homepageHeaderH1Animation").bind(
        "oanimationend animationend webkitAnimationEnd",
        function () {
          // jQuery(".menu-media").css("animation-name", "fade-in");
          jQuery("#homepageHeaderH1Animation").css("opacity", "1");
        }
      );
    }
    // else if (firstSessionTokenHomepage == "true") {
    //   console.log("test");
    // }
    else {
      jQuery("#homepage").css("display", "block");
      // jQuery("#siteFooter").css("opacity", "0");
      console.log("footer hidden 1");
      jQuery("#onloadBlankScreen").bind(
        "oanimationend animationend webkitAnimationEnd",
        function () {
          jQuery("#homepageLogoAnimation").css("display", "none");
          jQuery("#onloadBlankScreen").css("display", "none");
          jQuery("#homepage").animate(
            {
              opacity: 1,
              // height: "toggle",
            },
            500
          );
          jQuery("nav").animate(
            {
              opacity: 1,
              // height: "toggle",
            },
            500
          );
          jQuery("#siteFooter").animate(
            {
              opacity: 1,
              // height: "toggle",
            },
            500
          );
          jQuery("html").css("overflow-y", "visible");
        }
      );
    }
  }

  // jQuery(".footer-container").animate(
  //   {
  //     opacity: 1,
  //     // height: "toggle",
  //   },
  //   5000
  // );

  // jQuery("footer").animate(
  //   {
  //     opacity: 1,
  //     height: "toggle",
  //   },
  //   5000
  // );

  // --------------------------------------------------------------------
  // Homepage Page
  // --------------------------------------------------------------------

  if (jQuery(location).attr("href") !== "about:srcdoc") {
    console.log("Page is NOT a livecanvas Editor");

    if (jQuery(location).attr("pathname") == "/") {
      jQuery("#siteFooter").css("background", "#121212");
      jQuery("body").addClass("chalk-bg");
      jQuery("body").css("overflow", "hidden");
    }

    // --------------------------------------------------------------------
    // Model Network
    // --------------------------------------------------------------------
    // jQuery(document).ready(function () {
    //   if (jQuery(window).width() <= 1200) {
    //     jQuery("#Modal-fnv").modal("show");
    //   }
    // });

    if (jQuery(window).width() >= 1320) {
      jQuery("#eventDate").insertAfter(".navbar-brand");
      jQuery("nav > .container").css("justify-content", "space-between");
    } else {
      jQuery("#eventDate").insertBefore("#homepageHeader");
      jQuery("nav > .container").css("justify-content", "center");
    }

    if (jQuery(window).width() >= 1320 && jQuery(window).width() <= 1600) {
      jQuery("#eventDate").addClass("nav-event-font");
      console.log("true");
    } else {
      jQuery("#eventDate").removeClass("nav-event-font");
    }

    jQuery(window).on("resize", function () {
      if (jQuery(window).width() >= 1320) {
        jQuery("#eventDate").insertAfter(".navbar-brand");
        jQuery("nav > .container").css("justify-content", "space-between");
      } else {
        jQuery("#eventDate").insertBefore("#homepageHeader");
        jQuery("nav > .container").css("justify-content", "center");
      }

      if (jQuery(window).width() >= 1320 && jQuery(window).width() <= 1600) {
        jQuery("#eventDate").addClass("nav-event-font");
        console.log("true");
      } else {
        jQuery("#eventDate").removeClass("nav-event-font");
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

    const targetNode_1 = document.getElementById("ss-item-1");
    const config_1 = { attributes: true, childList: true, subtree: true };
    const callback_1 = function (mutationsList, observer) {
      for (const mutation of mutationsList) {
        if (mutation.type === "childList") {
          console.log("A child node has been added or removed.");
        } else if (mutation.type === "attributes") {
          console.log(
            "The " + mutation.attributeName + " attribute was modified."
          );
          if (jQuery("#ss-item-1").hasClass("swiper-slide-active")) {
            jQuery("#number-container-1").css("animation-name", "bg-fade");
            jQuery("#path-1").css("animation-name", "dash");
            observer.disconnect();
            console.log("disconnect observer");
            jQuery("#path-1").bind(
              "oanimationend animationend webkitAnimationEnd",
              function () {
                // jQuery(".menu-media").css("animation-name", "fade-in");
                jQuery("#menu-media-1").css("display", "block");
                jQuery("#course-item-1").css("display", "flex");
              }
            );
          } else {
          }
        }
      }
    };
    const observer_1 = new MutationObserver(callback_1);
    observer_1.observe(targetNode_1, config_1);

    // Slider 2 Observation

    const targetNode_2 = document.getElementById("ss-item-2");
    const config_2 = { attributes: true, childList: true, subtree: true };
    const callback_2 = function (mutationsList, observer) {
      for (const mutation of mutationsList) {
        if (mutation.type === "childList") {
          console.log("A child node has been added or removed.");
        } else if (mutation.type === "attributes") {
          console.log(
            "The " + mutation.attributeName + " attribute was modified."
          );
          if (jQuery("#ss-item-2").hasClass("swiper-slide-active")) {
            jQuery("#number-container-2").css("animation-name", "bg-fade");
            jQuery("#path-2").css("animation-name", "dash");
            observer.disconnect();
            console.log("disconnect observer");
            jQuery("#path-2").bind(
              "oanimationend animationend webkitAnimationEnd",
              function () {
                // jQuery(".menu-media").css("animation-name", "fade-in");
                jQuery("#menu-media-2").css("display", "block");
                jQuery("#course-item-2").css("display", "flex");
              }
            );
          } else {
          }
        }
      }
    };
    const observer_2 = new MutationObserver(callback_2);
    observer_2.observe(targetNode_2, config_2);

    // Slider 3 Observation

    const targetNode_3 = document.getElementById("ss-item-3");
    const config_3 = { attributes: true, childList: true, subtree: true };
    const callback_3 = function (mutationsList, observer) {
      for (const mutation of mutationsList) {
        if (mutation.type === "childList") {
          console.log("A child node has been added or removed.");
        } else if (mutation.type === "attributes") {
          console.log(
            "The " + mutation.attributeName + " attribute was modified."
          );
          if (jQuery("#ss-item-3").hasClass("swiper-slide-active")) {
            jQuery("#number-container-3").css("animation-name", "bg-fade");
            jQuery("#path-3").css("animation-name", "dash");
            observer.disconnect();
            console.log("disconnect observer");
            jQuery("#path-3").bind(
              "oanimationend animationend webkitAnimationEnd",
              function () {
                // jQuery(".menu-media").css("animation-name", "fade-in");
                jQuery("#menu-media-3").css("display", "block");
                jQuery("#course-item-3").css("display", "flex");
              }
            );
          } else {
          }
        }
      }
    };
    const observer_3 = new MutationObserver(callback_3);
    observer_3.observe(targetNode_3, config_3);

    // Slider 4 Observation

    const targetNode_4 = document.getElementById("ss-item-4");
    const config_4 = { attributes: true, childList: true, subtree: true };
    const callback_4 = function (mutationsList, observer) {
      for (const mutation of mutationsList) {
        if (mutation.type === "childList") {
          console.log("A child node has been added or removed.");
        } else if (mutation.type === "attributes") {
          console.log(
            "The " + mutation.attributeName + " attribute was modified."
          );
          if (jQuery("#ss-item-4").hasClass("swiper-slide-active")) {
            jQuery("#number-container-4").css("animation-name", "bg-fade");
            jQuery("#path-4").css("animation-name", "dash");
            observer.disconnect();
            console.log("disconnect observer");
            jQuery("#path-4").bind(
              "oanimationend animationend webkitAnimationEnd",
              function () {
                // jQuery(".menu-media").css("animation-name", "fade-in");
                jQuery("#menu-media-4").css("display", "block");
                jQuery("#course-item-4").css("display", "flex");
              }
            );
          } else {
          }
        }
      }
    };
    const observer_4 = new MutationObserver(callback_4);
    observer_4.observe(targetNode_4, config_4);

    // Slider 5 Observation

    const targetNode_5 = document.getElementById("ss-item-5");
    const config_5 = { attributes: true, childList: true, subtree: true };
    const callback_5 = function (mutationsList, observer) {
      for (const mutation of mutationsList) {
        if (mutation.type === "childList") {
          console.log("A child node has been added or removed.");
        } else if (mutation.type === "attributes") {
          console.log(
            "The " + mutation.attributeName + " attribute was modified."
          );
          if (jQuery("#ss-item-5").hasClass("swiper-slide-active")) {
            jQuery("#number-container-5").css("animation-name", "bg-fade");
            jQuery("#path-5").css("animation-name", "dash");
            observer.disconnect();
            console.log("disconnect observer");
            jQuery("#path-5").bind(
              "oanimationend animationend webkitAnimationEnd",
              function () {
                // jQuery(".menu-media").css("animation-name", "fade-in");
                jQuery("#menu-media-5").css("display", "block");
                jQuery("#course-item-5").css("display", "flex");
              }
            );
          } else {
          }
        }
      }
    };
    const observer_5 = new MutationObserver(callback_5);
    observer_5.observe(targetNode_5, config_5);

    // Slider 6 Observation

    const targetNode_6 = document.getElementById("ss-item-6");
    const config_6 = { attributes: true, childList: true, subtree: true };
    const callback_6 = function (mutationsList, observer) {
      for (const mutation of mutationsList) {
        if (mutation.type === "childList") {
          console.log("A child node has been added or removed.");
        } else if (mutation.type === "attributes") {
          console.log(
            "The " + mutation.attributeName + " attribute was modified."
          );
          if (jQuery("#ss-item-6").hasClass("swiper-slide-active")) {
            jQuery("#number-container-6").css("animation-name", "bg-fade");
            jQuery("#path-6").css("animation-name", "dash");
            observer.disconnect();
            console.log("disconnect observer");
            jQuery("#path-6").bind(
              "oanimationend animationend webkitAnimationEnd",
              function () {
                // jQuery(".menu-media").css("animation-name", "fade-in");
                jQuery("#menu-media-6").css("display", "block");
                jQuery("#course-item-6").css("display", "flex");
              }
            );
          } else {
          }
        }
      }
    };
    const observer_6 = new MutationObserver(callback_6);
    observer_6.observe(targetNode_6, config_6);

    // Slider 7 Observation

    const targetNode_7 = document.getElementById("ss-item-7");
    const config_7 = { attributes: true, childList: true, subtree: true };
    const callback_7 = function (mutationsList, observer) {
      for (const mutation of mutationsList) {
        if (mutation.type === "childList") {
          console.log("A child node has been added or removed.");
        } else if (mutation.type === "attributes") {
          console.log(
            "The " + mutation.attributeName + " attribute was modified."
          );
          if (jQuery("#ss-item-7").hasClass("swiper-slide-active")) {
            jQuery("#number-container-7").css("animation-name", "bg-fade");
            jQuery("#path-7").css("animation-name", "dash");
            observer.disconnect();
            console.log("disconnect observer");
            jQuery("#path-7").bind(
              "oanimationend animationend webkitAnimationEnd",
              function () {
                // jQuery(".menu-media").css("animation-name", "fade-in");
                jQuery("#menu-media-7").css("display", "block");
                jQuery("#course-item-7").css("display", "flex");
              }
            );
          } else {
          }
        }
      }
    };

    const observer_7 = new MutationObserver(callback_7);
    observer_7.observe(targetNode_7, config_7);

    // Slider footer Observation

    const targetNode_8 = document.getElementById("ss-footer");
    const config_8 = { attributes: true, childList: true, subtree: true };
    const callback_8 = function (mutationsList, observer) {
      for (const mutation of mutationsList) {
        if (mutation.type === "childList") {
          console.log("A child node has been added or removed.");
        } else if (mutation.type === "attributes") {
          console.log(
            "The " + mutation.attributeName + " attribute was modified."
          );
          if (jQuery("#ss-footer").hasClass("swiper-slide-active")) {
            observer.disconnect();
            console.log("disconnect observer footer");
          } else {
          }
        }
      }
    };

    const observer_8 = new MutationObserver(callback_8);
    observer_8.observe(targetNode_8, config_8);
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
  speed: 1000,
  mousewheel: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // autoplay: {
  //   delay: 10000,
  // },
});
