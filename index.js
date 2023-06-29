const inquirer = require('inquirer');
const fs = require('fs');
const Triangle = require('./lib/Triangle');
const Square = require('./lib/Square');
const Circle = require('./lib/Circle');

const validateColor = color => {
  const colorNames = ["aqua", "black", "blue", "fuchsia", "gray", "green", "lime", "maroon", "navy", "olive", "orange", "purple", "red", "silver", "teal", "white", "yellow"];
  const hexRegex = new RegExp('^#(?:[0-9a-fA-F]{3}){1,2}$');
  const rgbRegex = new RegExp('^rgb\\((\\d{1,3}),\\s*(\\d{1,3}),\\s*(\\d{1,3})\\)$');
  
  if (hexRegex.test(color) || rgbRegex.test(color) || colorNames.includes(color.toLowerCase())) {
      return true;
  }
  return 'Invalid color. Please enter a valid color (Keyword, Hexadecimal or RGB).';
};

const validateText = text => {
  if(text.length > 3 || text.length < 1) {
      return "Please enter one to three characters.";
  } 
  return true;
};

inquirer.prompt([
    {
        type: 'input',
        name: 'text',
        message: 'What is the text for the logo?',
        validate: validateText
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What is the color of the text?',
        validate: validateColor
    },
    {
        type: 'list',
        name: 'shape',
        message: 'What shape would you like?',
        choices: ['Circle', 'Square', 'Triangle'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What is the color of the shape?',
        validate: validateColor
    },
]).then(answers => {
    let shape;
    switch (answers.shape) {
        case 'Circle':
            shape = new Circle(answers.shapeColor);
            break;
        case 'Square':
            shape = new Square(answers.shapeColor);
            break;
        case 'Triangle':
            shape = new Triangle(answers.shapeColor);
            break;
    }

    const svgOutput = `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            ${shape.render()}
            <text x="150" y="115" font-size="60" dominant-baseline="middle" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
        </svg>
    `;

    fs.writeFile('logo.svg', svgOutput, err => {
        if (err) throw err;
        console.log('Generated logo.svg');
    });
});