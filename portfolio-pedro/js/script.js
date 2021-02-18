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
});

