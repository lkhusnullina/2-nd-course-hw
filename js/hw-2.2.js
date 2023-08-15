//Задание 1

let firtstNum = 10;
alert(firtstNum);
firtstNum = 20;
alert(firtstNum);

//Задание 2

let release = 2007;
alert(release);

//Задание 3

let nameCreator = 'Бренданом Айком';
alert(nameCreator);

//Задание 4

let firstNumber = 10;
let secondNumber = 2;

alert(firstNumber + secondNumber);
alert(firstNumber - secondNumber);
alert(firstNumber * secondNumber);
alert(firstNumber / secondNumber);

//Задание 5

let result = 2 ** 5;
alert(result);

//Задание 6

let a = 9;
let b = 2;
let remainder = a % b;

alert(remainder);


//Задание 7

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

//Задание 8

let age = +prompt("Сколько вам лет?");
alert(age);

//Задание 9.0

const user = {
    name: 'Lyuba',
    age: 27,
    isAdmin: true,
}

//Задание 9.1
user['city of residence'] = 'Ekaterinburg';

//Задание 9.2

user.age = 30;

//Задание 9.3

delete user['city of residence'];

//Задание 9.4

let info = prompt("Какую информацию хотите узнать о пользователе?");
alert(user[info]);


//Задание 10
let userName = prompt('Как вас зовут?');
alert(`Привет, ${userName}!`);

