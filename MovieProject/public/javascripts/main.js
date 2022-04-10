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

// setInterval(function(){
//     document.getElementById("order-time").value = new Date();
// }, 100);
function setOrderValues(){
    let order = new OrderObject;
    order.StoreID = storeIdValues[Math.floor(Math.random() * 6)];
    //sets the SalesPersonID
    switch(order.StoreID){
        case 98053:
            order.SalesPersonID = Math.floor(Math.random() * 4  + 1);
            break;
        case 98007:
            order.SalesPersonID = Math.floor(Math.random() * 4  + 5);
            break;
        case 98077:
            order.SalesPersonID = Math.floor(Math.random() * 4  + 9);
            break;
        case 98055:
            order.SalesPersonID = Math.floor(Math.random() * 4 + 13);
            break;
        case 98011:
            order.SalesPersonID = Math.floor(Math.random() * 4) + 17;
            break;
        case 98046:
            order.SalesPersonID = Math.floor(Math.random() * 4) + 21;
            break;
    }
    order.CdID = cdIdValues[Math.floor(Math.random() * 10)];
    order.PricePaid = Math.floor(Math.random() * 11) + 5;
    order.Date = new Date();

    document.getElementById("storeID").value = order.StoreID;
    document.getElementById("order-time").value = order.Date;    
    document.getElementById("salesPersonID").value = order.SalesPersonID;
    document.getElementById("cdID").value = order.CdID;
    document.getElementById("pricePaid").value = order.PricePaid;
}

document.addEventListener("DOMContentLoaded", function () {
    setOrderValues();

// add button events ************************************************************************
    document.getElementById("buttonCreate").addEventListener("click", function () {
        let newOrder = new OrderObject();
        newOrder.StoreID = document.getElementById("storeID").value;
        newOrder.SalesPersonID = document.getElementById("salesPersonID").value;
        newOrder.CdID = document.getElementById("cdID").value;
        newOrder.PricePaid = document.getElementById("pricePaid").value;
        newOrder.Date = document.getElementById("order-time").value;


        // fetch('/AddOrder', {
        //     method: "POST",
        //     body: JSON.stringify(newOrder),
        //     headers: {"Content-type": "application/json; charset=UTF-8"}
        //     })
        //     .then(response => response.json()) 
        //     .then(json => console.log(json)
        //     )
        //     .catch(err => console.log(err));
    
        // $.ajax({
        //     url : "/AddMovie",
        //     type: "POST",
        //     data: JSON.stringify(newMovie),
        //     contentType: "application/json; charset=utf-8",
        //      success: function (result) {
        //         console.log(result);
        //         createList();
        //     }
        // });

        setOrderValues();
    }); 
    

});  
// end of wait until document has loaded event  *************************************************************************
