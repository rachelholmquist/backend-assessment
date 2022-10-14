const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.getElementById("fortuneButton");
const addFortuneBtn = document.getElementById("addFortune");
const addFortuneValue = document.getElementById("add");
const mantraBtn = document.getElementById("mantraButton");
const mantraList = document.getElementById("mantraList");
const deleteMantraDropdown = document.getElementById("mantraId");
const errCallback = err => console.log(err);
let mantras = [];

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data=res.data;
            alert(data);
        });
};
fortuneBtn.addEventListener('click', getFortune);

const getMantras = () => {
    axios.get("http://localhost:4000/api/mantras/")
        .then(res => {
            const data=res.data;
            for(let i = 0; i < data.length; i++){
                let listItem = document.createElement('li');
                listItem.appendChild(document.createTextNode(data[i].name));
                document.querySelector('ul').appendChild(listItem);
            }
        });
};
mantraBtn.addEventListener('click', getMantras);

const deleteMantra = () =>  {
    axios.delete("http://localhost:4000/api/deleteMantra/" + deleteMantraDropdown.value)
    .then(res => {
        console.log(res);
        //alert("successfully deleted");
    })
    .catch(errCallback);
}
// deleteMantraDropdown.addEventListener('onchange', deleteMantra);
deleteMantraDropdown.onchange = deleteMantra;

const displayMantras= () => {
    axios.get("http://localhost:4000/api/mantras/")
        .then(res => {
            const data=res.data;
            for(let i = 0; i < data.length; i++){
                let option = document.createElement("option");
                option.text = data[i].name;
                option.value = data[i].id;
                deleteMantraDropdown.appendChild(option);
            }
        });
    }
window.onload = displayMantras;

const addFortune = () => {
    console.log(addFortuneValue.value);
    axios.post("http://localhost:4000/api/addFortune", {fortune: addFortuneValue.value})
    .then(res => {
        alert(res.data);
    }).catch(errCallback);
}

addFortuneBtn.addEventListener('click', addFortune);