// Code your solution in this file!
function distanceFromHqInBlocks(distance){
    return Math.abs(distance - 42)
}

function distanceFromHqInFeet(distance){
    return distanceFromHqInBlocks(distance) * 264
}

function distanceTravelledInFeet(start, destination){
    return Math.abs((destination - start)) * 264
}

function calculatesFarePrice(start , destination){

    let feet = distanceTravelledInFeet(start,destination);
    if(feet <= 400) return 0
    else if (feet >400 && feet<=2000) return (0.02 * (feet-400))
    else if (feet > 2000 && feet <= 2500) return 25
    else return 'cannot travel that far'
}