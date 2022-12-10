$(document).ready(function(){

  var aiml = "img/aiml/"; // folder location
  var badge = "img/badge/";
  var dsa = "img/dsa/";
  var iot = "img/iot/";
  var java = "img/java/";
  var linkedin = "img/linkedin/";
  var others = "img/others/";
  var web = "img/web/";
  var webinars = "img/webinars/";
  var virtualexp = "img/virtualexp/";

  var fileextension = ".jpg"; // image format

  
  var eleDsa="";
  var eleVirtualexp="";
  var eleJava="";
  var eleLinkedin="";
  var eleWeb="";
  var eleWebinars="";
  var eleIot="";
  var eleBadge="";
  var eleAiml="";
  var eleOthers="";

  $(function imageloop(){
      var ele = "";
      
      ele += getImage(1, eleDsa, dsa, ".jpg", 7);
      ele += getImage(1, eleVirtualexp, virtualexp, ".jpg", 4);
      ele += getImage(1, eleJava, java, ".jpg", 4);
      ele += getImage(1, eleLinkedin, linkedin, ".jpg", 21);
      ele += getImage(1, eleWeb, web, ".jpg", 1);
      ele += getImage(1, eleWebinars, webinars, ".jpg", 4);
      ele += getImage(1, eleAiml, aiml, ".jpg", 10); 
      ele += getImage(1, eleOthers, others, ".jpg", 6);
      ele += getImage(1, eleBadge, badge, ".jpg", 6); 
      ele += getImage(1, eleIot, iot, ".jpg", 1);


      document.getElementById("aa").innerHTML = ele;
      var popup_btn = $('.popup-btn');
        popup_btn.magnificPopup({
            type : 'image',
            gallery : {
               enabled : true
            }
        }); 
    
  });  
  
});       

function getImage(i, ele, dir, fileextension, fcount) {
    ele+='<div class="item selfie col-lg-3 col-md-4 col-6 col-sm">  <a href="'+dir+i+fileextension+'" class="fancylight popup-btn" data-fancybox-group="light">  <img class="img-fluid" src="'+dir+i+fileextension+'" alt=""></a> </div>';
    if (i==fcount){
      return ele;     
    }else{
      i++;
      return getImage(i, ele, dir, fileextension, fcount);
    };
};




        // $('.portfolio-item').isotope({
        //      itemSelector: '.item',
        //      layoutMode: 'fitRows'
        //  });
         $('.portfolio-menu ul li').click(function(){
            $('.portfolio-menu ul li').removeClass('active');
            $(this).addClass('active');
            
            var selector = $(this).attr('data-filter');
            $('.portfolio-item').isotope({
                filter:selector
            });
            return  false;
         });
         


