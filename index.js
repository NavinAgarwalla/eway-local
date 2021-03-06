

const express = require('express');
const bodyParser = require('body-parser');
const db = require('./data.json');



function findstateByName(state) {
  const data = db.find(p => p.state.toLowerCase() === state.toLowerCase());
  if (!data) {
    return null;
  }
  return data;
};






function getstateInformations(req, res) {
  const state = req.body.conversation.memory.state;
  const stateInfos = findstateByName(state.value);
   const memory = req.body.conversation.memory;
  
  console.log(memory);

 

  if (!stateInfos) {
    res.json({
      replies: [
        { type: 'text', content: `I don't know a state called ${state} :(` },
      ],
    });
  } else {
    res.json({
      replies: [
        { type: 'text', content: stateInfos.Mobile },
        { type: 'text', content: stateInfos.Mail },
        
      ],
    });
  }
}













const app = express();
app.use(bodyParser.json());

// Load routes
app.post('/state-informations', getstateInformations);
//app.post('/pokemon-evolutions', getPokemonEvolutions);
app.post('/errors', function (req, res) {
  console.error(req.body);
  res.sendStatus(200);
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
 
  console.log(`App is listening on port ${PORT}`);});











































/*
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./data.json');




function findStateByName(name) {
  const data = db.find(p => p.state.toLowerCase() === name.toLowerCase());
  if (!data) {
    return null;
  }
  return data;
};


function getStateInformations(req, res) {
  
    
   
  const state = req.body.conversation.memory.state;

  const memory = req.body.conversation.memory;
 const stateInfos = findStateByName(state.value);
  console.log(state);
  console.log(memory);
  if (!stateInfos) {
    res.json({
      replies: [
        { type: 'text', content: `I don't know a state called ${state} :(` },
      ],
    });
  } else {
    res.json({
      replies: [
        { type: 'text', content: `🔎${stateInfos.state} infos` },
        { type: 'text', content: `district: ${stateInfos.District}` },
        //{ type: 'text', content: stateInfos.Landline },
        //{ type: 'picture', content: stateInfos.Mobile },
      ],
    });
  }
}

const app = express();
app.use(bodyParser.json());

// Load routes
app.post('/contact-info',getStateInformations);
//app.post('/pokemon-evolutions', getPokemonEvolutions);
app.post('/errors', function (req, res) {
  console.error(req.body);
  res.sendStatus(200);
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`App is listening on port ${PORT}`);});



*/
