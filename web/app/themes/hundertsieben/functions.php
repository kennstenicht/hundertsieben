<?php
/**
 * Theme setup
 */
add_action('after_setup_theme', function () {
    /**
     * Register navigation menus
     * @link https://developer.wordpress.org/reference/functions/register_nav_menus/
     */
    register_nav_menus([
        'main_navigation' => __('Main Navigation', 'mint-ec-nertzwerkkarte'),
    ]);

    /**
     * Enable post thumbnails
     * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
     */
    add_theme_support('post-thumbnails');

    /**
     * Enable HTML5 markup support
     * @link https://developer.wordpress.org/reference/functions/add_theme_support/#html5
     */
    add_theme_support('html5', ['caption', 'comment-form', 'comment-list', 'gallery', 'search-form']);

    /**
     * Allow editor style and use main stylesheet for visual editor
     */
    // add_theme_support( 'editor-styles' );
    // add_editor_style( asset_path('styles/gutenberg.css') );

    /**
     * Disable custom font sizes
     */
    add_theme_support('disable-custom-font-sizes');

    /**
     * Enable custom units (vh, vw, em, rem)
     */
    add_theme_support('custom-units');

    /**
     * Enable resposnsive embeds
     */
    add_theme_support( 'responsive-embeds' );

    /**
     * Enable wide alignment
     * @link https://developer.wordpress.org/block-editor/developers/themes/theme-support/#wide-alignment
     */

    add_theme_support( 'align-wide' );
}, 20);
