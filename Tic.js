let btaR = document.querySelectorAll(".button-click");
let popR = document.querySelector(".popup");
let gameBtn = document.getElementById("game");
let resBtn = document.getElementById("restart");
let msgR = document.getElementById("message");

let winningPattern = [
[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[8, 3, 6],
[1, 4, 7],
[2, 5, 8],
[8, 4, 8],
[2, 4, 6],
];

let xTurn = true;
let count = 0;



const disableButtons = () => {
   btaR.forEach((element) => (element.disabled = true));
   popR.classList.remove("hide");
};


const enableButtons = () => {
   btaR.forEach((element) => {
     element.innerText = "";
     element.disabled = false;

   });

   popR.classList.add("hide");
};

const winFunction = (letter) => { 
   disableButtons();
  if (letter == "A") {
      msgR.innerHTML = "&#x1F389; <br> 'A' Wins";
  }
  else{
      msgR.innerHTML = "&#x1F389; <br> 'K' Wins";
  }
};

const drawFunction = () => {
   disableButtons();
   msgR.innerHTML = "&#x1F60E; <br> It,s a Drow";
};
gameBtn.addEventListener("click", () => {
   count = 0;
   enableButtons();
});

resBtn.addEventListener("click", () => {
   count = 0; 
   enableButtons();
});

//
const winChecker = () => {

   for(let i of winningPattern) {
      let[element1, element2, element3] = [
         btaR[i[0]].innerText, 
         btaR[i[1]].innerText,
         btaR[i[2]].innerText,
      ];
      if(element1 != "" && (element2 != "") & (element3 != "")){

         if(element1 == element2  && element2 == element3){
            winFunction(element1);
         }
      }
   }
};

btaR.forEach((element)  => {
   element.addEventListener("click", () => {
     if (xTurn){
        xTurn = false;
        element.innerText = "A";
        element.disabled = true;
     } else {
        xTurn = true;
        element.innerText = "K";
        element.disabled = true;
     }
      
    
      count += 1;
      if(count == 9){
         drawFunction();
      }
      winChecker();

   });

});

window.onload = enableButtons;