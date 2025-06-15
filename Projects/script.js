 let randomBtn = document.querySelector('.button');
let currentColor = document.querySelector('.colorValue');
let body = document.querySelector('.container');

const colorArr = [
  'aqua', 'blue', 'crimson', 'darkorange', 'forestgreen',
  'goldenrod', 'hotpink', 'indigo', 'khaki', 'lavender',
  'lightcoral', 'mediumslateblue', 'navajowhite', 'olivedrab',
  'palegreen', 'royalblue', 'salmon', 'tomato', 'violet', 'yellowgreen'
];

const generateRandomColor = () => {
    const randomNumber = Math.floor(Math.random() * colorArr.length);
    return colorArr[randomNumber];
};

const changeColor = (color) => {
    body.style.backgroundColor = color;
    currentColor.innerText = color;
};

const handleRandomBtn = () => {
    let color = generateRandomColor(); 
    changeColor(color);
};

randomBtn.addEventListener('click', handleRandomBtn);

