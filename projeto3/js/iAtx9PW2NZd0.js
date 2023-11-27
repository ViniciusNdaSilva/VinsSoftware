/*
 __        __   _                            _                   
 \ \      / /__| | ___ ___  _ __ ___   ___  | |_ ___             
  \ \ /\ / / _ \ |/ __/ _ \| '_ ` _ \ / _ \ | __/ _ \            
   \ V  V /  __/ | (_| (_) | | | | | |  __/ | || (_) |           
    \_/\_/ \___|_|\___\___/|_| |_| |_|\___|  \__\___/                                                                   
  ____                           _____ _                         
 |  _ \  __ _ _ __ _ __   __ _  |_   _| |__   ___ _ __ ___   ___ 
 | | | |/ _` | '__| '_ \ / _` |   | | | '_ \ / _ \ '_ ` _ \ / _ \
 | |_| | (_| | |  | | | | (_| |   | | | | | |  __/ | | | | |  __/
 |____/ \__,_|_|  |_| |_|\__,_|   |_| |_| |_|\___|_| |_| |_|\___|
                                                                 
*/
// MAIN.JS
/*-------------------------------------------------------------------------------------------------------------------------------*/
//This is main JS file that contains custom JS scipts and initialization used in this template */
// NOTE!!!!! Use "jQuery" instead of "$" 
//Vars
var jQuerywindow = jQuery(window)
    , jQueryhtml = jQuery("html")
    , jQuerybody = jQuery('body');
/**********************
 * Custom Functions 
 **********************/
/*
 * jsloader start
 */
function loadScript(url, callback) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    if (script.readyState) { //IE
        script.onreadystatechange = function () {
            if (script.readyState === "loaded" || script.readyState === "complete") {
                script.onreadystatechange = null;
                callback();
            }
        };
    }
    else { //Others
        script.onload = function () {
            callback();
        };
    }
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}
/*
 * jsloader end
 */
/*
 * bootstrap menu
 */
function dropdownMenu() {
    if (jQuerywindow.width() > 768) {
        jQuery(".dropdown").hover(function () {
            jQuery(':nth-child(2)', this).not('.dropdown-submenu .dropdown-menu').stop(true, true).slideDown("slow");
            jQuery(this).toggleClass('open');
        }, function () {
            jQuery(':nth-child(2)', this).not('.dropdown-submenu .dropdown-menu').stop(true, true).slideUp("slow");
            jQuery(this).toggleClass('open');
        });
    }
    else {
        jQuery('.navbar-default .dropdown').off('mouseover').off('mouseout');
    }
}
/*
 * search and buttun 
 */
function search_qoute() {
    jQuery('a[href="#search"]').on('click', function (event) {
        event.preventDefault();
        jQuery('#search').addClass('open');
        jQuery('#search > form > input[type="search"]').focus();
    });
    jQuery('#search ,#search  .close').on('click keyup', function (event) {
        jQuery(this).parent().removeClass('open');
    });
    jQuery('a[href="#quote"]').on('click', function (event) {
        event.preventDefault();
        jQuery('#quote').addClass('open');
        jQuery('#quote > form > input[type="textarea"]').focus();
    });
    jQuery('#quote, #quote button.close').on('click keyup', function (event) {
        jQuery(this).parent().removeClass('open');
    });
}
/*
 * sidebar menu start
 */
function sidebar_menu() {
    var windowsize = jQuerywindow.width(),
        jQuerynav = jQuery("nav"),
        slide = {
            clear: function () {
                jQuerybody.removeClass('toggled');
                jQuery('.overlay')
                    .hide();
                jQuery('.easy-sidebar-toggle')
                    .prependTo("header");
                jQuery('#search')
                    .prependTo("body");
                jQuery('.navbar.easy-sidebar')
                    .removeClass('toggled');
                jQuery('#navbar')
                    .removeAttr("style");
            },
            start: function () {
                jQuery('.overlay')
                    .show();
                jQuerybody.addClass('toggled');
                jQueryhtml.addClass('easy-sidebar-active');
                jQuerynav.addClass('easy-sidebar');
                jQuery('.easy-sidebar-toggle')
                    .prependTo(".easy-sidebar");
                jQuery('#search')
                    .prependTo("#navbar");
                jQuery('#navbar')
                    .height(jQuerywindow.height())
                    .css({
                        /*"overflow-y": "scroll"
                        ,*/
                        "padding-top": "60px"
                    });
            },
            remove: function () {
                jQuerynav.removeClass('easy-sidebar');
            }
        };
    if (windowsize < 1003) {
        jQuerynav.addClass('easy-sidebar');
        jQuery('.easy-sidebar-toggle')
            .on("click", function (e) {
                e.preventDefault();
                if (jQuerybody.hasClass('toggled')) {
                    slide.clear();
                } else {
                    slide.start();
                }
            });
        jQueryhtml.on('swiperight', function () {
            slide.start();
        });
        jQueryhtml.on('swipeleft', function () {
            slide.clear();
        });
    } else {
        slide.clear();
        slide.remove();
    }
}
/*
 * sidebar menu end
 */
