const express = require('express');
const app = express();
const path = require('path');
const port = 3002;

const routeHome = require('./routes/home');
const routeUser = require('./routes/user');

app.use(express.static(path.join(__dirname, 'public')));

app.use(routeHome);
app.use(routeUser);

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, 'views', '404.html'))
})

app.listen(port, () => {
    console.log(`App listen on port ${port}`);
});