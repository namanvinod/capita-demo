const express = require('express');
const App = express();
const bodyParser = require('body-parser');
const cors = require('cors');
 
const dal = require('./dal');

const { judges, ideas } = { ...dal };
App.listen(process.env.PORT || '1010', () => {
    console.log('Listening!')
})

App.use(bodyParser.json());
App.use(cors());

App.post('/api/login', (req, res) => {
    try {
        res.status(200).send({ isLoggedIn: true });
    }
    catch (err) {
        res.status(500).send(err);
    }
})

App.get('/api/ideas', (req, res) => {
    try {
        let numJudges = judges.length;
        let randomIdeas = ideas.sort(() => { 
            let random = Math.random();
            return (random > 0.55 ? 1 : random >= 0.45 && random <= 0.55 ? 0 : -1);
         });
        //console.log(numJudges, randomIdeas, randomIdeas.slice(0, numJudges));
        res.status(200).send(randomIdeas.slice(0, numJudges));
    }
    catch (err) {
        console.log('test1', err);
        res.status(500).send(err);
    }
})