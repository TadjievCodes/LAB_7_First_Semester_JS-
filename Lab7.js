//Constructor method to create the Parcel
function Parcel(trackingNumber, status, destination, weight, express) {
    this.trackingNumber = trackingNumber; // String value used to identify a parcel
    this.status = status; // String value parcels current step in the mailing process
    this.destination = destination; // String value – destination for parcel
    this.weight = weight; // Float value – weight of parcel, used for cost of shipping calculation
    this.express = express; // Boolean value – an optional shipping option to ensure a speedy delivery at an extra cost, used for cost of shipping calculation
}



//Another way if above parsing doesn't work
//var parsing = parseFloat(this.weight);


//Array to contain our vehicle objects in Global Scope
let parcels = [];


// Create some Objects in Global Scope

//Constructor way Global Objects
parcels.push(new Parcel('IWDJ0WILP5L4B', 'Processing', 'Ontario', 12, true));
parcels.push(new Parcel('IWDXRDAII9P5K', 'Shipped', 'Alberta', 34, true));
parcels.push(new Parcel('IWDJ0WITL2K5C', 'Processing', 'Quebec', 14, true));
parcels.push(new Parcel('IWDU7E2ZUSRGF', 'In Transit', 'Manitoba', 56, false));
parcels.push(new Parcel('IWDPB2OGNHA4D', 'Delivered', 'Nunavut', 78, false));
parcels.push(new Parcel('IWDH8N1MWETAE', 'Shipped', 'New Brunswick', 52, false));





//createParcel onclick function
function createParcel() {


    //To target the form inputs and getting the values from all of the textboxes or elements
    let destinationParcel = document.getElementById('createParcel_Destination').value;
    let createWeight = parseFloat(document.getElementById('createParcel_Weight').value);

    //First I thought we need this method shown in the lectures turned out simple .checked does the job
    //var expressShipping = document.querySelector("input[name='createParcel_expressShipping']:checked"); 
    let expressShipping = document.getElementById('createParcel_expressShipping').checked;



    parcels.push(new Parcel(generateTrackingNumber(), 'Processing', destinationParcel,
        createWeight, expressShipping));



    //First I thought to use long IF conditionals but as destinationParcel is returning a string and doesn't have . value it was not working so I figured out that one
    //line is way more efficient as we don't have to refer to each city every time but just refer to it through destinationParcel variable targeted by DOM.
    /*
    if (destinationParcel.value === "Alberta") {

        //This is how we can add the value of input through push() in built array method and select the  gettingTxtBoxValue from where we get the value
        parcels.push(new Parcel(generateTrackingNumber(), 'Processing', destinationParcel.value, createWeight.value, expressShipping.value));

    } else if (destinationParcel.value === "British Columbia") {
        parcels.push(new Parcel(generateTrackingNumber(), 'Processing', 'British Columbia', createWeight, expressShipping));

    } else if (destinationParcel.value === "Manitoba") {
        parcels.push(new Parcel(generateTrackingNumber(), 'Processing', 'Manitoba', createWeight, expressShipping));

    } else if (destinationParcel.value === "New Brunswick") {
        parcels.push(new Parcel(generateTrackingNumber(), 'Processing', 'New Brunswick', createWeight, expressShipping));

    } else if (destinationParcel.value === "Newfoundland") {
        parcels.push(new Parcel(generateTrackingNumber(), 'Processing', 'Newfoundland', createWeight, expressShipping));

    } else if (destinationParcel.value === "Northwest Territories") {
        parcels.push(new Parcel(generateTrackingNumber(), 'Processing', 'Northwest Territories', createWeight, expressShipping));

    } else if (destinationParcel.value === "Nova Scotia") {
        parcels.push(new Parcel(generateTrackingNumber(), 'Processing', 'Nova Scotia', createWeight, expressShipping));

    } else if (destinationParcel.value === "Nunavut") {
        parcels.push(new Parcel(generateTrackingNumber(), 'Processing', 'Nunavut', createWeight, expressShipping));

    } else if (destinationParcel.value === "Ontario") {
        parcels.push(new Parcel(generateTrackingNumber(), 'Processing', 'Ontario', createWeight, expressShipping));

    } else if (destinationParcel.value === "P.E.I") {
        parcels.push(new Parcel(generateTrackingNumber(), 'Processing', 'P.E.I', createWeight, expressShipping));

    } else if (destinationParcel.value === "Quebec") {
        parcels.push(new Parcel(generateTrackingNumber(), 'Processing', 'Quebec', createWeight, expressShipping));

    } else if (destinationParcel.value === "Saskatchewan") {
        parcels.push(new Parcel(generateTrackingNumber(), 'Processing', 'Saskatchewan', createWeight, expressShipping));

    } else if (destinationParcel.value === "Yukon") {
        parcels.push(new Parcel(generateTrackingNumber(), 'Processing', 'Yukon', createWeight, expressShipping));

    }
     */



    //Calling the displayParcels(); function here to output the kind of result
    displayParcels();
}






