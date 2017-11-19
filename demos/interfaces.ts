interface Point {
    x: number;
    y: number;
}

const p: Point = { x: 1, y: 2 };

/** Class Types */
interface Shape {
    calculateArea(): number;
    color?: string;
}

class Square implements Shape {
    constructor(private side: number) { }

    calculateArea() {
        return this.side * this.side; 
    }
}

class Circle implements Shape {
    constructor(private radius: number, public color: string) { }

    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}

interface NumberSorter {
    (collection: number[]): number[];
}

const bubbleSort: NumberSorter = function(collection) {
    const sortedCollection = collection.slice();
    // Sorting logic here...
    return sortedCollection;
}
