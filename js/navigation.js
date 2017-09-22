$(function(){
    
    // Loading Main-Navigation in index.html
    $("#insert-nav").load("./html/nav.html"); 
        
    // Accordion function for Main-Nav
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


