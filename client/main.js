

const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.getElementById("fortuneButton");
const mantraBtn = document.getElementById("mantraButton");
const mantraList = document.getElementById("mantraList");

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