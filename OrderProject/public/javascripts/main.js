let storeIdValues = [98053, 98007, 98077, 98055, 98011, 98046];
let cdIdValues = [123456, 123654, 321456, 321654, 654123, 654321, 543216, 354126, 621453, 623451];

// define a constructor to create movie objects
let OrderObject = function () {
    this.StoreID;
    this.SalesPersonID;
    this.CdID;
    this.PricePaid;
    this.Date;
}

//continuously updates the time
setInterval(function(){
    document.getElementById("order-time").value = new Date();
}, 100);

function Get500Orders(){
    //After the for loop, this will contain 500 orders
    let orderArray = new Array(500);
    let currentTime;
    for(let i = 0; i < orderArray.length; i++){
        let newOrder = new OrderObject();
        if (i = 0){
            currentTime = document.getElementById("order-time").value;            
            newOrder.StoreID = document.getElementById("storeID").value;
            newOrder.SalesPersonID = document.getElementById("salesPersonID").value;
            newOrder.CdID = document.getElementById("cdID").value;
            newOrder.PricePaid = document.getElementById("pricePaid").value;
            newOrder.Date = document.getElementById("order-time").value;
        }
        else{
            newOrder.StoreID = document.getElementById("storeID").value;
            newOrder.SalesPersonID = document.getElementById("salesPersonID").value;
            newOrder.CdID = document.getElementById("cdID").value;
            newOrder.PricePaid = document.getElementById("pricePaid").value;
            currentTime.setSeconds(currentTime.getSeconds() + Math.floor(Math.random() * 1501  + 300));
            newOrder.Date = currentTime;
        }
        orderArray[i] = newOrder;
    }
}

//set the remaining values for an order object when CREATE button is clicked
function SetOrderValues(){
    let order = new OrderObject;
    //0-5
    order.StoreID = storeIdValues[Math.floor(Math.random() * 6)];
    //sets the SalesPersonID
    switch(order.StoreID){
        case 98053:
            //1-4
            order.SalesPersonID = Math.floor(Math.random() * 4  + 1);
            break;
        case 98007:
            //5-8
            order.SalesPersonID = Math.floor(Math.random() * 4  + 5);
            break;
        case 98077:
            //9-12
            order.SalesPersonID = Math.floor(Math.random() * 4  + 9);
            break;
        case 98055:
            //13-16
            order.SalesPersonID = Math.floor(Math.random() * 4 + 13);
            break;
        case 98011:
            //17-20
            order.SalesPersonID = Math.floor(Math.random() * 4) + 17;
            break;
        case 98046:
            //21-24
            order.SalesPersonID = Math.floor(Math.random() * 4) + 21;
            break;
    }
    //0-9
    order.CdID = cdIdValues[Math.floor(Math.random() * 10)];
    //5-15
    order.PricePaid = Math.floor(Math.random() * 11) + 5;

    document.getElementById("storeID").value = order.StoreID; 
    document.getElementById("salesPersonID").value = order.SalesPersonID;
    document.getElementById("cdID").value = order.CdID;
    document.getElementById("pricePaid").value = order.PricePaid;
}

document.addEventListener("DOMContentLoaded", function () {
    SetOrderValues();



// add button events ************************************************************************
    // document.getElementById("buttonSubmitOne").addEventListener("click", function () {
    //     let newOrder = new OrderObject();
    //     newOrder.StoreID = document.getElementById("storeID").value;
    //     newOrder.SalesPersonID = document.getElementById("salesPersonID").value;
    //     newOrder.CdID = document.getElementById("cdID").value;
    //     newOrder.PricePaid = document.getElementById("pricePaid").value;
    //     newOrder.Date = document.getElementById("order-time").value;


    //     // fetch('/AddOrder', {
    //     //     method: "POST",
    //     //     body: JSON.stringify(newOrder),
    //     //     headers: {"Content-type": "application/json; charset=UTF-8"}
    //     //     })
    //     //     .then(response => response.json()) 
    //     //     .then(json => console.log(json)
    //     //     )
    //     //     .catch(err => console.log(err));
    
    //     // $.ajax({
    //     //     url : "/AddOrder",
    //     //     type: "POST",
    //     //     data: JSON.stringify(newOrder),
    //     //     contentType: "application/json; charset=utf-8",
    //     //      success: function (result) {
    //     //         console.log(result);
    //     //     }
    //     // });

    //SetOrderValues();
    // }); 
    

});  
// end of wait until document has loaded event  *************************************************************************
