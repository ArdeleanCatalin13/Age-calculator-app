const button = document.getElementById("button");
const inputDayField = document.getElementById("input_day");
const outputDayField = document.getElementById("output_day");
const inputMonthField = document.getElementById("input_month");
const outputMonthField = document.getElementById("output_month");
const inputYearField = document.getElementById("input_year");
const outputYearField = document.getElementById("output_year");


button.addEventListener("click", e => {
  const inputDay = parseInt(inputDayField.value);
  const inputMonth = parseInt(inputMonthField.value);
  const inputYear = parseInt(inputYearField.value);

  const date = new Date();
  let currentDay = date.getDate();
  let currentMonth = date.getMonth() + 1;
  let currentYear = date.getFullYear();

  const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (currentYear % 4 === 0 && (currentYear % 100 !== 0 || currentYear % 400 === 0)) {
    monthDays[1] = 29; // February has 29 days in a leap year
  }

  if (inputDay > currentDay) {
    currentDay = currentDay + monthDays[currentMonth - 1];
    currentMonth = currentMonth - 1;
  }

  if (inputMonth > currentMonth) {
    currentMonth = currentMonth + 12;
    currentYear = currentYear - 1;
  }

  let calculatedDay = currentDay - inputDay;
  let calculatedMonth = currentMonth - inputMonth;
  let calculatedYear = currentYear - inputYear;

  outputDayField.innerHTML = calculatedDay;
  outputMonthField.innerHTML = calculatedMonth;
  outputYearField.innerHTML = calculatedYear;
});
