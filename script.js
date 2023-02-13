
const container = document.querySelector(".container")
const refreshBtn = document.querySelector(".refresh-btn");

const maxPaletteBoxes = 32;


const generatePalette = () => {

    container.innerHTML = ""; //clears container

    for(let i = 0; i < maxPaletteBoxes; i++) {

        //generates the required two values to produce a random hex code
        const getRandomHexNumber = () =>  Math.floor(Math.random() * 16).toString(16);
        const getRandomHexColor = () => '#' + Array.from({ length: 6 }).map(getRandomHexNumber).join('');
        console.log(getRandomHexColor());


        //this create the new li element that will populate the page
        const color = document.createElement('li');
        color.classList.add('color');
        color.innerHTML = ` <div class="rect-box" style="background: ${getRandomHexColor()}"></div>
                            <span class="hex-value">${getRandomHexColor()}</span>`;

        color.addEventListener("click", () => copyColor(color, getRandomHexColor()))
        

        container.appendChild(color);
    }
}

generatePalette();

const copyColor = (elem, getRandomHexColor) => {
    const colorElement = elem.querySelector(".hex-value");
    // copies the hex value onto clipboard and changes back after 1 second timeout
    navigator.clipboard.writeText(getRandomHexColor).then(() => {
        colorElement.innerText = "Copied";
        setTimeout(() => colorElement.innerText = getRandomHexColor, 1000)
    }).catch(() => alert("Failed to copy the color code!"));
}

refreshBtn.addEventListener('click', generatePalette);