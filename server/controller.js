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
    
    function showMantras(req, res) {
        res.status(200).send(mantras);
    }


module.exports = {
    getCompliment,
    getFortune,
    showMantras,
}