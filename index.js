// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

const returnFirstTwoDrivers = (drivers) =>  drivers.splice(0,2);
console.log(returnFirstTwoDrivers(drivers))

const returnLastTwoDrivers = (drivers) => drivers.splice(2,2);
console.log(returnLastTwoDrivers(drivers))

const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers ];


function createFareMultiplier(multiplier){
    return function (fare){
       return multiplier*fare;
    };
function fareDoubler(fare){
    return fare * 2;
}
function fareTripler(fare){
    return fare * 3;
}

function selectDifferentDrivers(arrayOfDrivers, test){
        console.log(arrayOfDrivers);
        console.log(test)
}
function selectDifferentDrivers(drivers_names, drivers){
    return drivers(drivers_names);
    }
