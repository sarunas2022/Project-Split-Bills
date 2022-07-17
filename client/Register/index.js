document.querySelector('form').addEventListener('submit', async (event) => {
    event.preventDefault();

    // checking if passwords match
    const password = passwordCheck(
        document.getElementById('password').value,
        document.getElementById('repeat-password').value
    );

    const input = {
        full_name: event.target.elements.name.value,
        email: event.target.elements.email.value,
        password,
    };
    const userData = await onRegister(input);

    // edge cases
    if (userData.insertId) {
        location.replace('../login/index.html');
    } else if (userData.error) {
        alert(userData.error);
    } else {
        alert(userData.details[0].message);
    }
});

// function to insert registration data into database
const onRegister = async (data) => {
    try {
        const response = await fetch('http://localhost:8080/register', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const responseJson = await response.json();
        return responseJson;
    } catch (err) {
        alert(err);
    }
};

// function to check if passwords match
const passwordCheck = (psw1, psw2) =>
    psw1 === psw2 ? psw1 : alert("passwords don't match");
