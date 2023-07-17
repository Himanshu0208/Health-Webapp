var count = 0;
var name;
var height;
var weight;
var problem;
function getBotResponse(input) {
  //rock paper scissors
  if (input == "reset") {
    count = 0;
    return "okay lets start again, what is you name?";
  }
  count++;
  if (count == 1) {
    name = input;
    return `what is your height ?`;
  } else if (count == 2) {
    height = parseFloat(input) / 100;
    return `what is your weight ?`;
  } else if (count == 3) {
    weight = parseFloat(input);
    return "Do you have any problem ?";
  } else if (count == 4) {
    problem = input.toLowerCase().replace(/\s/g, "");
    var bmi = weight / (height * height);
    if (problem == "no") {
      return `your bmi is ${bmi.toFixed(2)}`;
    } else if (problem in data) {
      var arr = data[problem];
      var index = Math.floor(Math.random() * arr.length);

      return `your bmi is ${bmi.toFixed(2)}_for ${input}_${
        arr[index]
      }`;
    } else {
      return `your bmi is ${bmi.toFixed(
        2
      )}_Sorry i do not have any record found ${input} ${"\u{1F622}"}`;
    }
  }
}
