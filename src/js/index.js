// Импортируем массивы
import {
  DataYear,
  Months,
  DaysOfWeek,
  DataDay,
  AmountOfDays,
} from "./static_data.js";
import {
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
} from "./variables.js";

// ∰  функция для записи в в поля дат ∰
////  в какой тег / из какого обьекта / какой элемент обьекта
function dateEntry(inputW, preparOBG, num) {
  inputW.value = preparOBG[num];
}
// 📗  предварительные данные для отрисовки 📗
// первый календарь дата от
let preparationFrom = {
  prepDay: "",
  prepMonth: "",
  prepYear: "",
};
//переменные
//* календарь от
//индыкс года
let yearIndex = 0;
// индыкс месяца
let month = 0;

// 📗  поле для ввода даты в ручную 📗

// функция для отслеживания ввода даты в импутах
function restrictInput(
  input,
  maxLength,
  minValue,
  maxValue,
  preparationObj,
  dataStr
) {
  input.addEventListener("input", function (event) {
    this.value = this.value.replace(/[^\d]/g, "").slice(0, maxLength);
    if (this.value !== "") {
      this.value = Math.min(Math.max(minValue, this.value), maxValue);
    }
    console.log(this.value, "строка 63");
    preparationObj[dataStr] = this.value;

    console.log(preparationFrom);
  });
}
// ! надо добавить переход таб на след поле
// пердаем инпуты с данными (импут, кол-во цифр, мин число, макс число, куда записываем, что записываем)
restrictInput(dateFromDayInp, 2, 1, 31, preparationFrom, "prepDay");
restrictInput(dateFromMonthInp, 2, 1, 12, preparationFrom, "prepMonth");
restrictInput(dateFromYearInp, 4, 1, 3000, preparationFrom, "prepYear");

// 📗  ---- 📗

// отрисовка название месяца
function monthDefinitions() {
  firstDayMonth(DataYear[yearIndex], month - 1);
  dateFromMonthP.textContent =
    month === 0 ? "Выберите месяц" : Months[month - 1];
  //проверка на наличие года и месяца - только потом показ дней
  if (yearIndex != 0 && month != 0) {
    daysChoice.classList.remove("hide");
  } else {
    daysChoice.classList.add("hide");
  }
  console.log("отрисовка название месяца");
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
  preparationFrom.prepYear = year;
  console.log(preparationFrom, " записан в поле года");
  dateEntry(dateFromYearInp, preparationFrom, "prepYear");
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
    console.log(monthIndex, "номер месяца");

    // month = monthIndex;

    preparationFrom.prepMonth = monthIndex;
    month = preparationFrom.prepMonth;
    console.log(preparationFrom);
    dateEntry(dateFromMonthInp, preparationFrom, "prepMonth"); //!
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
      preparationFrom.prepDay = val;
      // console.log(preparationFrom);
      daysP.style.backgroundColor = "#2879ff";
      daysP.style.color = "#fff";
      dateEntry(dateFromDayInp, preparationFrom, "prepDay");
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

  const dayOfWeekName = Object.keys(DaysOfWeek).find(
    (key) => DaysOfWeek[key] === dayOfWeek
  );
  //   console.log(dayOfWeekName); // Выводит день недели (например, "Пн" для понедельника)
  //   console.log(DaysOfWeek[dayOfWeekName]);
  const array = new Array(DaysOfWeek[dayOfWeekName]).fill(0);
  //   console.log(array); // [0, 0, 0]

  const lastDayOfMonth = new Date(year, month + 1, 0).getDate();
  //   console.log(lastDayOfMonth, "кол-во дней в месяце"); // Выводим количество дней в месяце
  //   console.log(AmountOfDays[lastDayOfMonth], "сколько убрать от 31"); // Выводим количество дней в месяце

  dataDayResult = [
    ...array,
    ...(AmountOfDays[lastDayOfMonth] !== 0
      ? DataDay.slice(0, -AmountOfDays[lastDayOfMonth])
      : DataDay),
  ];
  //   console.log(dataDayResult);
  drawingDays();
}

// ==================================================

// сброс календаря
dateFromInfoBtn.addEventListener("click", function () {
  console.log("нажат сброс");
  // dateFromContentInput.value = "";
  dateFromDayInp.value = "";
  dateFromMonthInp.value = "";
  dateFromYearInp.value = "";
});
// ======================
