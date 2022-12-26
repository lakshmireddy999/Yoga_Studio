form.addEventListener('submit', function (e) {
    let validation=false;
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const age = document.getElementById('age').value;
    const mobile = document.getElementById('mobile').value;
    const timing = document.getElementById('timings').value;
    if (age < 18) {
        window.alert("underage to join the club")
    }
    else if (age > 65) {
        window.alert("Too old to join")
    }
    else {
        axios.post('http://localhost:8080/user/update', {
            firstName: fname,
            lastName: lname,
            age: age,
            timings: timing,
            mobile: mobile

        }).then((result) => {
            console.log(result);
        }).catch((err) => {
            console.log(err);
        });
        validation=true
    }
    
    if(!validation)
    {
        e.preventDefault();
    }
    else
    {
        console.log("form is validated")
    }
})