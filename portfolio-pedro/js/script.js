jQuery(document).ready(function ($){

    //FIXED HEADER
    window.onscroll = function(){
        if(window.pageYOffset > 150){
            $("#menu").addClass("bg");
            $("#header .collapse li a").addClass("cor-bg");
            $(".navbar-toggler i").addClass("hamburguer-black");
            $(".navbar-toggler i").removeClass("hamburguer");

            
        }else{
            $("#menu").removeClass("bg");
            $("#header .collapse li a").removeClass("cor-bg"); 
            $(".navbar-toggler i").removeClass("hamburguer-black");
            $(".navbar-toggler i").addClass("hamburguer");
        }
    };

    //FILTRO GALERIA ISOTOPO
    let btns = $("#servicos .button-group button");

    btns.click(function (e) {
        $("#servicos .button-group button").removeClass("active");
        e.target.classList.add("active");

        let selector = $(e.target).attr("data-filter");
        $("#servicos .grid").isotope({
            filter: selector,
        });
    });

    $(window).on("load", function(){
        $("#servicos .grid").isotope({
            filter: "*",
        });
    });

    //MAGNIFY POPUP
    $(".grid .popup-link").magnificPopup({
        type: "image",
        gallery: {
            enabled: true,
            tPrev: "Anterior",
            tNext: "Próxima",
            tCounter: "%curr% de %total%",
        },
    });
});

