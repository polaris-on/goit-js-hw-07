const loginForm = document.querySelector('.login-form');
const result = {}

const formSubmit = (event) => {
    event.preventDefault();
    if (!event.target.elements.email.value || !event.target.elements.password.value) {
        alert('All form fields must be filled in');
        return;
    }
    result.email = event.target.elements.email.value;
    result.password = event.target.elements.password.value;
    console.log(result);
    loginForm.reset();
}

loginForm.addEventListener('submit', formSubmit)
