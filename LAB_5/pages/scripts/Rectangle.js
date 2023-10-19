// Об'єкт Прямокутник
function Rectangle (a, b) {
    this.width = parseFloat(a);
    this.height = parseFloat(b); 
    console.log("width=", this.width, "height=", this.height);

    // Функція первірки значень на коректність
    this.isCorrect = function() { return (this.width > 0 && this.height > 0) }

    // Периметр
    this.perimetr = function () { 
        return this.isCorrect()
            ? 2 * (this.width + this.height)
            : "не визначено";
    }

    // Площа
    this.area = function () {
        return this.isCorrect()
        ? this.width * this.height
        : "не визначено";
    }

    // Діагональ
    this.diag = function () {
        return this.isCorrect()
        ? Math.sqrt(this.width**2 + this.height**2)
        : "не визначено";
    }

}
    