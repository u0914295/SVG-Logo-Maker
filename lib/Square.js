const Shape = require('./Shape');

class Square extends Shape {
    render() {
        return `<rect x="50" y="10" width="200" height="180" fill="${this.color}" />`;
    }
}

module.exports = Square;