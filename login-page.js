$(document).ready(function() {
    let checkPage = 0;
    $(".change-page").click(function(){
        
        if(checkPage==0){
            
            $(".register-form").css('height',0);
            $(".register-form").css("opacity", 0)
            $(".register-form").css("z-index","-1");
            checkPage = 1;
            console.log(checkPage);
        }
        else{
            $(".register-form").css('height','auto');
            $(".register-form").css("z-index","10");
            $(".register-form").css("opacity", "1")
            checkPage = 0;
            console.log(checkPage);
        }
    })
})