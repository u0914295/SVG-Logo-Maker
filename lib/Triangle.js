class Triangle {
    constructor(color) {
        this.color = color;
    }
    render() {
        return `<polygon points="150,20 80,180 220,180" fill="${this.color}" />`;
    }
}

module.exports = Triangle;