
const inputBill = document.getElementById("bill_input");
const button = document.querySelectorAll(".btn");
const custom = document.getElementById('custom');
const numOfPeople = document.getElementById("people");
const tipAmount = document.getElementById("tip_amount");
const totalAmount = document.getElementById("total_amount");
const reset = document.querySelector(".btn-reset");

let bill = 0;
let tip = 0;
let people = 1;

inputBill.addEventListener("input", () => {

    bill = Number(inputBill.value);
    calc();
});

button.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        button.forEach(b=>{
            b.style.background= "hsl(183, 100%, 15%)";
            b.style.color="white";
        });

        custom.addEventListener("click",()=>{
            button.forEach(b=>{
                b.style.background= "hsl(183, 100%, 15%)";
                b.style.color="white";
            });
        });
        
        btn.style.background= "hsl(172, 67%, 45%)";
        btn.style.color="hsl(183, 100%, 15%)";
       tip = btn.value;

        calc();
    });

});

custom.addEventListener("input",()=>{
    tip = custom.value;
    calc();
});

numOfPeople.addEventListener("input",()=>{
    people = numOfPeople.value;
    calc();
});

reset.addEventListener("click", rst);

function rst(){
    inputBill.value="0";
    custom.value="";
    numOfPeople.value="1";
    tipAmount.innerHTML="R0.00";
    totalAmount.innerHTML="R0.00";

    button.forEach(b=>{
        b.style.background= "hsl(183, 100%, 15%)";
        b.style.color="white";
    });
}

function calc(){
    if(bill >= 0 && people >= 1){
        let tip_Amount = ((bill*tip)/100)/people;
        let total = (tip_Amount + bill)/people;
        tipAmount.innerHTML = "R" + tip_Amount.toFixed(2);
        totalAmount.innerHTML = "R" + total.toFixed(2);
    }

}






