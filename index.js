// function tom1(){
//   var tom1 = new Audio("sounds/tom-1.mp3");
//   tom1.play();
//   //this.style.color="white";
// }
// function tom2(){
//   var tom2 = new Audio("sounds/tom-2.mp3");
//   tom2.play();
// }
// function tom3(){
//   var tom3 = new Audio("sounds/tom-3.mp3");
//   tom3.play();
// }
// function tom4(){
//   var tom4 = new Audio("sounds/tom-4.mp3");
//   tom4.play();
// }
// function snare(){
//   var snare = new Audio("sounds/snare.mp3");
//   snare.play();
// }
// function crash(){
//   var crash = new Audio("sounds/crash.mp3");
//   crash.play();
// }
// function kick(){
//   var kick = new Audio("sounds/kick.mp3");
//   kick.play();
// }

// for (var i=0;i<document.querySelectorAll(".drum").length;i++){
//   document.querySelectorAll(".drum")[i].addEventListener("click" , play);
// }

// document.querySelectorAll(".drum")[0].addEventListener("click",tom1);
// document.querySelectorAll(".drum")[1].addEventListener("click",tom2);
// document.querySelectorAll(".drum")[2].addEventListener("click",tom3);
// document.querySelectorAll(".drum")[3].addEventListener("click",tom4);
// document.querySelectorAll(".drum")[4].addEventListener("click",snare);
// document.querySelectorAll(".drum")[5].addEventListener("click",crash);
// document.querySelectorAll(".drum")[6].addEventListener("click",kick);



// function Kurye(isim,yas,ehliyet){
//     this.isim = isim;
//     this.yas = yas;
//     this.ehliyet = ehliyet;
//     this.basvuru = function(){
//         alert("Calısmak İstiyorum");
//     }
// }
//
// var kurye1 = new Kurye("Emrah", 21, true);





for (var i=0;i<document.querySelectorAll(".drum").length;i++){
      document.querySelectorAll(".drum")[i].addEventListener("click", function(){

        var harf = this.innerHTML;
        key(harf);
        animation(harf);

})
}


document.addEventListener("keydown",function(event){
    //console.log(e.key);
      var harf = event.key
      key(harf);
      animation(harf);
})





function key(harf){

  switch(harf){
    case "w":
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
    //document.querySelectorAll(".drum")[0].style.color = "white";
    break;

    case "a":
    var audio = new Audio("sounds/tom-2.mp3");
    audio.play();
    break;

    case "s":
    var audio = new Audio("sounds/tom-3.mp3");
    audio.play();
    break;

    case "d":
    var audio = new Audio("sounds/tom-4.mp3");
    audio.play();
    break;

    case "j":
    var audio = new Audio("sounds/snare.mp3");
    audio.play();
    break;

    case "k":
    var audio = new Audio("sounds/crash.mp3");
    audio.play();
    break;

    case "l":
    var audio = new Audio("sounds/kick.mp3");
    audio.play();
    break;
  }
}



function animation(currentKey){
  var yeniKelime = document.querySelector("."+currentKey);  //örn .w ' u bul.    ardından pressed class'ı ekle.
  yeniKelime.classList.add("pressed");

  setTimeout(function(){yeniKelime.classList.remove("pressed");} , 100);  //pressed classını 100 zaman dilimi sonra çıkart.
}
