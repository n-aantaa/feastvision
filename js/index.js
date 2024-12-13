document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
});

const formContainer = document.querySelector('.form-container');
const submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', (event) => {

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        formContainer.innerHTML = `<p>Thank you for contacting us. You will hear from us soon!</p><br>
                                <p>Return to <a href="../pages/index.html">homepage</a></p>`
    }


});

document.addEventListener('DOMContentLoaded', function() {});