Vue.createApp({
    
        
            data() {
                return {
                    number1: null,
                    number2: null,
                    result: null,
                    operation: null



                }


            },

            methods: {

                calculate(number1, number2) {
                    switch (this.operation) {
                        case "+": {
                            this.result = number1 + number2
                            System.out.println(number1 + " + " + number2 + " = " + result);
                            break;
                        }
                        case "-": {
                            this.result = number1 - number2
                            System.out.println(number1 + " - " + number2 + " = " + result);
                            break;
                        }
                        case "*": {
                            this.result = number1 * number2
                            System.out.println(number1 + " * " + number2 + " = " + result);
                            break;
                        }
                        case "/": {
                            this.result = number1 / number2
                            System.out.println(number1 + " / " + number2 + " = " + result);
                            break;
                        }
                        default:
                            System.out.println("Invalid operator");
                            break;
                    }

                }
            }










        }).mount("#app")
