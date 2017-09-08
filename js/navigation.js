$(function(){
    $("#insert-nav").load("/portfolio/html/nav.html"); 
    
    var acc = document.getElementsByClassName("open-menu");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function() {
    this.classList.toggle("active");
    var navigationouter = this.nextElementSibling;
    if (navigationouter.style.maxHeight){
      navigationouter.style.maxHeight = null;
    } else {
      navigationouter.style.maxHeight = navigationouter.scrollHeight + "px";
    }
  }
}
    
});