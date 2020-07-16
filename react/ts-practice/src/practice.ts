interface Shape {
  getArea(): number;
}

class Circle implements Shape {
  constructor(public radius: number) {
    this.radius = radius;
  }
  getArea() {
    return this.radius * this.radius * Math.PI;
  }
}

class Rectangle implements Shape {
  constructor(private width: number, private height: number) {
    this.height = height;
    this.width = width;
  }
  getArea() {
    return this.width * this.height;
  }
}

const circle = new Circle(5);
const rectangle = new Rectangle(2, 5);
const shapes: Shape[] = [circle, rectangle];

shapes.forEach((shape) => {
  console.log(shape.getArea());
});