/*
 * owl functions start
 */
function owlslider() {
    var options = {
            navigation: true
            , pagination: false
        }
        , owlhomeprojects = jQuery("#home-projects")
        , owldemo = jQuery("#owl-demo")
        , owlhomeposts = jQuery("#home-posts")
        , owlhomequotes = jQuery("#home-quotes")
        , owlteamwrap = jQuery("#team-wrap")
        , owlservicebox3 = jQuery("#service-box3")
        , owlclients2 = jQuery("#clients2")
        , owlitem = jQuery("#owl-item")
        , owlitemauto = jQuery(".owl-item-auto");
    owlhomeprojects.owlCarousel({
        itemsCustom: [
			[0, 2]
			, [450, 2]
			, [600, 2]
			, [700, 3]
			, [1000, 4]
			, [1200, 4]
			, [1400, 4]
			, [1600, 4]
		]
        , navigation: true
        , pagination: false
    });
    owlhomeposts.owlCarousel({
        itemsCustom: [
			[0, 2]
			, [450, 2]
			, [600, 2]
			, [700, 2]
			, [1000, 3]
		]
        , navigation: false
        , pagination: true
    });
    owlhomeprojects.owlCarousel(options);

    function showProjectsbyCat(cat) {
        var owl = jQuery("#home-projects").data('owlCarousel');
        owl.addItem('<div/>', 0);
        var nb = owl.itemsAmount;
        for (var i = 0; i < (nb - 1); i++) {
            owl.removeItem(1);
        }
        if (cat == 'all') {
            jQuery('#projects-copy .project-item').each(function () {
                owl.addItem(jQuery(this).clone());
            });
        }
        else {
            jQuery('#projects-copy .project-item.' + cat).each(function () {
                owl.addItem(jQuery(this).clone());
            });
        }
        owl.removeItem(0);
        jQuery('.project-filter a').on("click", function (e) {
            e.preventDefault();
            jQuery('.project-filter a').removeClass('active');
            cat = jQuery(this).attr('ID');
            jQuery(this).addClass('active');
            showProjectsbyCat(cat);
        });
    }
    jQuery('#home-projects .project-item').clone().appendTo(jQuery('#projects-copy'));
    owldemo.owlCarousel();
    // Custom Navigation Events
    jQuery(".next").on("click", function () {
        owldemo.trigger('owl.next');
    });
    jQuery(".prev").on("click", function () {
        owldemo.trigger('owl.prev');
    });
    owlhomequotes.owlCarousel({
        navigation: true
        , slideSpeed: 300
        , pagination: false
        , paginationSpeed: 400
        , singleItem: true
        , transitionStyle: "fade"
    });
    owlteamwrap.owlCarousel({
        itemsCustom: [
			[0, 1]
			, [450, 2]
			, [600, 2]
			, [700, 3]
			, [1000, 4]
			, [1200, 4]
			, [1400, 4]
			, [1600, 4]
		]
        , navigation: true
        , pagination: false
    });
    owlservicebox3.owlCarousel({
        itemsCustom: [
			[0, 2]
			, [450, 2]
			, [600, 2]
			, [700, 3]
			, [1000, 4]
			, [1200, 4]
			, [1400, 4]
			, [1600, 4]
		]
        , pagination: false
        , navigation: true
    });
    owlclients2.owlCarousel({
        itemsCustom: [
			[0, 2]
			, [450, 2]
			, [600, 2]
			, [700, 3]
			, [1000, 6]
			, [1200, 6]
			, [1400, 6]
			, [1600, 6]
		]
        , pagination: false
        , navigation: false
    });
    owlitem.owlCarousel({
        pagination: false
        , navigation: true, // Show next and prev buttons
        slideSpeed: 300
        , singleItem: true
        , navigationText: false
    });
    owlitemauto.owlCarousel({
        loop: true
        , margin: 10
        , autoPlay: true
        , autoPlayTimeout: 1000
        , autoPlayHoverPause: true
        , singleItem: true
        , navigation: false
    });
    jQuery(".item-slider").hover(function () {
        jQuery(".owl-next").html('<i class="fa fa-angle-right"></i>').css({
            "right": "7%"
            , "opacity": "1"
        });
        jQuery(".owl-prev").html('<i class="fa fa-angle-left"></i>').css({
            "left": "7%"
            , "opacity": "1"
        });
    }, function () {
        jQuery(".owl-next,.owl-prev").removeAttr("style");
    });
    jQuery('.project-filter a').on("click", function (e) {
        e.preventDefault();
        jQuery('.project-filter a').removeClass('active');
        cat = jQuery(this).attr('ID');
        jQuery(this).addClass('active');
        showProjectsbyCat(cat);
    });
}
/*
 * owl functions end
 */
