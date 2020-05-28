






    

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

$('ul.tabs li').last().addClass("tab_last"); 
 
 /* tab mode */
 
$("ul.tabs li").click(function() {
		
  $(".tab_content").hide();
  var activeTab = $(this).attr("rel"); 
  $("#"+activeTab).fadeIn();		

  $("ul.tabs li").removeClass("active");
  $(this).addClass("active");

$(".tab_drawer_heading").removeClass("d_active");
$(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");

});

/*drawer mode */
$(".tab_drawer_heading").click(function() {
  
  $(".tab_content").hide();
  var d_activeTab = $(this).attr("rel"); 
  $("#"+d_activeTab).fadeIn();

$(".tab_drawer_heading").removeClass("d_active");
  $(this).addClass("d_active");

$("ul.tabs li").removeClass("active");
$("ul.tabs li[rel^='"+d_activeTab+"']").addClass("active");
});
