function Calculator(){
    let number1 = parseInt(prompt("Введите первое число:", "1 число"));
    let number2 = parseInt(prompt("Введите второе число:", "2 число"));
    let operation = prompt("Введите операцию которую нужно сделать:", "*,/,+,-");
    switch(operation){
        case "*":
            alert(`Результат:${number1 * number2}`);
            break;
        case "/":
            alert(`Результат:${number1 / number2}`);
            break;
        case "+":
            alert(`Результат:${number1 + number2}`);
            break;
        case "-":
            alert(`Результат:${number1 - number2}`);
            break;
    }
}