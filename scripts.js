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
/*var text="";
var sayi=0;
function asalHesapla()
{
var sayac=0;
sayi=document.getElementById('sayi1').value;
for(i=2; i<sayi; i++)
 {
	if(sayi%i==0)
	{
	sayac++;
	}
 }
	if(sayac==0)
	{
	text="Asal";
	}
	else
	{
	text="Asal değil.<br/> 1 ve Kendisi hariç <strong>"+sayac+"</strong> adet böleni var";
	}
 document.getElementById('demo').innerHTML = text;
 }*/

