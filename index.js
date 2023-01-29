 // 1 Back to top button
var backTopBtn = document.getElementById("backTopBtn")
var backTopBtnText = document.getElementsByClassName("backTopBtn-text")

function scrollFunction(){
    if(document.body.scrollTop > 200 || 
        document.documentElement.scrollTop > 200){
        backTopBtn.style.visibility = "visible";
        backTopBtn.style.opacity ="1";
        backTopBtn.style.transition = "visibility 0.7s, opacity 0.7s linear";
    } else {
        backTopBtn.style.visibility ="hidden";
        backTopBtn.style.opacity="0";
        backTopBtn.style.transition = "visibility 0.7s, opacity 0.7s linear";     
    }
}

function backTopFunction(){
    document.body.scrollTo({
        top: 0,
        behavior:'smooth'
    })
    document.documentElement.scrollTo({
        top: 0,
        behavior:'smooth'
    })
}

backTopBtn.addEventListener("click", backTopFunction)
window.onscroll = function(){
    scrollFunction()
}
// End Back to top button


//-----------------------------------------------------------------------------------//


// 2 show mobile menu button
var menuButton = document.getElementById("top-bar-icon") 
var menuMobile = document.getElementById("top-bar-moblie")

function showMenu(){
    if(menuMobile.style.visibility === "hidden"){
        menuMobile.style.visibility = "visible";
        menuMobile.style.opacity= "1";
        menuMobile.style.transition= "visibility 0.3s , opacity 0.3s linear"; 
    } else{
        menuMobile.style.visibility = "hidden";
        menuMobile.style.opacity= "0";
        menuMobile.style.transition= "visibility 0.3s , opacity 0.3s linear";
    }
}
menuButton.addEventListener("click",showMenu)
// end show mobile menu button


//-----------------------------------------------------------------------------------//


// 3 show tutorial page modal
var btn = document.querySelectorAll("button.modal-button")

var modals = document.querySelectorAll('.modal');

var spans = document.getElementsByClassName("modal-content-top-close");

for (var i = 0; i < btn.length; i++) {
    btn[i].onclick = function(e) {
       e.preventDefault();
       var modal = document.querySelector(e.target.getAttribute("href"));
       modal.style.display = "block";
    }
}

for (var i = 0; i < spans.length; i++) {
    spans[i].onclick = function() {
        for (var index in modals) {
            if (typeof modals[index].style !== 'undefined'){
                modals[index].style.display = "none";
            }    
        }
    }
}
   
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        for (var index in modals) {
            if (typeof modals[index].style !== 'undefined') {
                modals[index].style.display = "none";
            }  
        }
    }
}
//end show tutorial page modal