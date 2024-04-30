 const inputField = document.querySelector('#name-input');
 const output = document.querySelector('#name-output');
 console.log(output);
 const handler = (event) => {
    output.textContent = inputField.value.trim();
    if(!inputField.value) {
        output.textContent = 'Anonymous';
    }
 }

 inputField.addEventListener('input', handler);
