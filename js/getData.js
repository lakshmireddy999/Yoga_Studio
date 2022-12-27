function getData() {
    axios.get("http://localhost:8080/user/data").then((result) => {
        console.log(result.data);
        const tbodyEL = document.getElementById('table');
        for (let i = 0; i < result.data.length; i++) {
            let id = result.data[i].id;
            let fname = result.data[i].firstName;
            let lname = result.data[i].lastName;
            let Age = result.data[i].age;
            let Mobile = result.data[i].mobile;
            let Timing = result.data[i].timings;
            console.log(id, fname, lname, Age, Mobile, Timing);
            tbodyEL.innerHTML += `
            <tr>
                <td>${id}</td>
                <td>${fname}</td>
                <td>${lname}</td>
                <td>${Age}</td>
                <td>${Timing}</td>
                <td>${Mobile}</td>
            </tr>
            `;
        }
    }).catch((err) => {
        console.log(err);
    });

}
window.onload = function () {
    getData();
}
