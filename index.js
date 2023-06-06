const inquirer = require("inquirer");
const { writeFile } = require("fs/promises");
const { Shape, SVG, Circle, Triangle, Square } = require("./lib/shapes");

function init() {
    inquirer.prompt([
        {
            type: "list",
            name: "shape",
            message: "What shape would you like your SVG to be?",
            choices: ["Circle", "Triangle", "Square"]
        },
        {
            type: "input",
            name: "shapeColor",
            message: "What background color would you like your SVG to be?"
        },
        {
            type: "input",
            name: "text",
            message: "What text would you like to be inside your SVG?"
        },
        {
            type: "input",
            name: "textColor",
            message: "What text color would you like your SVG's text to be?"
        }
    ]).then((res) => {
        let shape;
        if (res.shape === "Circle") {
            shape = new Circle()
        } else if (res.shape === "Triangle") {
            shape = new Triangle()
        } else {
            shape = new Square()
        }
        shape.setColor(res.shapeColor)

        const svg = new SVG()
        svg.setText(res.text, res.textColor)
        svg.setShape(shape)
        console.log(svg)
    })
}

init()