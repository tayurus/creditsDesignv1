 
document.addEventListener("DOMContentLoaded", function(event) {

    $(".menu-item-text").first().trigger("click");

    //clicking on menu item, which has submenu
    $("header .menu-item.hasSubmenu").click(function() {
        $(this).toggleClass("submenuOpened", 500);
    })

    //Minimize / restore HEADER
    $(".menuBox").click(function() {
        if ($("header").hasClass("minimized")){
            $('.content').css({"margin-left" : "300px"});
            restoreHeader();
        }else{
            minimizeHeader();
            $('.content').css({"margin-left" : "80px"});
        }

    })


    //Restore Header after clicking on menu-item-icon or search-field
    $(".menu-item-icon, .header-search input").click(restoreHeader);


    //Make menu-item active
    $(".menu-item").click(function() {
        $(".menu-item").removeClass("active");
        $(this).addClass("active");
    })

});

/* !!!!! CSS-changing functions !!!!!*/
function minimizeHeader() {
    $("header").css({
        "width": "80px"
    });
    $(".menuBox").css({
        "margin-top": "25px"
    });
    $(".header-top .logo").css({
        "display": "none"
    });
    $(".header-search [name='search']").attr({
        "placeholder": ""
    }).css({
        "border-radius": "20px",
        "background-color": "#c0c0c0",
        "width": "60px",
        "background-image": "url(img/searchI.png)",
        "background-size": "20px",
        "background-position": "5px center",
        "background-repeat": "no-repeat",

    });
    $(".header-search button").css({
        "display": "none"
    });
    $(".header-menu .menu-item-text").css({
        "display": "none"
    });

    $(".menu-item-icon").css({
        "margin": "auto"
    });
    $(".header-langSelect").css({
        "padding": "5px 5px"
    });
    $(".header-menu").css({
        "margin-bottom": "15px",
        "border-bottom": "3px solid #444"
    });

    $(".header-langSelect option").html("<option value='eng'>EN</option>");
    $(".header-menu .menu-item").removeClass("hasSubmenu");
    $("header").addClass("minimized");
}

function restoreHeader() {
    //set default values, which defined in CSS-file
    $("*").css({
        "width": "",
        "margin": "",
        "display": "",
        "border-radius": "",
        "background": "",
        "padding": "",
        "border": ""
    });

    $(".header-search [name='search']").attr({
        "placeholder": "Search by Address / Txhash / Token"
    });
    $(".submenu").prev().addClass("hasSubmenu");
    $(".header-langSelect option").html("<option value='eng'>English (US)</option>");
    $("header").removeClass("minimized");
}
