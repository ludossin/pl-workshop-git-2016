$(document).ready(function(){


       //HANDLES THE CLICK ON THE PROJECTS
       $('body').on('click','#projects li', function(){
         
          var selID = $(this).attr("id");
          if(selID == "all"){
              $("#names").children().show();
          }else{
              $("."+selID).parent().siblings().hide();
              $("."+selID).parent().show();
          }

       }); //end click



});//end document ready
