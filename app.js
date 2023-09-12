let firstNum = 0, secNum = 0,displayNum ="";
let operChoice ="";
let result = 0;

//operations
const addNums = (n1,n2) => n1+n2;
const subNums = (n1,n2) => n1-n2;
const multNums = (n1,n2) => n1*n2;
const divNums = (n1,n2) => n1/n2;

//display
const calcDisplay = document.getElementById("calcDisplay");
function displayRefresh ()
{
    calcDisplay.textContent = displayNum;
}

//all clear
function AC()
{
    displayNum="";
    firstNum=0, secNum=0, operChoice="";
}

function inputRead (event)
{
    console.log("funzion")
    if (event.target.matches(".operPadButtons"))
    {
        //op buttons
        console.log("ao");
    }
    else
    {
        console.log("yo");
        //keypad buttons
    }
    //verificare la classe del pulsante
    //ad ogni cambio di classe il displaynum viene resettato per evitare miscugli
    //switch case tra le due classi se possibile anche se basta un if
}

function operationDetect (event)
{ 
    if (!firstNum) firstNum = Number(displayNum);
    else secNum = Number(displayNum);
    displayNum="";
    if (secNum && operChoice) displayNum = operationExecute();
    operChoice = event.target.textContent;
    displayRefresh()
}

function operationExecute ()
{
    switch(operChoice) {
        case "+": result = addNums(firstNum,secNum);
        break;
        case "-": result = subNums(firstNum,secNum);
        break;
        case "x": result = multNums(firstNum,secNum)
        break;
        case "/": result = divNums(firstNum,secNum)
    }
    firstNum = result;
    secNum = 0;
    operChoice="";
    return result;
}

//universal event listener
const pad = document.querySelectorAll(".operPadButtons, .keyPadButtons");
console.log(pad)
const padButtons = [...pad];
console.log(padButtons)
padButtons.forEach(padButton => padButton.addEventListener("click",inputRead));