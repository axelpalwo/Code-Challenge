const NAME = document.getElementById("name");
const LASTNAME = document.getElementById("lastname");
const DOB = document.getElementById("dob");
const BUTTON = document.getElementById("button");
const URL = "https://jsonplaceholder.typicode.com/users";
const DATA = {};
function insertData(array){
    array.name = NAME.value;
    array.lastname = LASTNAME.value;
    array.dob = DOB.value;
}
const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'},
    body: JSON.stringify(DATA)
}
BUTTON.addEventListener("click",()=>{
    
    insertData(DATA);
    
    fetch(URL, options)
    .then(response => {
        if (!response == 'ok'){
            throw new Error("Los datos han fallado al enviarse");
        }
        return response.json();
    })
    .then (data => {
        console.log(data);
    })
    .catch (error => {
        console.error('Error', error);
    })
})