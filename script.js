// script.js

// Запуск после загрузки страницы
document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ JS подключён и работает!");

  // Подсветка ссылок при наведении
  const links = document.querySelectorAll("a");
  links.forEach(link => {
    link.addEventListener("mouseenter", () => {
      link.style.opacity = 0.7;
    });
    link.addEventListener("mouseleave", () => {
      link.style.opacity = 1;
    });
  });

  // Пример кнопки: показать alert
  const btns = document.querySelectorAll("button");
  btns.forEach(btn => {
    btn.addEventListener("click", () => {
      alert("Кнопка нажата!");
    });
  });
});
