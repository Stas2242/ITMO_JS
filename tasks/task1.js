// todo: Даны две переменные a, b им присвоены целочисленные значения.
// Необходимо программно поменять местами содержимое двух переменных, в b должно 
// быть значение а и наоборот. 

let a = 10;
let b = 20;

if (a != b){
    let c;

    c = a;
    a = b;
    b = c;
}

console.log(a, b)

// вариант 2

let x = 30;
let y = 40;

[x, y] = [y, x];

console.log(x,y);