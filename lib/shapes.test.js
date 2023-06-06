const {SVG, Circle, Triangle, Square } = require("./shapes");

describe("Circle", () => {
    test("creates a Circle object and sets its background color to blue", () => {
        const expected = `<circle cx="150" cy="100" r="80" fill="blue" />`
        const shape = new Circle()
        shape.setColor("blue")
        const output = shape.render()
        expect(output).toEqual(expected)
    })
    test("creates a Circle object and sets its background color to purple", () => {
        const expected = `<circle cx="150" cy="100" r="80" fill="purple" />`
        const shape = new Circle()
        shape.setColor("purple")
        const output = shape.render()
        expect(output).toEqual(expected)
    })
})

describe("Triangle", () => {
    test("creates a Triangle object and sets its background color to red", () => {
        const expected = `<polygon points="150, 18 244, 182 56, 182" fill="red" />`
        const shape = new Triangle()
        shape.setColor("red")
        const output = shape.render()
        expect(output).toEqual(expected)
    })
    test("creates a Triangle object and sets its background color to orange", () => {
        const expected = `<polygon points="150, 18 244, 182 56, 182" fill="orange" />`
        const shape = new Triangle()
        shape.setColor("orange")
        const output = shape.render()
        expect(output).toEqual(expected)
    })
})

describe("Sqaure", () => {
    test("creates a Square object and sets its background color to green", () => {
        const expected = `<rect x="90" y="40" width="200" height="200" fill="green" />`
        const shape = new Square()
        shape.setColor("green")
        const output = shape.render()
        expect(output).toEqual(expected)
    })
    test("creates a Square object and sets its background color to yellow", () => {
        const expected = `<rect x="90" y="40" width="200" height="200" fill="yellow" />`
        const shape = new Square()
        shape.setColor("yellow")
        const output = shape.render()
        expect(output).toEqual(expected)
    })
})