# Promises, async/await — Task: GameSavingLoader (Async)

[![Check Code](https://github.com/Milka79rus/async-await/actions/workflows/run.yml/badge.svg)](https://github.com/Milka79rus/async-await/actions/workflows/run.yml)

## Описание
Проект по асинхронной загрузке игровых сохранений, реализованный с помощью синтаксиса **async/await**. 

### Что реализовано:
* **Логика загрузки**: Класс `GameSavingLoader` с методом `load()`, который последовательно ожидает чтения файла и парсинга данных.
* **Обработка ошибок**: Использование блоков `try...catch` для перехвата исключений на любом этапе асинхронной цепочки.
* **Точка входа**: Асинхронная самовызывающаяся функция (IIFE) в `app.js`.

