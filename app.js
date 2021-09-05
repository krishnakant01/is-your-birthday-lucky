const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector(".btn-check-number");
const outputDiv = document.querySelector(".output");

function performCalculation(){
  
    var sum = 0;
    const date = dateOfBirth.value;
    const number = luckyNumber.value;
    for(let i=0;i<date.length;i++){
        if(date[i]==="-"){
            continue;
        }
        else{
            sum+=Number(date[i]);
        }
    }
   
    if(sum%number===0){
        displayMessage("Your Birthday is Lucky!🥳")
    }
    else{
        displayMessage("Not so Lucky Day!🙁")
    }

}
function calculateSum(){
    
}
function displayMessage(message) {
    outputDiv.innerText = message;
    console.log("Clicked");
    console.log(dateOfBirth.value);
    console.log(luckyNumber.value);
    console.log(typeof (dateOfBirth.value));
}

checkButton.addEventListener("click", performCalculation);