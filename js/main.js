


//-------FUNZIONI-----------
function calculateOffer(event){
    event.preventDefault();

    
    let hours= document.getElementById("hours").value; //verificare che sia un numero
    hours= parseInt(hours);

    let typeOfWork=document.getElementById("type-of-work");  
    let typeOfWorkSelected = typeOfWork.options[typeOfWork.selectedIndex].value;


    let finalPrice=0;

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