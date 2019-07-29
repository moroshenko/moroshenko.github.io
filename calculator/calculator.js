var FIRST = false;
var SECOND = true;

var ADD = "+";
var MINUS = "-";
var MULT = "*";
var DIV = "/";
var POW = "^";
var PLUS_SIGN = '';

var operator;
var sign;

var num1 = 0;
var num2 = 0;
var answ;
var current_num = FIRST;

function displayNum(num) {
    document.getElementById("text").textContent = String(sign + num.toString());
    console.log("display success");
}

function addChar(num){
    if(current_num === FIRST) {
        if(num1 != 0)
            num1 = num1*10 + num;
        else
            num1 += num;

        console.log(num1);
        displayNum(num1);
        console.log("display");

    }
    else {
        if(num2 != 0)
            num2 = num2*10 + num;
        else
            num2 += num;

        console.log(num2);
        displayNum(num2);
        console.log("display");
    }

}

function clear(){
    if(current_num === FIRST) {
        num1 = 0;
        console.log(num1);
        displayNum(num1);
    }
    else {
        num2 = 0;
        displayNum(num2);
    }
}

function add(){
    current_num = SECOND;
    operator = ADD;
    displayNum(num2);
}

function minus(){
    current_num = SECOND;
    operator = MINUS;
    displayNum(num2);
}

function mult(){
    current_num = SECOND;
    operator = MULT;
    displayNum(num2);
}

function div(){
    current_num = SECOND;
    operator = DIV;
    displayNum(num2);
}

function pow(){
    current_num = SECOND;
    operator = POW;
    displayNum(num2);
}

function equal(){
    switch (operator) {
        case ADD:

            answ = num1 + num2;

            break;
        case MINUS:

            answ = num1 - num2;

            break;
        case MULT:

            answ = num1 * num2;

            break;
        case DIV:

            answ = num1 / num2;

            break;
        case POW:

            for (i = 0;i < num2;i++)
                num1 = num1*num1;
            answ = num1;
            break;

    }
    displayNum(answ);
    num1 = answ;
    num2 = 0;
    current_num = FIRST;
}

function chSign() {
    /*if(sign === PLUS_SIGN)
        sign = MINUS;
    else
        sign = PLUS_SIGN;
    */
    if(current_num == FIRST) {num1 = -num1; displayNum(num1)}
    else {num2 = -num2; displayNum(num2)}

}

function chMod() {

}

sign = PLUS_SIGN;

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("num")) {

        var choseButton = e.target.textContent;

        console.log(choseButton);
        addChar(+choseButton);

    }
    else if (e.target.classList.contains("math")) {
        var choseButton = e.target.textContent;
        sign = PLUS_SIGN;
        if(choseButton === "CE") clear();

        if(choseButton === "+") add();
        if(choseButton === "--") minus();
        if(choseButton === "*") mult();
        if(choseButton === "^") pow();
        if(choseButton === "÷") div();
        if(choseButton === "ee")  document.getElementById("assa").style.display = "none";
        if(choseButton === "eea")  document.getElementById("assa").style.display = "block";
    }
    else if(e.target.classList.contains("equal")) {

        equal();

    }
    else if(e.target.classList.contains("text")) {
        chSign();
    }
    else if(e.target.classList.contains("chmod-btn")) {
        chMod();
    }

});


