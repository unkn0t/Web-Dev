let calculator = {
    read() {
        this.a = +prompt("First number?", 0);
        this.b = +prompt("Second number?",0);
    },

    sum() {
        return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );