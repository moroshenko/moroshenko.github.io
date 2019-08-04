var FIRST = false;
var SECOND = true;

var ADD = "+";
var MINUS = "-";
var MULT = "*";
var DIV = "/";
var POW = "^";
var SQRT = "SQRT";
var SIN = "SIN";
var COS = "COS";
var TG = "TG";
var CTG = "CTG";
var PLUS_SIGN = '';

var operator;
var sign;

var num1 = "0";
var num2 = "0";
var answ;
var current_num = FIRST;

var isVisible = true;
function more(){
    var typee
    var typee2
    if(isVisible) {typee = "none"; typee2 = typee; document.getElementById("chmod").textContent = "MORE ->"}
    else {typee = "block"; typee2 = "ruby"; document.getElementById("chmod").textContent = "<- LESS"}

    document.getElementById("sincos").style.display = typee;

    document.getElementById("pow").style.display = typee2;
    document.getElementById("dot").style.display = typee2;
    document.getElementById("sec_pow").style.display = typee2;
    document.getElementById("sqrt").style.display = typee2;
    isVisible = !isVisible;

}

function displayNum(num) {

    if(num1.length >= 14){
        num = +num1;
        num = num.toFixed(10);
        num1 = num.toString();
    }

    document.getElementById("text").textContent = String(sign + num.toString());
    console.log("display success");
}

function addChar(num){
    if(current_num === FIRST) {
        if(num1 != "0")
            num1 = num1 + num.toString();
        else
            num1 = num.toString();

        console.log(num1);
        displayNum(num1);
        console.log("display");

    }
    else {
        if(num2 != "0")
            num2 = num2 + num.toString();
        else
            num2 = num.toString();

        console.log(num2);
        displayNum(num2);
        console.log("display");
    }

}

function clear(){
    if(current_num === FIRST) {
        num1 = "0";
        console.log(num1);
        displayNum(num1);
    }
    else {
        num2 = "0";
        displayNum(num2);
    }
}


//fast equal!!! Dont only sqrt!!!
function _sqrt(op = SQRT){
    
    if(current_num == SECOND)
        equal();
    switch(op){
        case SQRT:
            num1 = Math.sqrt(num1).toString();
            break;
        case SIN:
            num1 = Math.sin(num1).toString();
            break;
        
        case COS:
            num1 = Math.cos(num1).toString();
            break;
            
        case TG:
            num1 = Math.tan(num1).toString();
            break;  

        case CTG:
            num1 = 1 / Math.tan(num1).toString();
            break;          
    }
    
    displayNum(num1);
    
}



function chOp(op){
    current_num = SECOND;
    operator = op;
    displayNum(num2);    
}


function equal(){
    numO = +num1;
    numS = +num2;
    switch (operator) {
        case ADD:

            answ = numO + numS;

            break;
        case MINUS:

            answ = numO - numS;

            break;
        case MULT:

            answ = numO * numS;

            break;
        case DIV:

            answ = numO / numS;

            break;
        case POW:

            answ = Math.pow(numO,numS);
            break;

    }
    num1 = answ.toString();
    num2 = "0";
    current_num = FIRST;
    displayNum(num1);
}

function chSign() {
    /*if(sign === PLUS_SIGN)
        sign = MINUS;
    else
        sign = PLUS_SIGN;
    */
    if(current_num == FIRST) {num1 = (-num1).toString(); displayNum(num1)}
    else {num2 = (-num2).toString(); displayNum(num2)}

}

function chMod() {

}

function dot() {
    if(current_num == FIRST) {num1 = num1 + "."; displayNum(num1)}
    else {num2 = num2 + "."; displayNum(num2)}
}

sign = PLUS_SIGN;

more();

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("num")) {

        var choseButton = e.target.textContent;

        console.log(choseButton);
        addChar(+choseButton);

    }
    else if (e.target.classList.contains("math")) {
        var choseButton = e.target.id;
        sign = PLUS_SIGN;
        if(choseButton === "clear") clear();

        if(choseButton === "add") chOp(ADD);
        if(choseButton === "minus") chOp(MINUS);
        if(choseButton === "mult") chOp(MULT);
        if(choseButton === "pow") chOp(POW);
        if(choseButton === "div") chOp(DIV);
        if(choseButton === "dot") dot();
        if(choseButton === "pow") chOp(POW);
        if(choseButton === "sqrt") _sqrt();

        if(choseButton === "sec_pow") {
            if(current_num == SECOND)
                equal();
            num1 = Math.pow(+num1, 2).toString();
            displayNum(num1);
        }
    }
    else if(e.target.classList.contains("equal")) {

        equal();

    }
    else if(e.target.classList.contains("spec")) {

        var choseButton = e.target.id;
        sign = PLUS_SIGN;
       
        if(choseButton === "sin") _sqrt(SIN);
        if(choseButton === "cos") _sqrt(COS);
        if(choseButton === "tg") _sqrt(TG);
        if(choseButton === "ctg") _sqrt(CTG);


    }
    else if(e.target.classList.contains("text")) {
        chSign();
    }
    else if(e.target.classList.contains("chmod-btn")) {
        more();
    }

});