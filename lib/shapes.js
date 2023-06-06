class SVG {
    constructor() {
        this.textValue = "";
        this.shapeValue = "";
    }

    render() {
        return `<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg">${this.shapeValue}${this.textValue}</svg>`
    }   

    setText(text, textColor) {
        if(text.length > 3) {
            throw new Error("You must have 3 or less characters")
        }
        this.textValue = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`
    }

    setShape(shape) {
        this.shapeValue = shape.render()
    }
}

class Shape {
    constructor() {
        this.color = ""
    }
    setColor(color) {
        this.color = color
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }
}

class Square extends Shape {
    render() {
        return `<rect x="90" y="40" width="200" height="200" fill="${this.color}" />`
    }
}

module.exports = {Shape, SVG, Circle, Triangle, Square}