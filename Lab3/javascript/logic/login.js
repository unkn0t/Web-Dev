let login = prompt('Login?', '');

if (login === "Admin") {
    let password = prompt('Password?', '');

    if (password === 'TheMaster') {
        alert('Welcome!');
    } else if (password === null || password === '') {
        alert('Canceled');
    } else {
        alert('Wrong password');
    }
} else if (login === null || login === '') {
    alert('Canceled');
} else {
    alert("I don't know you");
}