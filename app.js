let firstNum = 0, secNum = 0,displayNum ="";
let operChoice ="";
let result = 0;

//operations
const addNums = (n1,n2) => n1+n2;
const subNums = (n1,n2) => n1-n2;
const multNums = (n1,n2) => n1*n2;
const divNums = (n1,n2) => n1/n2;

//all clear
function AC()
{
    displayNum="";
    firstNum=0, secNum=0, operChoice="";
}

//display
const calcDisplay = document.getElementById("calcDisplay");
function displayRefresh ()
{
    calcDisplay.textContent = displayNum;
}
function displayWrite (event)
{
    displayNum = String(displayNum);
    if(event.target.textContent != "=")
    {
        displayNum = displayNum.replace("+","").replace("-","").replace("x","").replace("/","").replace("=","");
        displayNum += event.target.textContent;
        if(event.target.textContent == "AC") AC();
    }
    displayRefresh();
}

//keypad
const keyPad = document.querySelectorAll(".keyPadButtons");
const keyPadButtons = [...keyPad];
keyPadButtons.forEach(keyPadButton => keyPadButton.addEventListener("click",displayWrite));


//operations
const operPad = document.querySelectorAll(".operPadButtons");
const operPadButtons = [...operPad];
operPadButtons.forEach(operPadButton => operPadButton.addEventListener("click",function(e){operationDetect(e);displayWrite(e)}));


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
        break;
        default: break;
    }
    firstNum = result;
    secNum = 0;
    operChoice="";
    return result;
}

//stuff to fix
//result and displayNum not resetting properly
//negative numbers not dsplaying properly
//operators influencing operation result