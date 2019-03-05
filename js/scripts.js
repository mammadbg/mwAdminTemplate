// function hoverFunction(){
//   var nav = document.getElementById("mySidebar");
//   // nav.style:hover{nav.style.width="240px"};
//   nav.onclick (function(){
//     alert("jsfhsdbsj");
//   });
// }

// ( function (){
//    const navA = document.querySelectorAll("#mySidebar");
//  navA.addEventListener("click",function(event){
//     console.log(event.target);
//   });
//  });

function openCloseSideBar() {
  var nav = document.getElementById("mySidebar");
  var main = document.getElementById("main");
  var secondNavbar = document.getElementById("bottomNav");
  var head = document.querySelector("header");
  var foot = document.querySelector("footer");
  var sideBarToggleButton = document.getElementsByClassName("leftToggleButton");
  var st = window.getComputedStyle(sideBarToggleButton,null);

  if (nav.style.width == "240px") {
    nav.style.width = "48px";
    main.style.marginLeft = "0px";
    secondNavbar.style.marginLeft = "0px";
    head.style.marginLeft = "0px";
    foot.style.marginLeft = "0px";

  }
  else {
    nav.style.width = "240px";
    main.style.marginLeft = "240px";
    secondNavbar.style.marginLeft = "240px";
    head.style.marginLeft = "240px";
    foot.style.marginLeft = "240px";


  }

}

// document.getElementById("mySideBar").addEventListener(onmouseover,function(){
// })
// document.getElementById("mySideBar").addEventListener(onmouseout,function(){
  
// })
// var shortNav = document.getElementById("mySideBar").style.width="48px";
// var longNav = document.getElementById("mySideBar").style.width="240px";
var sideNav = document.getElementById("mySideBar");

function bigNav(sideNav){
  sideNav.style.width="240px";
}

function smallNav(sideNav){
  sideNav.style.width="48px";
}

// function openDropdown(){
//   var firstNavLeftSecond = document.getElementsByClassName("firstNavLeftSecond");
//   firstNavLeftSecond.style.width="340px";
//   firstNavLeftSecond.style.height="200px";
//   firstNavLeftSecond.style.transition = "all 2s ease-in-out";
//   if(firstNavLeftSecond.style.width=="340px" && firstNavLeftSecond.style.transition=="200px"){
//     firstNavLeftSecond.style.width=0;
//     firstNavLeftSecond.style.height=0;
//     firstNavLeftSecond.style.transition = "all 2s ease-in-out";
//   }  
//   else if(firstNavLeftSecond.style.width=="0px" && firstNavLeftSecond.style.transition=="0px"){
//     firstNavLeftSecond.style.width="340px";
//     firstNavLeftSecond.style.height="200px";
//     firstNavLeftSecond.style.transition = "all 2s ease-in-out";

//   }
// }


//footer email input
let footerEmail = document.getElementById("footerEmail");
footerEmail.addEventListener("click",function(){
  footerEmail.style.backgroundColor="white";
})