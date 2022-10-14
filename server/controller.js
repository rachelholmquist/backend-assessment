const mantras = require('./db.json');
const fortunes = ["All the effort you are making will ultimately pay off.", "If you wish to see the best in others, show the best of yourself.", 
"Place special emphasis on old friendship.", "We first make our habits, and then our habits make us."];

    function getCompliment(req, res) {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    };
    function getFortune(req, res) {
      
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
        res.status(200).send(randomFortune);
    };

    function addFortune (req, res) {
        let newFortune = req.body.fortune;
        fortunes.push(newFortune)
        res.status(200).send('Thank you for your fortune ' + newFortune);
    }
    
    function showMantras(req, res) {
        res.status(200).send(mantras);
    }

    function deleteMantra (req, res) {
        console.log(req.params);
        const {id} = req.params;
        for(let i = 0; i < mantras.length; i++){
            if(mantras[i].id === +id){
                console.log(id);
                mantras.splice(i, 1);
                return res.status(200).send(mantras);
            }
        }
        //res.status(400).send(mantras);
    }


module.exports = {
    getCompliment,
    getFortune,
    showMantras,
    deleteMantra,
    addFortune
}