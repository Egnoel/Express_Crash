const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const members = require('./Members');
const app = express();
const logger = require('./middleware/logger');

/*Init middleware
app.use(logger);*/

//Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//handlebars Middleware
app.engine('handlebars', exphbs.engine({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

//homepage Route Handlebars
app.get('/',(req, res)=>res.render('index',{
    title:"Member App",
    members
}));

//static folder
app.use(express.static(path.join(__dirname, 'public')));
//Members API Routes
app.use('/api/members', require('./routes/api/members'));

//stabilishing a port
const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>console.log(`Server started on port${PORT}`));