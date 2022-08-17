// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

let mondayWork= function (activity ="go to the office") {
    return `This Monday, I will ${activity}.`;
};

function wrapAdjective(wrap ="*") {
    return function (emphatic ="You are a hard worker") {
       return `You are ${wrap}${emphatic}${wrap}!`;
    }
}
