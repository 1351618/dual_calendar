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

// данные дял позиционирования
//? диапазон лет
const DataYear = [
  2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012,
  2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000, 1999,
  1998, 1997, 1996,
];
//?месяца
const months = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];
//? для позицюотрисовки 1 дня недели
const daysOfWeek = {
  Вс: 0,
  Пн: 1,
  Вт: 2,
  Ср: 3,
  Чт: 4,
  Пт: 5,
  Сб: 6,
};
//? дни недели
const dataDay = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31,
];
//? обрезка лишних дней
const amountOfDays = {
  31: 0,
  30: 1,
  29: 2,
  28: 3,
};

//переменные
//* календарь от
//индыкс года
let yearIndex = 0;
// индыкс месяца
let month = 0;

// отрисовка название месяца
function monthDefinitions() {
  firstDayMonth(DataYear[yearIndex], month - 1);
  dateFromMonthP.textContent =
    month === 0 ? "Выберите месяц" : months[month - 1];
  //проверка на наличие года и месяца - только потом показ
  if (yearIndex != 0 && month != 0) {
    daysChoice.classList.remove("hide");
  } else {
    daysChoice.classList.add("hide");
  }
}

//дата сегодня
const dateToday = new Date();
const dateStartFrom = 1;
let dateFrom = "";
const inactiveCellColor = "inactive-b";

function add_0(num) {
  return num.toString().length === 1 ? `0${num}` : num;
}

// год для выбора

// отрисовка выбранного года
function drawSelectYear(component, year) {
  component.textContent = year;
  console.log(year, " записан в поле года");
}
// показать скрыть выбор года
dateFromYear.addEventListener("click", function () {
  yearChoice.classList.toggle("hide");
});

// отлистываем год назад
dateFromYearLeftBtn.addEventListener("click", function () {
  console.log("год стрелка в лево");
  if (yearIndex < DataYear.length - 1) {
    yearIndex++;
    console.log(yearIndex, "данный индекс");
    drawSelectYear(dateFromYearP, DataYear[yearIndex]);
  }
});

dateFromYearRightBtn.addEventListener("click", function () {
  console.log("год стрелка вправо");
  if (yearIndex > 0) {
    yearIndex--;
    console.log(yearIndex, "данный индекс");
    drawSelectYear(dateFromYearP, DataYear[yearIndex]);
  }
});

DataYear.map((val, index) => {
  let yearP = document.createElement("p");
  yearP.textContent = val;
  yearP.addEventListener("click", function () {
    console.log(index, "индекс года");
    yearIndex = index;
    // dateFromYearP.textContent = DataYear[index];
    drawSelectYear(dateFromYearP, DataYear[index]);
    monthDefinitions();
    yearChoice.classList.add("hide");
  });

  yearChoice.appendChild(yearP);
});

// месяца
dateFromMonth.addEventListener("click", function () {
  monthChoice.classList.toggle("hide");
});

Array.from(monthElements).forEach((monthElement, index) => {
  monthElement.addEventListener("click", function () {
    const monthIndex = Array.from(monthElements).indexOf(this) + 1;
    // console.log(monthIndex);
    month = monthIndex;
    monthDefinitions();
    monthChoice.classList.add("hide");
  });
});
// - предидущий месяц
dateFromMonthLeftBtn.addEventListener("click", function () {
  if (month > 1) {
    month--;
    monthDefinitions();
  }
});

// + след месяц
dateFromMonthRightBtn.addEventListener("click", function () {
  if (month < 12) {
    month++;
    monthDefinitions();
  }
});

// дни недели
let dataDayResult = [];
// отрисовка дней недели
function drawingDays() {
  daysChoiceNum.innerHTML = "";
  dataDayResult.map((val, index) => {
    let daysP = document.createElement("p");
    daysP.classList.add("cp");
    if (val === 0) {
      daysP.style.color = "#e8e7e7";
      daysP.style.backgroundColor = "#e8e7e7";
      daysP.style.border = "none";

      daysP.style.pointerEvents = "none";
    }
    daysP.textContent = val;
    daysP.addEventListener("click", function () {
      console.log("Clicked on day:", val);
    });
    daysChoiceNum.appendChild(daysP);
  });
}

// ------------------------------------------------------------------
// определяем день недели первого числа
function firstDayMonth(year, month) {
  dataDayResult = [];

  const fullDate = new Date(year, month, 0);
  const dayOfWeek = fullDate.getDay();

  const dayOfWeekName = Object.keys(daysOfWeek).find(
    (key) => daysOfWeek[key] === dayOfWeek
  );
  //   console.log(dayOfWeekName); // Выводит день недели (например, "Пн" для понедельника)
  //   console.log(daysOfWeek[dayOfWeekName]);
  const array = new Array(daysOfWeek[dayOfWeekName]).fill(0);
  //   console.log(array); // [0, 0, 0]

  const lastDayOfMonth = new Date(year, month + 1, 0).getDate();
  //   console.log(lastDayOfMonth, "кол-во дней в месяце"); // Выводим количество дней в месяце
  //   console.log(amountOfDays[lastDayOfMonth], "сколько убрать от 31"); // Выводим количество дней в месяце

  dataDayResult = [
    ...array,
    ...(amountOfDays[lastDayOfMonth] !== 0
      ? dataDay.slice(0, -amountOfDays[lastDayOfMonth])
      : dataDay),
  ];
  //   console.log(dataDayResult);
  drawingDays();
}
