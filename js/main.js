






    

$(".exp-btn").click(function(){
    $(this).parent(".grosma-sidebar").removeClass("sd-close");
   $(this).siblings( ".cls-btn" ).show();
   $(this).hide();
});
 $(".cls-btn").click(function(){
    $(this).parent(".grosma-sidebar").addClass("sd-close");
   $(this).siblings( ".exp-btn" ).show();
   $(this).hide();

   
});



function openSearch() {
  document.getElementById("myOverlay").style.display = "block";
}

function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
}


