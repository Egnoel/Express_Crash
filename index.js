const express = require('express');
const path = require('path');
const app = express();
const members = require('./Members');
const logger = require('./middleware/logger');

/*Init middleware
app.use(logger);*/

//Gets all members
app.get('/api/members', (req, res)=>{
    res.json(members);
})

//static folder
app.use(express.static(path.join(__dirname, 'public')));

//stabilishing a port
const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>console.log(`Server started on port${PORT}`));