$(function(){
    $("#insert-nav").load("/portfolio/html/nav.html"); 
    
    var acc = document.getElementsByClassName("open-menu");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function() {
    this.classList.toggle("active");
    var navigation = this.nextElementSibling;
    if (navigation.style.maxHeight){
      navigation.style.maxHeight = null;
    } else {
      navigation.style.maxHeight = navigation.scrollHeight + "px";
    }
  }
}
    
});