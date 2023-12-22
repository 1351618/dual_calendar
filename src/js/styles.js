// визуальное оформление
// console.log(123);
const dateFromInfoStyle = document.querySelector(".date-from__info");
const dateFromInfoStyle_2 = document.querySelector(".date-from__info-2");
const dateFromInfoBtnStyle = document.querySelector(".date-from__info button");
const dateFromContentStyle = document.querySelector(".date-from__content");
const dateFromContentPStyle = document.querySelector(".date-from__content p");
const dateFromContentInputStyle = document.querySelector(
  ".date-from__content input"
);
const dateFromYearStyle = document.querySelector(".date-from__year");
const dateFromMonthStyle = document.querySelector(".date-from__month");
const daysChoiceStyle = document.querySelector(".days-choice");

const dateFromDayInp = document.getElementById("date-from-day");
const dateFromMonthInp = document.getElementById("date-from-month");
const dateFromYearInp = document.getElementById("date-from-year");

//действие при нажатие на поле с датой
function handleDateInfoClick(
  dateInfoElement,
  dateInfoBtnElement,
  yearStyleElement,
  monthStyleElement
) {
  dateInfoElement.addEventListener("click", function () {
    dateInfoElement.classList.remove("inactive-b");
    dateInfoElement.classList.add("active-b");
    dateInfoBtnElement.classList.remove("opacity");
    yearStyleElement.classList.remove("opacity");
    monthStyleElement.classList.remove("opacity");
  });
}
// обрабатываемые поля для дат
handleDateInfoClick(
  dateFromInfoStyle,
  dateFromInfoBtnStyle,
  dateFromYearStyle,
  dateFromMonthStyle
);
//! для второго календаря
// handleDateInfoClick(dateFromInfoStyle_2, dateFromInfoBtnStyle_2, dateFromYearStyle_2, dateFromMonthStyle_2);

// проверка условий нажатия в не поля
document.addEventListener("click", function (event) {
  if (
    !dateFromInfoStyle.contains(event.target) &&
    dateFromContentInputStyle.value === "" &&
    dateFromMonthInp.value === "" &&
    dateFromYearInp.value === "" &&
    !dateFromYearStyle.contains(event.target) &&
    !dateFromMonthInp.contains(event.target) &&
    !dateFromYearInp.contains(event.target) &&
    !dateFromMonthStyle.contains(event.target) &&
    !daysChoiceStyle.contains(event.target)
  ) {
    dateFromInfoStyle.classList.remove("active-b");
    dateFromInfoStyle.classList.add("inactive-b");
    dateFromInfoBtnStyle.classList.add("opacity");
    dateFromYearStyle.classList.add("opacity");
    dateFromMonthStyle.classList.add("opacity");
    daysChoiceStyle.classList.add("hide");
  }
});
