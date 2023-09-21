// Code your solution in this file!

function distanceFromHqInBlocks(distance) {
  if (distance > 42) {
    return distance - 42;
  } else {
    return 42 - distance;
  }
}

function distanceFromHqInFeet(distance) {
  if (distance > 42) {
    return (distance - 42) * 264;
  } else {
    return (42 - distance) * 264;
  }
}
function distanceTravelledInFeet(num1, num2) {
  if (num1 > num2) {
    return (num1 - num2) * 264;
  } else {
    return (num2 - num1) * 264;
  }
}
function calculatesFarePrice(start,destination){
  let X = distanceTravelledInFeet(start,destination);
  if(X < 400){
    return 0;
  }else if(X > 400 && X < 2000){
    return (X-400)*0.02;
  } else if(X > 2000 && X < 2500){
    return 25;
  } else {
    return 'cannot travel that far'
  }
}
 //400 free 
 // 400-2000 - 2 cnts
 //2000-2500 = 25dollars
 // 2500 return cannot travel that far
