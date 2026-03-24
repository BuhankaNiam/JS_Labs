/**
 * Вывод элементов массива: Element i: value x
 */
function printArray(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(`Element ${i}: value ${array[i]}`);
    }
}

/**
 * Вывод элементов массива: i: x
 */
function printArray1(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(`${i}: ${array[i]}`);
    }
}

/**
 * Выполняет callback для каждого элемента массива
 */
function forEach(array, callback) {
    if (!Array.isArray(array)) {
        throw new TypeError("Первый аргумент должен быть массивом");
    }

    if (typeof callback !== "function") {
        throw new TypeError("Callback должен быть функцией");
    }

    for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array);
    }
}

/**
 * Создаёт новый массив на основе callback
 */
function map(array, callback) {
    if (!Array.isArray(array)) {
        throw new TypeError("Первый аргумент должен быть массивом");
    }

    if (typeof callback !== "function") {
        throw new TypeError("Callback должен быть функцией");
    }

    const result = [];

    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i], i, array));
    }

    return result;
}

/**
 * Фильтрует массив
 */
function filter(array, callback) {
    if (!Array.isArray(array)) {
        throw new TypeError("Первый аргумент должен быть массивом");
    }

    if (typeof callback !== "function") {
        throw new TypeError("Callback должен быть функцией");
    }

    const result = [];

    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            result.push(array[i]);
        }
    }

    return result;
}

/**
 * Находит первый подходящий элемент
 */
function find(array, callback) {
    if (!Array.isArray(array)) {
        throw new TypeError("Первый аргумент должен быть массивом");
    }

    if (typeof callback !== "function") {
        throw new TypeError("Callback должен быть функцией");
    }

    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            return array[i];
        }
    }

    return undefined;
}

/**
 * Проверяет, есть ли хотя бы один подходящий элемент
 */
function some(array, callback) {
    if (!Array.isArray(array)) {
        throw new TypeError("Первый аргумент должен быть массивом");
    }

    if (typeof callback !== "function") {
        throw new TypeError("Callback должен быть функцией");
    }

    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            return true;
        }
    }

    return false;
}

/**
 * Проверяет, удовлетворяют ли все элементы условию
 */
function every(array, callback) {
    if (!Array.isArray(array)) {
        throw new TypeError("Первый аргумент должен быть массивом");
    }

    if (typeof callback !== "function") {
        throw new TypeError("Callback должен быть функцией");
    }

    for (let i = 0; i < array.length; i++) {
        if (!callback(array[i], i, array)) {
            return false;
        }
    }

    return true;
}

/**
 * Свёртка массива
 */
function reduce(array, callback, initialValue) {
    if (!Array.isArray(array)) {
        throw new TypeError("Первый аргумент должен быть массивом");
    }

    if (typeof callback !== "function") {
        throw new TypeError("Callback должен быть функцией");
    }

    let accumulator;
    let startIndex;

    if (initialValue !== undefined) {
        accumulator = initialValue;
        startIndex = 0;
    } else {
        if (array.length === 0) return undefined;
        accumulator = array[0];
        startIndex = 1;
    }

    for (let i = startIndex; i < array.length; i++) {
        accumulator = callback(accumulator, array[i], i, array);
    }

    return accumulator;
}



const arr = [1, 2, 3, 4, 5];

console.log("printArray:");
printArray(arr);

console.log("printArray1:");
printArray1(arr);

console.log("forEach:");
forEach(arr, (el) => console.log(el));

console.log("map:");
console.log(map(arr, x => x * 2)); // [2,4,6,8,10]

console.log("filter:");
console.log(filter(arr, x => x % 2 === 0)); // [2,4]

console.log("find:");
console.log(find(arr, x => x > 3)); // 4

console.log("some:");
console.log(some(arr, x => x > 4)); // true

console.log("every:");
console.log(every(arr, x => x > 0)); // true

console.log("reduce:");
console.log(reduce(arr, (acc, el) => acc + el, 0)); // 15