# Hex Color Palette Picker


## The Base
For this project I wanted to make use of a JS function I created that generated a random color hex code for the user. 
The first part of the code is a function that makes the code using a Math.random method and turning it into a string that's 16 characters long or hexicimal. It then uses a call back to my other function that pulls from the Array.from method and turns it into 6 digits with a # at the start. For more details browse the JS script file.

A few minor additions include a click event that copies the hex code of choice into the users clipboard with a message stating the copy was successful and transitioning with a timeout 1 second later.

## The CSS
I wanted to see how hard it would be to create a fully responsive color picker without the use of the bootstrap library that I usually incorporate for my projects. I made full use of flex in the base container from which everything is seen. For the generate hex button I wanted to have a fixed position for a more mobile friendly users experience and I believe it accomplishes that.

A few media queries are used in order to scale the site down if a small size is detected. Font size, container are resized appropreately. 

## The HTML
I broke things up into only two parts including a ul with the class name of container and a button. Everything else is generated using DOM manipulation and querySelectors




## Technologies

![HTML](https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white)
![Git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)
![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase)
![Javascript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Google Chrome](https://img.shields.io/badge/Google%20Chrome-4285F4?style=for-the-badge&logo=GoogleChrome&logoColor=white)
## Demo

https://palette-picker-4677c.web.app


## Screenshots

![palette1](https://user-images.githubusercontent.com/48900828/218371784-c898be62-faba-4fa8-8930-5fba3ec900e7.PNG)

![palette2](https://user-images.githubusercontent.com/48900828/218371787-b40df2b6-ab45-4ec1-a8d8-d48b321aeb1d.PNG)
