const express = require("express");
const app = express();

app.use(express.json());

app.post("/auth/register", (req, res) => {
    console.log("route auth/register found");
    res.status(200).json({ message : "route register good"});
});

app.listen(4000, () => {
    console.log("test server activ 4000");
});
