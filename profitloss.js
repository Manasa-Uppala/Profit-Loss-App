const price= document.querySelector("#price");
const quantity=document.querySelector("#quantity");
const CurrentPrice=document.querySelector("#current-price");
const btn=document.querySelector("#btn");
const out=document.querySelector("#out");

btn.addEventListener("click",submitHandler);


    function submitHandler(){

        if(price.value=="" || quantity.value=="" || CurrentPrice.value==""){
            alert(" Please enter  values in all fields")

        }

        else {
    var costprice=Number(price.value);
    var no= Number(quantity.value);
    var sellingprice= Number(CurrentPrice.value);

    profitLoss(costprice , no,sellingprice);
        }


}
    function profitLoss(costprice,quantity,sellingprice){
    if(sellingprice>costprice){
        var profit= (sellingprice-costprice)*quantity;
        var profit_percentage= (profit/costprice)*100;
        let profit_percentage1=profit_percentage.toFixed(3);
        out.innerText=( hey the profit is ${profit} and profit percentage is ${profit_percentage1}%);
        out.style.color='green';

    }
    else if(costprice> sellingprice) {
        var loss= (costprice-sellingprice)*quantity;
        var loss_percentage=(loss/costprice)*100;
        let loss_percentage1= loss_percentage.toFixed(3);
        out.innerText=(Hey the Loss is ${loss} and loss percentage is ${loss_percentage1}%);
        out.style.color='red';

    }
    else{
        console.log("No profit no loss");
    }
}
