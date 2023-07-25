const Circle = require('./Circle');
const Square = require('./Square');
const Triangle = require('./Triangle');

test('circle renders correct SVG', () => {
    const circle = new Circle('blue');
    expect(circle.render()).toBe('<circle cx="150" cy="100" r="80" fill="blue" />');
});

test('square renders correct SVG', () => {
    const square = new Square('green');
    expect(square.render()).toBe('<rect x="50" y="10" width="200" height="180" fill="green" />');
});

test('triangle renders correct SVG', () => {
    const triangle = new Triangle('red');
    expect(triangle.render()).toBe('<polygon points="150,20 80,180 220,180" fill="red" />');
});