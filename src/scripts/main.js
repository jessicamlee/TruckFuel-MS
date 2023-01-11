var truckOne = document.getElementById("truckOne");
var truckTwo = document.getElementById("truckTwo");
var truckThree = document.getElementById("truckThree");
var truckFour = document.getElementById("truckFour");
var truckFive = document.getElementById("truckFive");

var calculate = document.getElementById("calculate");
var reset = document.getElementById("reset");

function selectTruckOne() {
    document.getElementById("selectedTruck").innerHTML = "BelAZ 75710 Dump Truck";
    document.getElementById("fuelEff").innerHTML = "1300";
}

function selectTruckTwo() {
    document.getElementById("selectedTruck").innerHTML = "Caterpillar 797F Dump Truck";
    document.getElementById("fuelEff").innerHTML = "784";
}

function selectTruckThree() {
    document.getElementById("selectedTruck").innerHTML = "Liebherr T284 Dump Truck";
    document.getElementById("fuelEff").innerHTML = "28";
}

function selectTruckFour() {
    document.getElementById("selectedTruck").innerHTML = "Terex/Bucyrus MT6300AC Dump Truck";
    document.getElementById("fuelEff").innerHTML = "32";
}

function selectTruckFive() {
    document.getElementById("selectedTruck").innerHTML = "The Komatsu 960E-1 Dump Truck";
    document.getElementById("fuelEff").innerHTML = "35";
}

truckOne.addEventListener("click", selectTruckOne);
truckTwo.addEventListener("click", selectTruckTwo);
truckThree.addEventListener("click", selectTruckThree);
truckFour.addEventListener("click", selectTruckFour);
truckFive.addEventListener("click", selectTruckFive);

function calculateFuelUsage() {
    var payload = document.getElementById("payload").value;
    var time = document.getElementById("time").value;
    var fuelEfficiency = 33;
    const fuelRate = (payload * 0.1)/fuelEfficiency;
    document.getElementById("result").innerHTML = "Fuel Usage Consumption: <br> " + (fuelRate * time).toFixed(2) + " Litres";
}

calculate.addEventListener("click", calculateFuelUsage);

function clearInput() {
    var payload = document.getElementById("payload");
    var time = document.getElementById("time");
    if(payload.value || time.value == !null) {
        payload.value = "";
        time.value = "";
    }
}

reset.addEventListener("click", clearInput);