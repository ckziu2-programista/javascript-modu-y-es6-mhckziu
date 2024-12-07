export default class Rectangle {
    height;
    width;

    constructor(height, width) {
      this.height = height;
      this.width = width;
    }

    area() {
        return (this.height * this.width);
    }

    perimeter() {
        return (this.height + this.height + this.width + this.width);
    }
}   