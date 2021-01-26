
const bakedGoods = require('../models/bakedgoods');

const showWelcome = (req, res) => {
    res.send('Welcome to Biscoff Bakery!');
};

const showList = (req, res) => {
    res.render('../view/index.ejs', {
        bakeList : bakedGoods
    });
};

const displayList = (req, res) => {
    res.render('../view/show.ejs',{
        bakeList : bakedGoods[req.params.id]
    });
}

const createPost = (req,res) => {
    res.render('../view/create.ejs', {
        
    });
    
}

const postData = (req,res) => {
    bakedGoods.push(req.body);
    console.log(bakedGoods);
    res.redirect('/bakelist');
}



module.exports = {
    showWelcome,
    showList,
    displayList,
    createPost,
    postData
}