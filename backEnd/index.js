const express = require('express')
const usersRoute = require('./routes/usersRoute')
const postsRoute = require('./routes/postsRoute');
var cors = require('cors')
const port = 8000;
const app = express();

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

app.use(cors(corsOptions));
app.use(express.json());
app.use('/users', usersRoute);
app.use('/posts', postsRoute)

app.get('/hello', (req, res) => {
    res.send("Hello Express js 🥰");
})

app.listen(port, ()=> {
    console.log(`Server is running at http://localhost:${port}`);
})