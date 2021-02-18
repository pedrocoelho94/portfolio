jQuery(document).ready(function ($){

    //FIXED HEADER
    window.onscroll = function(){
        if(window.pageYOffset > 150){
            $("#menu").addClass("bg");
            $("#header .collapse li a").addClass("cor-bg");

            
        }else{
            $("#menu").removeClass("bg");
            $("#header .collapse li a").removeClass("cor-bg"); 
 
        }
    };
});

