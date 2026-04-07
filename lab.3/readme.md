Конечно! Вот полностью переработанная версия твоей лабораторной работы №3 в формате Markdown, без стикеров и без горизонтальных линий, чистая и аккуратная для вставки скриншотов:

# Лабораторная работа №3

## Основы работы с массивами, функциями и объектами в JavaScript

## Цель работы

Изучить основы работы с массивами и функциями в JavaScript, применяя их для обработки и анализа транзакций.

## Условие

Разработать консольное приложение для анализа транзакций с использованием массива объектов и встроенных методов массивов.

## Ход работы

### 1. Создание массива транзакций

Был создан массив `transactions`, содержащий объекты со следующими полями:

* `transaction_id` — уникальный идентификатор
* `transaction_date` — дата
* `transaction_amount` — сумма
* `transaction_type` — тип (debit / credit)
* `transaction_description` — описание
* `merchant_name` — магазин/сервис
* `card_type` — тип карты

![img.png](img.png)

### 2. Реализация функций

#### Уникальные типы транзакций

**getUniqueTransactionTypes(transactions)**

Используется `Set` для получения уникальных значений.

![img\_1.png](img_1.png)

#### Общая сумма транзакций

**calculateTotalAmount(transactions)**

Используется `reduce()`.

![img\_2.png](img_2.png)

#### Сумма по дате

**calculateTotalAmountByDate(transactions, year, month, day)**

Используются `filter()` + `reduce()`.

![img\_3.png](img_3.png)

#### Фильтр по типу

**getTransactionByType(transactions, type)**

![img\_4.png](img_4.png)

#### Диапазон дат

**getTransactionsInDateRange(transactions, startDate, endDate)**

Возвращает транзакции в заданном диапазоне дат.

![img_5.png](img_5.png)

#### По магазину

**getTransactionsByMerchant(transactions, name)**

Фильтрует транзакции по названию магазина (`merchant_name`).

![img_6.png](img_6.png)

#### Среднее значение

**calculateAverageTransactionAmount(transactions)**

Вычисляет среднюю сумму транзакций (сумма / количество).

![img_7.png](img_7.png)

#### Диапазон суммы

**getTransactionsByAmountRange(transactions, min, max)**

Возвращает транзакции, сумма которых находится в заданном диапазоне.

![img_8.png](img_8.png)

#### Сумма дебетовых операций

**calculateTotalDebitAmount(transactions)**

Сначала фильтруются `debit`, затем считается сумма через `reduce()`.

![img_9.png](img_9.png)

#### Месяц с максимумом транзакций

**findMostTransactionsMonth(transactions)**

Определяет месяц, в котором было больше всего транзакций.

![img_10.png](img_10.png)

#### Месяц с дебетовыми

**findMostDebitTransactionMonth(transactions)**

Аналогично предыдущему, но только для `debit`.

![img_11.png](img_11.png)

#### Какой тип чаще

**mostTransactionTypes(transactions)**

Сравнивает количество `debit` и `credit`.

![img_12.png](img_12.png)

#### До определённой даты

**getTransactionsBeforeDate(transactions, date)**

Возвращает транзакции, которые были раньше указанной даты.

![img_13.png](img_13.png)

#### Поиск по ID

**findTransactionById(transactions, id)**

Находит одну транзакцию по её ID с помощью `find()`.

![img_14.png](img_14.png)

#### Получение описаний

**mapTransactionDescriptions(transactions)**

Создаёт новый массив только с описаниями транзакций (`map()`).

![img_15.png](img_15.png)

## Тестирование

Все функции были протестированы с помощью `console.log()`.

![img_16.png](img_16.png)

## Использованные методы массивов

* `map()` — преобразует массив
* `filter()` — фильтрует элементы
* `reduce()` — сводит к одному значению
* `find()` — находит элемент
* `forEach()` — перебирает массив

## Контрольные вопросы

### 1. Какие методы массивов используются?

map(), filter(), reduce(), find(), forEach()

### 2. Как сравнивать даты?

С помощью:

new Date("2019-01-01")


И операторов сравнения (`>`, `<`, `===`)

### 3. Разница между map(), filter(), reduce()

* **map()** — изменяет каждый элемент
* **filter()** — оставляет нужные
* **reduce()** — объединяет в одно значение

## Вывод

В ходе лабораторной работы были изучены методы работы с массивами в JavaScript. Реализованы функции для анализа транзакций, включая фильтрацию, поиск и вычисления. Получены навыки работы с массивами объектов и датами.

