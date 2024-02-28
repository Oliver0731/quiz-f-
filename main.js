function markQuestion(inputID, outputID, correctAnswer) {
  if (document.getElementById(inputID).value === correctAnswer) {
    document.getElementById(outputID).innerHTML = "correct";
    return 1;
  } else {
    document.getElementById(outputID).innerHTML = "incorrect";
    return 0;
  }
}
function calc() {
  let score = 0;
  score += markQuestion("luckNum", "output1", "7");
  score += markQuestion("lowNum", "output2", "1");
  score += markQuestion("highNum", "output3", "10");
  score += markQuestion("5Num", "output4", "5");
  document.getElementById("percent").innerHTML = (score / 4) * 100;
}

document.getElementById("btn").addEventListener("click", calc);

// m,  let luckNum = document.getElementById("luckNum").value;
//   let lowNum = document.getElementById("lowNum").value;
//   let highNum = document.getElementById("highNum").value;/
//   let FiveNum = document.getElementById("5Num").value;
