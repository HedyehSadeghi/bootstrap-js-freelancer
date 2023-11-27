let arrayDiscountCodes=["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];
let discount=false;




//-------FUNZIONI-----------

function controlDiscount(discountInput){

   for (i=0; i<arrayDiscountCodes.length; i++){
        if (discountInput== arrayDiscountCodes[i]);
        discount=true;
        break;
    };
    return discount;

}


function calculateOffer(event){
    event.preventDefault();

    
    let hours= document.getElementById("hours").value; //verificare che sia un numero
    hours= parseInt(hours);

    let typeOfWork=document.getElementById("type-of-work");  
    let typeOfWorkSelected = typeOfWork.options[typeOfWork.selectedIndex].value;

    let finalPrice=0;
    let discountInput=document.getElementById("discount-code").value;
    let discount= controlDiscount(discountInput);

    if (discount){
        if (typeOfWorkSelected=="1"){
            finalPrice+= hours *20.50;
            finalPrice*= 0.75;
            finalPrice= finalPrice.toFixed(2);
            console.log(finalPrice);
        }
        else if (typeOfWorkSelected=="2"){
            finalPrice+= hours *15.3;
            finalPrice*= 0.75;
            finalPrice= finalPrice.toFixed(2);
            console.log(finalPrice);
    
        }
        else if (typeOfWorkSelected=="3"){
            finalPrice+= hours *33.6;
            finalPrice*= 0.75;
            finalPrice= finalPrice.toFixed(2);
            console.log(finalPrice);
        }

    }

    else{
        alert("discount non valido");

        if (typeOfWorkSelected=="1"){
            finalPrice+= hours *20.50;
            finalPrice= finalPrice.toFixed(2);
            console.log(finalPrice);
        }
        else if (typeOfWorkSelected=="2"){
            finalPrice+= hours *15.3;
            finalPrice= finalPrice.toFixed(2);
            console.log(finalPrice);
    
        }
        else if (typeOfWorkSelected=="3"){
            finalPrice+= hours *33.6;
            finalPrice= finalPrice.toFixed(2);
            console.log(finalPrice);
    
        }

    }


}