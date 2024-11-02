const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;


// Middleware
app.use(cors());
app.use(express.json()); 

const users = [
  { id: 1, name: "Zulquar", email: "Zulquar150@gmail.com" },
  { id: 2, name: "Zeeshan", email: "Zeeshan150@gmail.com" },
  { id: 3, name: "Ziaul Haq", email: "Ziaul786@gmail.com" },
  { id: 4, name: "Danish ali", email: "Zulquar150@gmail.com" },
];

app.get("/", (req, res) => {
  res.send("Hello Zulquar Your Server is Running on the port 5000 !");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
  console.log('Post API is hitting');
  console.log(req.body);
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.send(newUser);
})


app.listen(port, () => {
  console.log(`The Server is running on port ${port}`);
});
