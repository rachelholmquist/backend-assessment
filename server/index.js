const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, showMantras, deleteMantra, addFortune } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.get("/api/mantras", showMantras);
app.delete("/api/deleteMantra/:id", deleteMantra);
app.post("/api/addFortune", addFortune);

app.listen(4000, () => console.log("Server running on 4000"));
