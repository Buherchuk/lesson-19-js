// 👉 Завдання 1. forEach
// Заданий масив з числами. Знайдіть суму цих чисел.
//     let arr = [5, 6, 7, 8, 9];
// Результат вивести в консоль.
function sumForEach() {
    let arr = [5, 6, 7, 8, 9];
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    console.log('console', sum);
    return sum;
}
// 👉 Завдання 2. Map
// Заданий масив з числами. Створіть новий масив, що складається з квадратів цих чисел. 
//     let arr = [5, 6, 7, 8, 9];
// Результат вивести в консоль.
function powMap() {
    let arr = [5, 6, 7, 8, 9];
    let newArr = arr.map(elem => {
        return elem * elem;
    });
    console.log('console', newArr);
    return newArr;
}
// 👉 Завдання 3. Every
// Заданий масив об’єктів. Перевірте, чи всі ключі country мають значення 'Ukraine'.
// let arr = [{name: 'Ivan', country: 'Ukraine'},
//            {name: 'Petro', country: 'Ukraine'},
//            {name: 'Miguel', country: 'Cuba'}
//           ]
// Результат вивести в консоль.
function isAllInclude() {
    let arr = [{ name: 'Ivan', country: 'Ukraine' },
    { name: 'Petro', country: 'Ukraine' },
    { name: 'Miguel', country: 'Cuba' }
    ]
    let rez = arr.every(elem => elem.country  == 'Ukrane');
    console.log('console', rez);
    return rez;
}
// 👉 Завдання 4. Some
// Заданий масив об’єктів. Перевірте, чи всі хоч один ключ country має значення 'Cuba'.
// let arr = [{name: 'Ivan', country: 'Ukraine'},
//            {name: 'Petro', country: 'Ukraine'},
//            {name: 'Miguel', country: 'Cuba'}
//           ]
// Результат вивести в консоль.
function isAny() {
    let arr = [{ name: 'Ivan', country: 'Ukraine' },
    { name: 'Petro', country: 'Ukraine' },
    { name: 'Miguel', country: 'Cuba' }
    ]
    let rez = arr.some(elem => elem.country  == 'Cuba');
    console.log('console', rez);
    return rez;
}
// 👉 Завдання 5. Filter
// Заданий масив значень, в ньому можуть бути звичайні елементи і підмасиви. Залиште в ньому тільки підмасиви.
//     let arr = [1, 'string', [3, 4], 5, [6, 7]];
// Результат вивести в консоль.
function leaveSubarray() {
    let arr = [1, 'string', [3, 4], 5, [6, 7]];
    let rez = arr.filter(elem => {
        if(Array.isArray(elem)){
            return elem;
        }
    });
    console.log('console', rez);
    return rez;
}
// 👉 Завдання 6. Reduce
// Заданий масив з числами. Знайдіть суму перших N елементів до першого нуля. 
// Приклад: [1, 2, 3, 0, 4, 5, 6] - підсумовуємо перші 3 елементи, так як далі стоїть елемент з числом 0.
//     let arr = [1, 2, 5, 0, 4, 5, 6];
// Результат вивести в консоль.
function summTillZero() {
    let arr = [1, 2, 5, 0, 4, 5, 6];
    let arr2 = arr.slice(0, arr.indexOf(0));
    let summ = arr2.reduce((total, amount) => {
        return total + amount;
    });
    console.log('console', summ);
    return summ;
}

// Заданий масив з числами. Дізнайтеся скільки елементів з початку масиву треба скласти, щоб в сумі вийшло більше 10-ти.
//     let arr = [1, 2, 3, 0, 4, 5, 6];
// Результат вивести в консоль.
function summTillTen() {
    let arr = [1, 2, 3, 0, 4, 5, 6];
    let count = 2;
    let summ = arr.reduce((total, amount) => {        
        if((total + amount) < 10){
            count++;
            return total + amount;
        }
    });
    console.log('count', count);
    return count;
}


// 👉 Завдання 7. Будь яким методом
// Заданий масив з числами. Залиште в ньому тільки позитивні числа. Потім вийміть квадратний корінь і цих чисел. 
//     let arr = [1, -2, 3, 0, 4, -5, 6, -11];
// Результат вивести в консоль.

function powElements() {
    let arr = [1, -2, 3, 0, 4, -5, 6, -11];
    let newArr = arr;
    for (const key in arr) {
        if (arr[key] < 0) {
            newArr.splice(key, 1);
        }
    }
    newArr.forEach(function(element, index, array){
        newArr[index] = Math.sqrt(element);
    });
    return newArr;
}