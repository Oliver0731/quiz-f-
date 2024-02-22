function markQuestion(inputID, outputID, correctAnswer) {
if (inputID === correctAnswer){
    document.getElementById(outputID).innerHTML = "correct";
    return 1;
} else {
    document.getElementById(outputID).innerHTML = "incorrect";
    return 0;
}
}
function calc(){
    let luckNum = document.getElementById("luckNum").value;
    let lowNum = document.getElementById("lowNum").value;
    let highNum = document.getElementById("highNum").value;
    let FiveNum = document.getElementById("5Num").value;
let score = 0;
score += markQuestion(luckNum, "output1", "7");
score += markQuestion(lowNum, "output2", "1");
score += markQuestion(highNum, "output3", "10");
score += markQuestion(FiveNum, "output4", "5");
document.getElementById("percent").innerHTML = score / 4;
}



document.getElementById("btn").addEventListener("click", calc);
