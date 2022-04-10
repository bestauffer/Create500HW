
let orderArray = [];
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
    order.CdID = cdIdValues[Math.floor(Math.random() * 9)];
    order.PricePaid = Math.floor(Math.random() * 10) + 5;
    order.Date = new Date();
    return order;
}

document.addEventListener("DOMContentLoaded", function () {
    let newOrder = new OrderObject;
    newOrder = setOrderValues();

    document.getElementById("storeID").value = newOrder.StoreID;
    //set the Date
    document.getElementById("order-time").value = newOrder.Date;
    //sets the SalesPersonID
    switch(newOrder.StoreID){
        case 98053:
            newOrder.SalesPersonID = Math.floor(Math.random() * 4) + 1;
            break;
        case 98007:
            newOrder.SalesPersonID = Math.floor(Math.random() * 4) + 5;
            break;
        case 98077:
            newOrder.SalesPersonID = Math.floor(Math.random() * 4) + 9;
            break;
        case 98055:
            newOrder.SalesPersonID = Math.floor(Math.random() * 4) + 13;
            break;
        case 98011:
            newOrder.SalesPersonID = Math.floor(Math.random() * 4) + 17;
            break;
        case 98046:
            newOrder.SalesPersonID = Math.floor(Math.random() * 4) + 21;
            break;
    }
    document.getElementById("salesPersonID").value = newOrder.SalesPersonID;
    document.getElementById("cdID").value = newOrder.CdID;
    document.getElementById("pricePaid").value = newOrder.PricePaid;

// add button events ************************************************************************
    document.getElementById("buttonAdd").addEventListener("click", function () {
        let newOrder = new OrderObject(document.getElementById("title").value, 
        document.getElementById("year").value, selectedGenre);

        fetch('/AddOrder', {
            method: "POST",
            body: JSON.stringify(newMovie),
            headers: {"Content-type": "application/json; charset=UTF-8"}
            })
            .then(response => response.json()) 
            .then(json => console.log(json)
            )
            .catch(err => console.log(err));
    
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
       
    }); 

});  
// end of wait until document has loaded event  *************************************************************************
