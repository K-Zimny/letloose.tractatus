<?php
// SET A SPECIFIC DESTINATION FOLDER FOT THE COMPILED CSS BUNDLES
function picostrap_get_css_optional_subfolder_name() { return "css-output/"; }

// SET A CUSTOM NAME FOR THE CSS BUNDLE FILE
function picostrap_get_base_css_filename() { return "bundle.css"; }

// DISABLE APPLICATION PASSWORDS for security
add_filter( 'wp_is_application_passwords_available', '__return_false' );

// CDN for GSAP
// wp_register_script( 'gsap', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/gsap.min.js', null, null, true );
// wp_enqueue_script('gsap');
// wp_register_script( 'gsap_scroll_trigger', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/ScrollTrigger.min.js', null, null, true );
// wp_enqueue_script('gsap_scroll_trigger');

// LOAD CHILD THEME TEXTDOMAIN
//add_action( 'after_setup_theme', function() { load_child_theme_textdomain( 'picostrap-child', get_stylesheet_directory() . '/languages' ); } );

// OPTIONAL ADDITIONAL CSS FILE - [NOT RECOMMENDED]: USE the /sass folder, add your css code to /sass/_custom.sass
//add_action( 'wp_enqueue_scripts',  function  () {	wp_enqueue_style( 'custom', get_stylesheet_directory_uri().'/custom.css' ); });

// OPTIONAL ADDITIONAL JS FILE - just uncomment the row below
add_action( 'wp_enqueue_scripts', function() {	wp_enqueue_script('custom', get_stylesheet_directory_uri() . '/js/custom.js', array('jquery'), null, true); });
 
// OPTIONAL: ADD FONTAWESOME FROM CDN IN FOOTER 
/* 
add_action("wp_footer",function(){ ?> <link rel='stylesheet' id='fontawesome-css'  href='https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' media='all' /> <?php }); 
*/

//OPTIONAL: ADD ANOTHER CUSTOM GOOGLE FONT, EXAMPLE: Hanalei Fill
// After uncommenting the following code, you will also need to set the font in the BS variable. Here's how:
// Open the WordPress Customizer 
// In the field/s: "Font Family Base" or "Headings Font Family" enter the font name, in this case "Hanalei Fill"

//--------------------- rig solid font------------------------

add_action("wp_head",function(){ ?> 
 <link rel="stylesheet" href="https://use.typekit.net/voz1dcr.css">
<?php }); 

// font-family: rig-solid-bold-halftone, sans-serif;
// font-weight: 700;
// font-style: normal;

// --------------------------------------------------------------

//--------------------- Fredericka the Great', cursive;------------------------

add_action("wp_head",function(){ ?> 
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Fredericka+the+Great&display=swap" rel="stylesheet">
   <?php }); 
     
//    font-family: 'Fredericka the Great', cursive;
   
   // --------------------------------------------------------------
// OPTIONAL: ADD MORE NAV MENUS
//register_nav_menus( array( 'third' => __( 'Third Menu', 'picostrap' ), 'fourth' => __( 'Fourth Menu', 'picostrap' ), 'fifth' => __( 'Fifth Menu', 'picostrap' ), ) );
// THEN USE SHORTCODE:  [lc_nav_menu theme_location="third" container_class="" container_id="" menu_class="navbar-nav"]

// WooCommerce custom availabilty text

add_filter( 'woocommerce_get_availability', 'custom_get_availability', 1, 2);

function custom_get_availability( $availability, $_product ) {
  global $product;
  $stock = $product->get_total_stock();

  if ( $_product->is_in_stock() ) $availability['availability'] = __($stock . ' Reservation(s) Remaining', 'woocommerce');
  if ( !$_product->is_in_stock() ) $availability['availability'] = __('SOLD OUT', 'woocommerce');

  return $availability;
}

// WooCommerce custom checkout

function md_custom_woocommerce_checkout_fields( $fields ) 
    {
        $fields['order']['order_comments']['placeholder'] = 'Order Notes';
        $fields['order']['order_comments']['label'] = 'Please note any dietary restrictions, allergies, or other requests';
    
        return $fields;
    }
    add_filter( 'woocommerce_checkout_fields', 'md_custom_woocommerce_checkout_fields' );

// ------------------------------
// -----------swiperjs-----------
// ------------------------------

wp_register_script( 'swiper_js', 'https://unpkg.com/swiper@7/swiper-bundle.min.js', null, null, true );
wp_enqueue_script('swiper_js');
add_action("wp_head",function(){ ?> 
    <link rel="stylesheet" href="https://unpkg.com/swiper@7/swiper-bundle.min.css">
   <?php }); 
   