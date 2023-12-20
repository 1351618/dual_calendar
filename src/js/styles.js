// визуальное оформление
// console.log(123);
const dateFromInfo = document.querySelector(".date-from__info");
const dateFromInfoBtn = document.querySelector(".date-from__info button");
const dateFromContentStyle = document.querySelector(".date-from__content");
const dateFromContentPStyle = document.querySelector(".date-from__content p");

// стиль для поля календаря с датой до
const config = { childList: true, subtree: true };

// Создаем экземпляр MutationObserver и передаем ему функцию обратного вызова
const observer = new MutationObserver((mutationsList, observer) => {
  // Проверяем, были ли изменения в содержимом
  if (mutationsList.length > 0) {
    console.log("Содержимое изменилось:", dateFromContentPStyle.textContent);
    if (dateFromContentPStyle.textContent === "ДД.ММ.ГГГГ") {
      console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
      dateFromInfo.classList.add("inactive-b");
      dateFromContentStyle.classList.remove("sel-cell");
      dateFromInfoBtn.classList.add("opacity");
    } else {
      dateFromInfo.classList.remove("inactive-b");
      dateFromContentStyle.classList.add("sel-cell");
      dateFromInfoBtn.classList.remove("opacity");
    }
    // dateFromContentPStyle.textContent === "ДД.ММ.ГГГГ"
    //   ? dateFromInfo.classList.add("inactive-b")
    //   : dateFromInfo.classList.remove("inactive-b");
  }
});

// Начинаем отслеживание изменений с использованием конфигурации и целевого элемента
observer.observe(dateFromContentPStyle, config);

// Позже можно отключить отслеживание, если оно больше не нужно
// observer.disconnect();
