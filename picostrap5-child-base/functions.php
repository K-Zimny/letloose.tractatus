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
  
  
// ------------------------------
// -----------Remove woocommerce on non woo commercepages-----------
// ------------------------------

add_action( 'template_redirect', 'bt_remove_woocommerce_styles_scripts', 999 );
/**
 * Remove Woo Styles and Scripts from non-Woo Pages
 * @link https://gist.github.com/DevinWalker/7621777#gistcomment-1980453
 * @since 1.7.0
 */
function bt_remove_woocommerce_styles_scripts() {

        // Skip Woo Pages
        if ( is_woocommerce() || is_cart() || is_checkout() || is_account_page() ) {
                return;
        }
        // Otherwise...
        remove_action('wp_enqueue_scripts', [WC_Frontend_Scripts::class, 'load_scripts']);
        remove_action('wp_print_scripts', [WC_Frontend_Scripts::class, 'localize_printed_scripts'], 5);
        remove_action('wp_print_footer_scripts', [WC_Frontend_Scripts::class, 'localize_printed_scripts'], 5);
}

// function project_dequeue_unnecessary_scripts() {

//   if ( is_woocommerce() || is_cart() || is_checkout() || is_account_page() ) {
//     return;
// }
// else{
//   wp_dequeue_style('wc-block-style');
//   wp_dequeue_style('wc-block-vendors-style');
// }
// }
// add_action( 'wp_enqueue_scripts', 'project_dequeue_unnecessary_scripts', 100 );

// function wpdocs_dequeue_woo() {
// 	if (is_woocommerce() || is_cart() || is_checkout() || is_account_page()) {
// 		return;
// 	}
// 	wp_deregister_style('wc-blocks-style');
//   wp_deregister_style('wc-block-vendors-style');
// }
// add_action( 'wp_enqueue_scripts', 'wpdocs_dequeue_woo' );

// ------------------------------
// -----------Remove jetpack css-----------
// ------------------------------

// First, make sure Jetpack doesn't concatenate all its CSS
add_filter( 'jetpack_implode_frontend_css', '__return_false' );

// Then, remove each CSS file, one at a time
function jeherve_remove_all_jp_css() {
  wp_deregister_style( 'AtD_style' ); // After the Deadline
  wp_deregister_style( 'jetpack_likes' ); // Likes
  wp_deregister_style( 'jetpack_related-posts' ); //Related Posts
  wp_deregister_style( 'jetpack-carousel' ); // Carousel
  wp_deregister_style( 'grunion.css' ); // Grunion contact form
  wp_deregister_style( 'the-neverending-homepage' ); // Infinite Scroll
  wp_deregister_style( 'infinity-twentyten' ); // Infinite Scroll - Twentyten Theme
  wp_deregister_style( 'infinity-twentyeleven' ); // Infinite Scroll - Twentyeleven Theme
  wp_deregister_style( 'infinity-twentytwelve' ); // Infinite Scroll - Twentytwelve Theme
  wp_deregister_style( 'noticons' ); // Notes
  wp_deregister_style( 'post-by-email' ); // Post by Email
  wp_deregister_style( 'publicize' ); // Publicize
  wp_deregister_style( 'sharedaddy' ); // Sharedaddy
  wp_deregister_style( 'sharing' ); // Sharedaddy Sharing
  wp_deregister_style( 'stats_reports_css' ); // Stats
  wp_deregister_style( 'jetpack-widgets' ); // Widgets
  wp_deregister_style( 'jetpack-slideshow' ); // Slideshows
  wp_deregister_style( 'presentations' ); // Presentation shortcode
  wp_deregister_style( 'jetpack-subscriptions' ); // Subscriptions
  wp_deregister_style( 'tiled-gallery' ); // Tiled Galleries
  wp_deregister_style( 'widget-conditions' ); // Widget Visibility
  wp_deregister_style( 'jetpack_display_posts_widget' ); // Display Posts Widget
  wp_deregister_style( 'gravatar-profile-widget' ); // Gravatar Widget
  wp_deregister_style( 'widget-grid-and-list' ); // Top Posts widget
  wp_deregister_style( 'jetpack-widgets' ); // Widgets
}
add_action('wp_print_styles', 'jeherve_remove_all_jp_css' );

// ------------------------------
// -----------Remove dash Icons-----------
// ------------------------------

// function wpdocs_dequeue_dashicon() {
// 	if (current_user_can( 'update_core' )) {
// 		return;
// 	}
// 	wp_deregister_style('dashicons');
// }
// add_action( 'wp_enqueue_scripts', 'wpdocs_dequeue_dashicon' );