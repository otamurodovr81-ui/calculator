const input = document.querySelector("#input");
const btn = document.querySelectorAll("#btn");

let lastValue = "";

const operators = ["+", "-", "*", "/"];

function calculate() {

    const text = input.value;

    if (text.includes("+")) {

        const numbers = text.split("+");

        const number1 = Number(numbers[0]);
        const number2 = Number(numbers[1]);

        input.value = number1 + number2;

    } else if (text.includes("-")) {

        const numbers = text.split("-");

        const number1 = Number(numbers[0]);
        const number2 = Number(numbers[1]);

        input.value = number1 - number2;

    } else if (text.includes("*")) {

        const numbers = text.split("*");

        const number1 = Number(numbers[0]);
        const number2 = Number(numbers[1]);

        input.value = number1 * number2;

    } else if (text.includes("/")) {

        const numbers = text.split("/");

        const number1 = Number(numbers[0]);
        const number2 = Number(numbers[1]);

        input.value = number1 / number2;
    }

    lastValue = "";
}

window.addEventListener("keydown", function (event) {

    if (event.key >= "0" && event.key <= "9") {
        input.value += event.key;
        lastValue = event.key;
        return;
    }

     if (operators.includes(event.key)) {

        if (operators.includes(lastValue)) {
           return;
        }

        input.value += event.key;
        lastValue = event.key;
 
        return;
    };



    // Nuqta
        if (event.key === ".") {

        const lastNumber = input.value.split(/[\+\-\*\/]/).pop();

        if (lastNumber.includes(".")) {
            return;
        }

        input.value += ".";
        lastValue = ".";
        return;
    };


    // Backspace
         if (event.key === "Backspace") {

        input.value = input.value.slice(0, -1);

        lastValue = input.value.slice(-1);

        return;
    };

    // Escape — tozalash
        if (event.key === "Escape") {

        input.value = "";
        lastValue = "";

        return;
    };


    // ENTER = HISOBLASH
    if (event.key === "Enter") {

        calculate();

        return;
    }


});

btn.forEach((itom) => {
    itom.addEventListener("click", () => {
        console.log(itom.value);

        if (itom.value === "d") {
            input.value = input.value.slice(0, -1);

        } else if (itom.value === "C") {

            input.value = "";
            lastValue = "";

        } else if (operators.includes(itom.value) && operators.includes(lastValue)) {
            
        return;
            
        } else if (itom.value === "=") {

            calculate();
            return;

        } else {
             
            if (itom.value === ".") {

                 const lastNumber = input.value.split(/[\+\-\*\/]/).pop();

                      if (lastNumber.includes(".")) {
                        return
                    };
            };

            input.value += itom.value;
        }

        lastValue = itom.value;
        
    });
});