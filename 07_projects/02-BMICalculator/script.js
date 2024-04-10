const form = document.querySelector('form');
// this usecase wil give you empty value
// const height = parseInt(document.querySelector('#height').value());

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (height === '' || height <= 0 || isNaN(height)) {
        results.innerHTML = `${height} is not a valid height`;
    } else if (weight === '' || weight <= 0 || isNaN(weight)) {
        results.innerHTML = `${weight}  is not a valid height`;
    } else {
        const bmi = (weight / ((height*height)/10000)).toFixed(3);
        const result_display = document.querySelector('#result-display');

        //show the result
        results.innerHTML = `<span>${bmi}</span>`;
        
        if (bmi < 18.6) {
            result_display.innerHTML = `<span>Under Weight</span>`;
            result_display.style.color = 'yellow';
        } else if (bmi >= 18.6  && bmi <= 24.9) {
            result_display.innerHTML = `<span>Normal Range</span>`;
            result_display.style.color = 'green';
        } else if (bmi > 24.9) {
            result_display.innerHTML = `<span>Over Weight</span>`;
            result_display.style.color = 'red';
        }
    }
})