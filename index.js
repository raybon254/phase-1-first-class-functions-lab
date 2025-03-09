// 1. returnFirstTwoDrivers()
function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2); // Non-destructive way to get the first two drivers
  }
  
  // 2. returnLastTwoDrivers()
  function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2); // Non-destructive way to get the last two drivers
  }
  
  // 3. selectingDrivers
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  // 4. createFareMultiplier()
  function createFareMultiplier(multiplier) {
    return function (fare) {
      return fare * multiplier;
    };
  }
  
  // 5. fareDoubler()
  const fareDoubler = createFareMultiplier(2);
  
  // 6. fareTripler()
  const fareTripler = createFareMultiplier(3);
  
  // 7. selectDifferentDrivers()
  function selectDifferentDrivers(drivers, driverSelector) {
    return driverSelector(drivers); // Use the provided function to select drivers
  }
