let id = document.getElementById("userId");
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let age = document.getElementById("age");
let countUsers = 0;
let oldCounter = 0;
let users = [];
let localData;



const addEnd = () => {
    users[countUsers] = {
        id: id.value,
        firstName: firstName.value,
        lastName: lastName.value,
        age: age.value,
    };
    countUsers++;

    for (let i = oldCounter; i < countUsers; i++) {
        let newTr = document.createElement('tr');

        for (let key in users[i]) {
            newTr.innerHTML += `<td> ${users[i][key]} </td>`
        }
       let q = table.appendChild(newTr, table.lastChild);
        console.log(q);
    }

    oldCounter = countUsers;
};

const addStart = () => {
    users[countUsers] = {
        id: id.value,
        firstName: firstName.value,
        lastName: lastName.value,
        age: age.value,
    };
    countUsers++;

    let newTr = document.createElement('tr');
    for (let i = oldCounter; i < countUsers; i++) {

        for (let key in users[i]) {
            newTr.innerHTML += `<td> ${users[i][key]} </td>`
        }
    }
    firstTr.after(newTr, table.firstChild);


    oldCounter = countUsers;
};

const clearTable = () => {
    let tr = document.getElementsByTagName('tr');

    for(let i = tr.length; i >= 0; i--){
        if(tr.item(i-1).className){

        }else{
        tr.item(i-1).remove();}
    }

    users = [];
};

const saveData = () => {
    localData = JSON.stringify(users);
    localStorage.setItem('users', localData);
    alert("Таблица сохранена");
};

const read = () =>  {
 let readData = localStorage.getItem('users', users);
 let newRead = JSON.parse(readData);

   for (let i = 0; i < newRead.length; i++) {
        let newTr = document.createElement('tr');

        for (let key in newRead[i]) {
            newTr.innerHTML += `<td> ${newRead[i][key]} </td>`;
        }
        table.appendChild(newTr, table.lastChild);
    }

};




