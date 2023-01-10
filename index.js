// code your solution here
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
    }


function mondayWork(activity='go to the office'){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair='*'){
    return function(activity = 'special'){ return `You are ${flair}${activity}${flair}!`}
    
}

console.log(wrapAdjective("%")("a dedicated programmer"))