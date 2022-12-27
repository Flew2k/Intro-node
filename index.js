const express = require('express')
const usersRoute = require('./routes/usersRoute')
const postRoute = require('./routes/postRoute');
const port = 8000;
const app = express();

app.use(express.json());
app.use('/users', usersRoute);
app.use('/posts', postRoute);

app.get('/hello', (req, res) => {
    res.send("Hello Express js 🥰");
})

app.listen(port, ()=> {
    console.log(`Server is running at http://localhost:${port}`);
})