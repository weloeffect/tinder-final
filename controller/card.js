const Cards = require('../model/dbCards')

const addCard = async(req, res) => {
    const dbCard = req.body;

    Cards.create(dbCard, (err, data) =>{
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(201).send(data);
        }
    });
}
const getCard = async(req, res) => {
    Cards.find((err, data) =>{
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(200).send(data);
        }
    });
}
module.exports = {addCard, getCard}