function generateRandomColor(): string {
    return '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);    
}

function createSquare(color: string): Node {
    let element: HTMLDivElement = document.createElement('div');
    element.className = 'square';
    element.style['background-color'] = color;

    return element;
}

document.addEventListener('click', function() {
    let color: string = generateRandomColor();
    let square: Node = createSquare(color);
    document.body.appendChild(square);
});