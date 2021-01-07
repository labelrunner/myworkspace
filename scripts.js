function myFunction() {
    document.getElementById("demo").innerHTML = "Changing paragraphs with js codes"
}
function blablabla() {
    document.getElementById("demo").innerHTML = "Bla Bla Bla"
}

document.getElementById('changeBGC').onclick=function(){
    document.getElementById('body').style.backgroundColor="rgb(13, 16, 23)"; /*github's bgcolor*/
    
}


alert("Welcome to My Workspace!");

console.trace(2+2); /* let us trace the src of the specific code */

var i=0;
var images = ['images/black.jpg','images/fire.jpeg','images/lightning.jpg','images/water.jpg'];

var duration = 2000;
function slideImg(){
    document.slide.src = images[i];

    if(i < images.length - 1){
        i++;
    }
    else{
        i=0;
    }

    setTimeout("slideImg()", duration);
}
window.onload = slideImg;