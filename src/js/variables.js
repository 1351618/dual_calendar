// variables.js
const DateFromDiv = document.querySelector(".date-from");
const DateToDiv = document.querySelector(".date-to");
const daysChoice = document.querySelector(".days-choice");
const daysChoiceNum = document.querySelector(".days-choice__num");
const yearChoice = document.querySelector(".year-choice");
const dateFromYear = document.querySelector(".date-from__year figure");
const dateFromYearP = document.querySelector(".date-from__year figure p");
const dateFromYearLeftBtn = document.querySelector(".date-from__year_left");
const dateFromYearRightBtn = document.querySelector(".date-from__year_right");
const dateFromMonth = document.querySelector(".date-from__month figure");
const dateFromMonthP = document.querySelector(".date-from__month figure p");
const monthElements = document.querySelectorAll(".month-choice p");
const monthChoice = document.querySelector(".month-choice");
const dateFromMonthLeftBtn = document.querySelector(".date-from__month_left");
const dateFromMonthRightBtn = document.querySelector(".date-from__month_right");
const dateFromContent = document.querySelector(".date-from__content p");
const dateFromInfoBtn = document.querySelector(".date-from__info button");
const dateFromContentInput = document.querySelector(
  ".date-from__content input"
);

const dateFromDayInp = document.getElementById("date-from-day"); //2 цифры , диапазон 1-31
const dateFromMonthInp = document.getElementById("date-from-month"); // 2 цифры, диапазон 1-12
const dateFromYearInp = document.getElementById("date-from-year"); // 4 цифры, диапазон 1-3000

// Экспортируйте переменные для использования в других файлах
export {
  DateFromDiv,
  DateToDiv,
  daysChoice,
  daysChoiceNum,
  yearChoice,
  dateFromYear,
  dateFromYearP,
  dateFromYearLeftBtn,
  dateFromYearRightBtn,
  dateFromMonth,
  dateFromMonthP,
  monthElements,
  monthChoice,
  dateFromMonthLeftBtn,
  dateFromMonthRightBtn,
  dateFromContent,
  dateFromInfoBtn,
  dateFromContentInput,
  dateFromDayInp,
  dateFromMonthInp,
  dateFromYearInp,
};
