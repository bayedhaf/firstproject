



$("h1").addClass("big_title margin_50");
$("h1").text("Educational page,there are found a many programming in this page! so follow this home for to know better?");//the program to change the oroginal text to new

$(document).keypress(function(event){//when want to change your text in to letter by pressing the keyword
   $("h1").text(event.key);
});

$("button").on("click",function(){
    $("h1").slideUp().animate({opacity:0.6});
});//when click on the button the h1 is clip up 

$("button").on("dblclick",function(){
    $("h1").slideDown().animate({opacity:0.6});
});//when double click on the button the h1 is clip down

$("button").click(function(){//when  click the original  color is changed to white color
    $("h2").css("color","red");});

$("h3").click(function(){//when  click the original  color is changed to white color
        $("h3").css("color","red");});


//$("header").click(function(){//when  click the original  color is changed to background-color blue
            //$("header").css("background-color","blue");});
    

$("h2").click(function(){//when  click the original  color is changed to white color
        $("h2").css("color","red");});
 $("p").click(function(){//when  click the original  color is changed to white color
     $("p").css("color","white");});
        
    

$("h1").dblclick(function(){//when double click the original  color is changed to purple color
        $("h1").css("color","white");});


 $("p").click(function(){//when  click the original  color is changed to yellow color
            $("p").css("color","red");});
$("body").css("background-color","darkslategrey");