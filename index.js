const express = require("express");

const app = express();

app.use(express.json());

app.get("/data", async (req, res) => {
    try {
        // const data = await fetch("http://localhost:3002/");
        // const json = await data.text();
        res.send("Hello World from Service 1!");
    } catch (err) {
        res.send("Error");
    }
});

app.listen(3001, () => {
    console.log("Service 1 is running on port 3001");
});