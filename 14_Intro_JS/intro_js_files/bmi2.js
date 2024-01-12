function BMI(weight, height) {
  var bmi = weight / (height * height);
  console.log(Math.floor(bmi))
}

BMI(50, 1.55);