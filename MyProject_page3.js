let users = [
    {
        "id":4,
        "name":"Nome 1",
        "middleName": "Nome di mezzo"
    },
    {
        "id":5,
        "name":"Nome 2"
    }
];


function getStorage() {
    console.log(JSON.parse(localStorage.getItem("myUsers")));

}

function setStorage() {
    localStorage.setItem("mieiStudenti",JSON.stringify(users));
}