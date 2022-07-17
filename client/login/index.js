document.querySelector('form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const input = {
        email: event.target.elements.email.value,
        password: event.target.elements.password.value,
    };
    // saving token into localStorage
    const loginDetails = await onLogin(input);

    // edge cases
    if (loginDetails.token) {
        localStorage.setItem('token', loginDetails.token);
        location.replace('../groups/index.html');
    } else if (loginDetails.error) {
        alert(loginDetails.error);
    } else {
        alert(loginDetails.details[0].message);
    }
});

const onLogin = async (data) => {
    try {
        const response = await fetch('http://localhost:8080/login', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const responseJson = await response.json();
        return responseJson;
        // }
    } catch (err) {
        console.log(err);
    }
};