// In order to display the parcels accordingly the function onload and within other functions to display it
function displayParcels() {

    let outputElement = document.getElementById('displayParcelOutput');
    let departmentSelection = document.getElementById('displayParcelsFilter');
    // clears the output every time
    outputElement.innerHTML = "";

    //Loop through array
    for (var i = 0; i < parcels.length; i++) {

        var tempParcelItem = parcels[i]; //Instead of typing StoreItems[i] every time the array we need, we can assign to a variable and use that to refer

        if (departmentSelection.value === 'All') {

            var tempEL = document.createElement("p");
            tempEL.innerText = tempParcelItem.trackingNumber + " | " + tempParcelItem.status + " | " + tempParcelItem.destination + " | " + tempParcelItem.weight +
                " | " + tempParcelItem.express + " ";

            //This libe gives it a color
            tempEL.style.border = "1px solid " + '#55AB';

            //Append to the Div
            outputElement.appendChild(tempEL);

        } else if (departmentSelection.value === 'Processing' && tempParcelItem.status == 'Processing') {

            var tempEL = document.createElement("p");
            tempEL.innerText = tempParcelItem.trackingNumber + " | " + tempParcelItem.status + " | " + tempParcelItem.destination + " | " + tempParcelItem.weight +
                " | " + tempParcelItem.express + " ";

            //This libe gives it a color
            tempEL.style.border = "1px solid " + '#55AB55';

            //Append to the Div
            outputElement.appendChild(tempEL);

        } else if (departmentSelection.value === 'Shipped' && tempParcelItem.status == 'Shipped') {

            var tempEL = document.createElement("p");
            tempEL.innerText = tempParcelItem.trackingNumber + " | " + tempParcelItem.status + " | " + tempParcelItem.destination + " | " + tempParcelItem.weight +
                " | " + tempParcelItem.express + " ";

            //This libe gives it a color
            tempEL.style.border = "1px solid " + '#EE82EE';

            //Append to the Div
            outputElement.appendChild(tempEL);

        } else if (departmentSelection.value === 'In Transit' && tempParcelItem.status == 'In Transit') {

            var tempEL = document.createElement("p");
            tempEL.innerText = tempParcelItem.trackingNumber + " | " + tempParcelItem.status + " | " + tempParcelItem.destination + " | " + tempParcelItem.weight +
                " | " + tempParcelItem.express + " ";

            //This libe gives it a color
            tempEL.style.border = "1px solid " + '#FF00FF';

            //Append to the Div
            outputElement.appendChild(tempEL);

        } else if (departmentSelection.value === 'Delivered' && tempParcelItem.status == 'Delivered') {

            var tempEL = document.createElement("p");
            tempEL.innerText = tempParcelItem.trackingNumber + " | " + tempParcelItem.status + " | " + tempParcelItem.destination + " | " + tempParcelItem.weight +
                " | " + tempParcelItem.express + " ";

            //This like gives it a color kind of in border style
            tempEL.style.border = "1px solid " + '#FF00FF';

            //Append to the Div
            outputElement.appendChild(tempEL);
        }
    } //end for loop
} //end function



// Moved the generate tracking number function here
function generateTrackingNumber() {
    const TN_LENGTH = 10;
    const TN_PREFIX = "IWD";
    var tokens = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    var trackingNumber = new String(TN_PREFIX);
    for (var x = 0; x < TN_LENGTH; x++) {
        trackingNumber = trackingNumber.concat(tokens[Math.floor(Math.random() * tokens.length)]);
    }
    console.log("Generated: " + trackingNumber);
    return trackingNumber;
} // end generateTrackingNumber





function processParcel() {
    // Targeting DOM Elements through getElementById
    const gettingTrckNum = document.getElementById('tbTrackingNumber');
    //const getDropdown = document.getElementById('processParcel_Status');
    const getDropdown = document.getElementById('processParcel_Status').selectedIndex;
    // Could be useful to indicate which option has been selected fromt the dropdown list
    const Options = document.getElementById('processParcel_Status').options;
    // It's a bit more complex with .options and .selectedIndex how i'm tracking the change of the dropdown I could use just .value
    // But this is another approach that I just learned

    let expressShippingPrice = 0;

    const HST_TAX = 0.13;
    const costOfShipping = 5;
    const pricePerGram = 0.05;

    for (let i = 0; i < parcels.length; i++) {
        const TemporaryElement = parcels[i];
        if (TemporaryElement.trackingNumber == gettingTrckNum.value) {

            TemporaryElement.status = Options[getDropdown].text;
            // Assigning the new status through thsi method if it equals again which changes inside of the object the status and shows after clicked OK

            if (TemporaryElement.express == true) {
                expressShippingPrice = 10; // if in case express equals true the price equals 10
            }
            const totalPrice =
                costOfShipping + expressShippingPrice + (TemporaryElement.weight * pricePerGram);
            const total = (totalPrice * HST_TAX) + totalPrice;
            alert(`Shipping for parcel: ${TemporaryElement.trackingNumber}
              $${total.toFixed(2)} and Status is:  ${Options[getDropdown].text}`);
        }
    }
    // Calling the displayParcels here again
    displayParcels();
}


//Calculate the Cost of shipping for this parcel:
/*  o Flat rate of $5
  o Add $10, If the parcel has Express
  Shipping.
  o Add $0 .05 per gram(g) that the parcel
  weighs
  o Apply Tax(13 % )● Alert the user with the Tracking Number and
  the cost of shipping.See sample output le􀅌● Call the displayParcels() func
 */




// First tried to copy the Helper function from the lecture but didn't use it anywhere to return string of object properties
function parcelToString(parcel) {
    // In future we will make this a method of the vehicle object
    return parcel.trackingNumber + " " + parcel.status + " " + parcel.destination + " " + parcel.weight + " " + parcel.express;
}