/*
 * vedioplayer start
 */
function vedioplayer() {
    jQuery('#playVid').on("click", function () {
        if (jQuery("#player").get(0).paused) {
            jQuery("#player").get(0).play();
        }
        else {
            jQuery("#player").get(0).pause();
        }
    });
    jQuery("#playVid").on("click", function () {
        jQuery(".play-ico").toggleClass("fa-pause");
        jQuery(".video_player").toggleClass("active");
        jQuery(".video-bg-wrap .overlay").toggleClass("active");
    });
}
/*
 * vedioplayer end
 */
/*
 * stickynav functions start
 */
function stickynav() {
    var shrinkHeader = 0
        , itemfill = jQuery('nav.fill-black');
    jQuerywindow.scroll(function () {
        if (jQuery(this).scrollTop() > 1) {
            itemfill.addClass("sticky");
            itemfill.removeClass("normal");
        }
        else {
            itemfill.removeClass("sticky");
            itemfill.addClass("normal");
        }
        var scroll = getCurrentScroll();
        if (scroll > shrinkHeader) {
            jQuery('header').addClass('shrink sticky-header');
        }
        else {
            jQuery('.sticky-header').removeClass('shrink sticky-header');
        }
    });

    function getCurrentScroll() {
        return window.pageYOffset || document.documentElement.scrollTop;
    }
}
/*
 * stickynav functions end
 */
/*
 * preloader functions start
 */
