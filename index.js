const express = require('express');
const app = express();
const port = 3000;

// middleware
app.use(express.json());

app.get('/', (req, res) => {
    res.send(`<h1>Welcome to home page</h1>`)
})

app.post('/car',(req,res) => {
res.send(`<h1>Welcome to car</h1>`)
});

app.listen(port,()=>{
    console.log(`listening on port ${port}`)
}) 