document.addEventListener("DOMContentLoaded", function () {
    // Get DOM elements
    const colorBox = document.getElementById("color-box");
    const changeColorBtn = document.getElementById("change-color-btn");

    // Function to generate random hex color
    function getRandomColor() {
        // Generate random values for red, green, and blue components
        const letters = "0123456789ABCDEF";
        let color = "#";

        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }

        return color;
    }

    // Function to change the color box background
    function changeColor() {
        const randomColor = getRandomColor();
        colorBox.style.backgroundColor = randomColor;

        // Optional: Display the color code
        console.log("New color:", randomColor);
    }

    // Add click event listener to the button
    changeColorBtn.addEventListener("click", changeColor);

    // Optional: Change color on page load
    changeColor();
});
