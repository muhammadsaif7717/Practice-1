// get input Element by id
function getInputValueById(inputId) {
    const inputElement = document.getElementById(inputId);
    const inputValueText = inputElement.value;
    const inputValue = parseFloat(inputValueText);
    return inputValue;
}




function calculateTriangleArea() {
    const base = getInputValueById('triangle-base');
    const height = getInputValueById('triangle-height');
    // calculation of triangle area
    const area = 0.5 * base * height;
    // display the result
    document.getElementById('triangle-area-result').innerText = area;
}

function calculateRectangleArea() {
    const width = getInputValueById('rectangle-width');
    const length = getInputValueById('rectangle-length');
    // calculation of triangle area
    const area = width * length;
    // display the result
    document.getElementById('rectangle-area-result').innerText = area;
}