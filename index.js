const express = require('express');
const bodyParser = require('body-parser');
//const contactinfo = require('./file.js');
const db = require('./data.json');




function findStateByName(name) {
  const data = db.find(p => p.state.toLowerCase() === name.toLowerCase());
  if (!data) {
    return null;
  }
  return data;
};


function getStateInformations(req, res) {
  const state = req.body.conversation.memory.state.value;
  const stateInfos = findStateByName(state);
  if (!stateInfos) {
    res.json({
      replies: [
        { type: 'text', content: `I don't know a state called ${state} :(` },
      ],
    });
  } else {
    res.json({
      replies: [
        { type: 'text', content: `🔎${stateInfos.name} infos` },
        { type: 'text', content: `district: ${stateInfos.District}` },
        { type: 'text', content: stateInfos.Landline },
        { type: 'picture', content: stateInfos.Mobile },
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

console.log(req.body.conversation.memory.state);



/*
const app = express();
app.use(bodyParser.json());

const port=process.env.PORT|| 3000;

app.post('/errors', (req, res) => {
   console.error(req.body);
   res.sendStatus(200); 
});



app.post('/contact-info', (req, res) => {
    console.log('[POST] /contact-info');
    const memory = req.body.conversation.memory;
    const state= memory.state;
    const district = memory.district;
    contactinfo(state,district).then((data)=>{
        res.json({replies:data});
    });
});

app.listen(port, () => console.log(`App started on port ${port}`));
*/
