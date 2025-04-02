const express = require("express");
const cors = require("cors");
const app = express();


app.use(cors());

const port = process.env.PORT || 5000;

const user = [
    {id:1,name:"Zulquar",email:"zulquar@gmail.com"},
    {id:2,name:"Jamal",email:"jamal@gmail.com"}
]

app.get("/", (req, res) => {
    res.send(`Server is running on the port ${port}`);
})
app.get("/users", (req, res) => {
    res.send(user);
})


app.listen(port, () => {
    console.log(`Your Server is running on the port ${port}`)
})