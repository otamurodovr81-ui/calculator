const input = document.querySelector("#input");
const btn = document.querySelectorAll("#btn");

let lastValue = "";

const operators = ["+", "-", "*", "/"];


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

            console.log("teng bosld");
            
            const text = input.value;

            if (text.includes("+")) {
                const numbers = text.split("+");

                const number1 = Number(numbers[0]);
                const number2 = Number(numbers[1]);

                const result = number1 + number2;

                input.value = result;

            } else if(text.includes("-")) {
                const numbers = text.split("-");

                const number1 = Number(numbers[0]);
                const number2 = Number(numbers[1]);

                const result = number1 - number2;

                input.value = result;

            } else if (text.includes("*")) {
                const numbers = text.split("*");

                const number1 = Number(numbers[0]);
                const number2 = Number(numbers[1]);

                const result = number1 * number2;

                input.value = result;

            } else if (text.includes("/")) {
                const numbers = text.split("/");

                const number1 = Number(numbers[0]);
                const number2 = Number(numbers[1]);

                const result = number1 / number2;

                input.value = result;
            } 
        

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