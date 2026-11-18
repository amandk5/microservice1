const express = require("express");

const app = express();

app.use(express.json());

// routes
app.get("/data", async (req, res) => {
    try {
        // const data = await fetch("http://localhost:3002/");
        // const json = await data.text();
        res.json({
            message: "Hello World from Service 1!",
        });
    } catch (err) {
        res.send("Error");
    }
});

// listen at port 3001
app.listen(3001, () => {
    console.log("Service 1 is running on port 3001");
});
