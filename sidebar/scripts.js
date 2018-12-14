/**
 * Bootstrap Collapsible Sidebar
 * 
 * @version 1.0.0
 * @author Eudes
 * @link https://github.com/eudesgit
 * @license Apache 2.0
 */

jQuery(document).ready(function ($) {

// Menu width
const menu_width = 230


/*
 * Click Listeners
 */

// Opens submenu
$('[data-open=bcs-submenu]').click(function (e) {
    e.preventDefault()
    open_submenu(e)
})
  
// Goes back to main menu
$('.ms-go-back').click(function(e) {
    e.preventDefault()
    go_back_menu()
})
  
// Collapses menu
$('[data-toggle=bcs-sidebar-collapse]').click(function () {
    collapse()
})



/*
 * FUNCTIONS
 */


/**
 * Opens a submenu
 * 
 * @param object e Clicked link
 */
function open_submenu ( e ) {

    let submenu = $(e.currentTarget).attr('href')

    $(submenu).css('display', 'inline-block')

    let initalLeftMargin = $('#bootstrap-collapsible-sidebar').css('margin-left').replace('px', '') * 1
    let newLeftMargin = initalLeftMargin - menu_width - 4
    $('#bootstrap-collapsible-sidebar').animate({ marginLeft: newLeftMargin }, 500, 'swing')

}

/**
 * Goes back to menu
 */
function go_back_menu ( ) {

    let initalLeftMargin = $('#bootstrap-collapsible-sidebar').css('margin-left').replace('px', '') * 1
    let newLeftMargin = initalLeftMargin + menu_width + 4

    $('#bootstrap-collapsible-sidebar').animate({ marginLeft: newLeftMargin }, 500, 'swing', function () {
        $('.bcs-sub-menu').hide()
    })

}

/**
 * Collapses sidebar
 */
function collapse ( ) {

    $('.list-group-item').toggleClass('d-none')
    $('.bcs-item-text').toggleClass('d-none')
    $('.bcs-menu').toggleClass('bcs-expanded bcs-collapsed')
    $('.bcs-menu-container').toggleClass('bcs-expanded bcs-collapsed')
    $('#bootstrap-collapsible-sidebar-wrapper').toggleClass('bcs-expanded bcs-collapsed')
    $('.bcs-seclev-submenu').toggleClass('d-none')

    // Always keeps d-flex, but removes it if d-none was added by .list-group-item toggling
    // That's because Bootstrap 4 d-flex overrides d-none
    $('.bcs-separator-title').addClass('d-flex')
    $('.bcs-separator-title.d-none').removeClass('d-flex')
    $('.bcs-separator-logo').addClass('d-flex')
    $('.bcs-separator-logo.d-none').removeClass('d-flex')

    // Treating d-flex/d-none on separators with title
    // var separator_title = $('.bcs-separator-title');
    // if (separator_title.hasClass('d-flex')) {
    //     separator_title.removeClass('d-flex');
    // } else {
    //     separator_title.addClass('d-flex');
    // }

    // Collapse/Expand icon
    let collapse_icon = $($('.bcs-collapse-icon')[0]).text();
    $('.bcs-collapse-icon').text(collapse_icon == 'arrow_back_ios' ? 'menu' : 'arrow_back_ios')
    $('.bcs-collapse-icon').toggleClass('mr-2')
    $('.bcs-collapse-icon').each(function () {
        $(this).parent().toggleClass('justify-content-center justify-content-start')
    })

}


    
}) // jQuery