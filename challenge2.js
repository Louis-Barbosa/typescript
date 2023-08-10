export {}; // Do not touch!!

// TypeScript
interface Circle {
    type: "circle";
    radius: number;
}

interface Rectangle {
    type: "rectangle";
    width: number;
    height: number;
}

interface Triangle {
    type: "triangle";
    base: number;
    height: number;
}

interface Square {
    type: "square";
    side: number;
}

type Shape = Circle | Rectangle | Triangle | Square;

function calculateArea(shape: Shape): number {
    if (shape.type === "circle") {
        return Math.PI * shape.radius * shape.radius;
    } else if (shape.type === "rectangle") {
        return shape.width * shape.height;
    } else if (shape.type === "triangle") {
        return (shape.base * shape.height) / 2;
    } else if (shape.type === "square") {
        return shape.side * shape.side;
    } else {
        throw new Error("Invalid shape type");
    }
}

const circle: Circle = { type: "circle", radius: 5 };
const rectangle: Rectangle = { type: "rectangle", width: 4, height: 6 };
const triangle: Triangle = { type: "triangle", base: 3, height: 8 };
const square: Square = { type: "square", side: 5 };

const shapes: Shape[] = [circle, rectangle, triangle, square];

shapes.push({ type: "circle", radius: 10 });

for (const shape of shapes) {
    console.log("Area:", calculateArea(shape));
}
