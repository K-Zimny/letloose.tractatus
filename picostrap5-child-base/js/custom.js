// to enable the enqueue of this optional JS file,
// you'll have to uncomment a row in the functions.php file
// just read the comments in there mate

console.log("Custom js file loaded");

//add here your own js code. Vanilla JS welcome.

jQuery(document).ready(function () {
  console.log("ready!");

  jQuery(window).on("resize", function () {
    if (jQuery(window).width() >= 1320) {
      jQuery("#eventDate").insertAfter(".navbar-brand");
    } else {
      jQuery("#eventDate").insertBefore("#homepageHeader");
    }
  });
});