function preloader() {
    jQuerywindow.load(function () {
        // makes sure the whole site is loaded
        jQuery('#status').fadeOut(); // will first fade out the loading animation
        jQuery('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    });
}
/*
 * preloader functions end
 */
/*
 * Misclenous functions start
 */
function misc() {
    // Twitter
    var configProfile = {
        "profile": {
            "screenName": 'envato'
        }
        , "domId": 'tweecool'
        , "maxTweets": 2
        , "enableLinks": false
        , "showUser": false
        , "showTime": false
        , "showImages": false
        , "lang": 'en'
    };
    twitterFetcher.fetch(configProfile);
    //counter    
    jQuery('.count').counterUp({
        delay: 10
        , time: 1000
    });
    //layout actions    
    jQuery('.panel-heading a').on("click", function () {
        jQuery('.panel-heading').removeClass('actives');
        jQuery(this).parents('.panel-heading').addClass('actives');
    });
    //to top
    function scrollToElement(selector, time, verticalOffset) {
        time = typeof (time) != 'undefined' ? time : 1000;
        verticalOffset = typeof (verticalOffset) != 'undefined' ? verticalOffset : 0;
        element = jQuery(selector);
        offset = element.offset();
        offsetTop = offset.top + verticalOffset;
        jQuery('html, body').animate({
            scrollTop: offsetTop
        }, time);
    }
    jQuery('a.back-to-top').on("click", function (e) {
        e.preventDefault();
        scrollToElement('body');
    });
    jQuerywindow.scroll(function () {
        var scroll = jQuerywindow.scrollTop();
        if (scroll >= 500) {
            //clearHeader, not clearheader - caps H
            jQuery("a.back-to-top").show();
        }
        else {
            jQuery("a.back-to-top").hide();
        }
    });
}
/*
 * Misclenous functions end
 */
/*
 * prettyPhoto start
 */
function prettyPhoto() {
    jQuery(".prettyPhoto").prettyPhoto({
        show_title: false
        , hook: 'data-rel'
        , social_tools: false
        , theme: 'light_square'
        , horizontal_padding: 20
        , opacity: 0.95
        , deeplinking: false
    });
}
/*
 * prettyPhoto end
 */
/*
 * grid with filter start
 */
function gridwithfilter() {
    var default_view = 'grid'
        , gridelemnt = jQuery('.grid')
        , prodcnt = jQuery('.prod-cnt'); // choose the view to show by default (grid/list)
    // check the presence of the cookie, if not create "view" cookie with the default view value
    if (jQuery.cookie('view') !== 'undefined') {
        jQuery.cookie('view', default_view, {
            expires: 7
            , path: '/'
        });
    }

    function get_grid() {
        jQuery('.list').removeClass('list-active');
        jQuery('.grid').addClass('grid-active');
        prodcnt.animate({
            opacity: 0
        }, function () {
            prodcnt.removeClass('prod-box-list');
            prodcnt.addClass('prod-box');
            prodcnt.stop().animate({
                opacity: 1
            });
        });
    } // end "get_grid" function
    function get_list() {
        jQuery('.grid').removeClass('grid-active');
        jQuery('.list').addClass('list-active');
        prodcnt.animate({
            opacity: 0
        }, function () {
            prodcnt.removeClass('prod-box');
            prodcnt.addClass('prod-box-list');
            prodcnt.stop().animate({
                opacity: 1
            });
        });
    } // end "get_list" function
    if (jQuery.cookie('view') == 'list') {
        // we dont use the "get_list" function here to avoid the animation
        jQuery('.grid').removeClass('grid-active');
        jQuery('.list').addClass('list-active');
        prodcnt.animate({
            opacity: 0
        });
        prodcnt.removeClass('prod-box');
        prodcnt.addClass('prod-box-list');
        prodcnt.stop().animate({
            opacity: 1
        });
    }
    if (jQuery.cookie('view') == 'grid') {
        jQuery('.list').removeClass('list-active');
        jQuery('.grid').addClass('grid-active');
        prodcnt.animate({
            opacity: 0
        });
        prodcnt.removeClass('prod-box-list');
        prodcnt.addClass('prod-box');
        prodcnt.stop().animate({
            opacity: 1
        });
    }
    jQuery('#list').on("click", function () {
        jQuery.cookie('view', 'list');
        get_list();
    });
    jQuery('#grid').on("click", function () {
        jQuery.cookie('view', 'grid');
        get_grid();
    });
    /* filter */
    jQuery('.category-menu ul li').on("click", function () {
        var CategoryID = jQuery(this).attr('data-category');
        jQuery('.category-menu ul li').removeClass('cat-active');
        jQuery(this).addClass('cat-active');
        prodcnt.each(function () {
            if ((jQuery(this).hasClass(CategoryID)) == false) {
                jQuery(this).css({
                    'display': 'none'
                });
            }
        });
        jQuery('.' + CategoryID).fadeIn();
    });
   /*
     * product item hover start
     */
    prodcnt.hover(function () {
        jQuery(this)
            .find('.product-add-to-cart a.darna-button.style3')
            .slideDown();
        jQuery(this)
            .find('.product-add-to-cart .price')
            .slideUp();
    }, function () {
        jQuery(this)
            .find('.product-add-to-cart a.darna-button.style3')
            .slideUp();
        jQuery(this)
            .find('.product-add-to-cart .price')
            .slideDown();
    });
    /*
     * product item hover end
     */
}
/*
 * grid with filter end
 */
/*
 * modal_1 start
 */
function modal_1() {
    jQuery('.view-modal').on('click', function (event) {
        var modalInBody = jQuery(this).parent().next('.modal').clone();
        event.preventDefault();
        modalInBody.appendTo("body").modal('show').addClass('cloned');
        jQuery(".modal-open").removeAttr("style");
    });
}
/*
 * modal_1 end
 */
/*
 * spinner start
 */
function spinner() {
    jQuery('.spinner-control .btn:first-of-type').on('click', function () {
        jQuery('.spinner-control input').val(parseInt(jQuery('.spinner-control input').val(), 10) + 1);
    });
    jQuery('.spinner-control .btn:last-of-type').on('click', function () {
        jQuery('.spinner-control input').val(parseInt(jQuery('.spinner-control input').val(), 10) - 1);
    });
}
/*
 * spinner end
 */
/*
 * price_slider start
 */
function price_slider() {
    function filterSystem(minPrice, maxPrice) {
        jQuery("#computers div.system").hide().filter(function () {
            var price = parseInt($(this).data("price"), 10);
            return price >= minPrice && price <= maxPrice;
        }).show();
    }
    jQuery('#slider-container').slider({
        range: true
        , min: 50
        , max: 1099
        , values: [50, 1099]
        , create: function () {
            jQuery("#amount").val("$50 - $1099");
        }
        , slide: function (event, ui) {
            jQuery("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
            var mi = ui.values[0];
            var mx = ui.values[1];
            filterSystem(mi, mx);
        }
    });
}
/*
 * price_slider end
 */
/*
 *Isotope start
 */
function isotope_() {
    // Product Filter
    var folio_full = jQuery('.folio-full');
    folio_full.isotope({
        layoutMode: "masonry",
        itemSelector: '.folio-item',
        transitionDuration: '0.8s'
    });
    var folio_filter = jQuery('.folio-filter'),
        folio_filter_links = folio_filter.find('a');
    folio_filter_links.click(function () {
        var jQuerythis = jQuery(this);
        // don't proceed if already selected
        if (jQuerythis.hasClass('active')) {
            return false;
        }
        var folio_filter_parent = jQuerythis.parents('.folio-filter');
        folio_filter_parent.find('.active')
            .removeClass('active');
        jQuerythis.addClass('active');
        // make option object dynamically, i.e. { filter: '.my-filter-class' }
        var options = {},
            key = folio_filter_parent.attr('data-option-key'),
            value = jQuerythis.attr('data-option-value');
        // parse 'false' as false boolean
        value = value === 'false' ? false : value;
        options[key] = value;
        if (key === 'layoutMode' && typeof changeLayoutMode === 'function') {
            changeLayoutMode(jQuerythis, options);
        } else {
            // otherwise, apply new options
            folio_full.isotope(options);
        }
        return false;
    });
    // gallery Filter
    var gallery_isotopes = jQuery('.gallery-isotopes');
    gallery_isotopes.isotope({
        layoutMode: "masonry",
        itemSelector: '.isotope-items',
        transitionDuration: '0.8s'
    });
    var gallery_filters = jQuery('.gallery-filters'),
        gallery_filters_links = gallery_filters.find('a');
    gallery_filters_links.click(function () {
        var jQuerythis = jQuery(this);
        // don't proceed if already selected
        if (jQuerythis.hasClass('active')) {
            return false;
        }
        var gallery_filters_parent = jQuerythis.parents('.gallery-filters');
        gallery_filters_parent.find('.active')
            .removeClass('active');
        jQuerythis.addClass('active');
        // make option object dynamically, i.e. { filter: '.my-filter-class' }
        var options = {},
            key = gallery_filters_parent.attr('data-option-key'),
            value = jQuerythis.attr('data-option-value');
        // parse 'false' as false boolean
        value = value === 'false' ? false : value;
        options[key] = value;
        if (key === 'layoutMode' && typeof changeLayoutMode === 'function') {
            changeLayoutMode(jQuerythis, options);
        } else {
            // otherwise, apply new options
            gallery_isotopes.isotope(options);
        }
        return false;
    });
}
/*
 *Isotope end
 */
/**********************
 * Custom Functions end 
 **********************/
/**********************
 * Initialize functions
 **********************/
jQuery(document).ready(function () {
    "use strict";
    var jQuery = $.noConflict();
    preloader();
    dropdownMenu();
    search_qoute();
    sidebar_menu();
    owlslider();
    misc();
    vedioplayer();
    stickynav();
    prettyPhoto();
    gridwithfilter();
    modal_1();
    spinner();
    price_slider();
    isotope_();
    jQuery(window).resize(function () {
        dropdownMenu();
        sidebar_menu();
    });
});
//audio player for blog page
if (jQuery("audio").length > 0) {
    audiojs.events.ready(function () {
        var as = audiojs.createAll();
    });
}