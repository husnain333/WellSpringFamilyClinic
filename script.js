// BMI Calculator
document.addEventListener("DOMContentLoaded", () => {
  const bmiForm = document.getElementById("bmiForm");
  const bmiResult = document.getElementById("bmiResult");

  if (bmiForm) {
    bmiForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const height = parseFloat(document.getElementById("height").value) / 100; // convert cm → meters
      const weight = parseFloat(document.getElementById("weight").value);

      if (height > 0 && weight > 0) {
        const bmi = (weight / (height * height)).toFixed(2);

        let category = "";
        if (bmi < 18.5) {
          category = "Underweight";
        } else if (bmi < 24.9) {
          category = "Normal weight";
        } else if (bmi < 29.9) {
          category = "Overweight";
        } else {
          category = "Obese";
        }

        bmiResult.innerHTML = `<h2>Your BMI: ${bmi}</h2><p>Category: <strong>${category}</strong></p>`;
      } else {
        bmiResult.innerHTML = "<p style='color:red;'>Please enter valid height and weight.</p>";
      }
    });
  }
});
