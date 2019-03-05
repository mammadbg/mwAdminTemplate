
// main body
// ------------------------------

let newCardWindow = document.getElementById("newCardWindow");
let newCardInput = document.getElementById("addCardInput");
let doneButton = document.getElementById("doneButton");
let okWindow =document.getElementById("okWindow");
let okWindow2 =document.getElementById("okWindow2");
let okH62 = document.getElementById("okCardText2");
let okCardBody= document.getElementById("okCardBody");
let closeButton= document.getElementById("closeButton");
let addCard = document.getElementById("addCard")




// adding new card
addCard.addEventListener("click",function(){
    newCardWindow.style.height="170px";
    newCardWindow.style.visibility="visible";
    newCardWindow.style.height="120px";
})

// closing new card window
closeButton.addEventListener("click",function(){
    newCardWindow.style.height="0px";
    newCardWindow.style.visibility="hidden";
    newCardWindow.style.height="0px";
})

// adding new card in new window
doneButton.addEventListener("click",function(){
    if(newCardInput.value!=null){
        okWindow.lastChild;
        var cln = okWindow.cloneNode(true);
        okWindow2.appendChild(cln);
        
        newCardWindow.style.height="0px";
        newCardWindow.style.visibility="hidden";
        newCardWindow.style.height="0px";
        okWindow2.style.height="170px";
        okWindow2.style.visibility="visible";
        okWindow2.style.height="120px";  
        okH62.innerHTML=newCardInput.value;
        
    }
    else{
        console.log("asjdkashdkjk");
        newCardWindow.style.display="block";
        alert("Please Fill All Required Field");
        return false;
    }
});


let lastCardBody = document.getElementById("lastCardBody");
let lastCardInput = document.getElementById("lastCardInput");

// last card opening and closing
let fourthHeadx = document.getElementById("fourthHeadx");
fourthHeadx.addEventListener("click",function(){
    fourthHeadx.style.backgroundColor="white";
    lastCardBody.style.visibility="visible";
    lastCardInput.style.visibility="visible";

})

// ------------------------------
//end main body



//opening overlay
let profileImages = document.getElementsByClassName("profileImages");
let taskBoardOverlay = document.getElementById("taskBoardOverlay");
let taskBoardOverlayClass = document.getElementsByClassName("taskBoardOverlay");
let taskBoardCardDetailsButton = document.getElementById("taskBoardCardDetailsButton");
let taskBoardActivityButton = document.getElementById("taskBoardActivityButton");
let taskBoardCardDetailsBody = document.getElementById("taskBoardCardDetailsBody");
let taskBoardActivityBody = document.getElementById("taskBoardActivityBody");
let calendarTime = document.getElementsByClassName("calendarTime");
calendarTime.innerHTML="asdasdasdasdas";
let rightOpenButton = document.getElementsByClassName("rightOpenButton");
let rightOpenButton1 = document.getElementById("rightOpenButton1");




taskBoardOverlay.style.visibility="hidden";
taskBoardOverlay.style.display="none";

rightOpenButton1.addEventListener("click", function(){
    alert("zart");      
})



// right side profiles 
// // opening right side profiles when click small images
// rightOpenButton.addEventListener("click",function(){
//     taskBoardOverlay.style.visibility="visible";
//     
// })





taskBoardActivityBody.style.visibility="hidden";
taskBoardActivityBody.style.display="none";

//choose either card details or activity section
taskBoardCardDetailsButton.addEventListener("click", function(){
    taskBoardCardDetailsBody.style.visibility = "visible";
    taskBoardCardDetailsBody.style.display = "block";
    taskBoardActivityBody.style.visibility = "hidden";
    taskBoardActivityBody.style.display="none";
})
taskBoardActivityButton.addEventListener("click", function(){
    taskBoardActivityBody.style.visibility = "visible";
    taskBoardActivityBody.style.display="block";
    taskBoardCardDetailsBody.style.visibility = "hidden";
    taskBoardCardDetailsBody.style.display = "none";
})







