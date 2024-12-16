import { getDatabase } from "./src/Services/databaseConnector";

const express = require("express");
const cors = require("cors");
const {MongoClient, ObjectId}  = require('mongodb');
const url = "mongodb://root:password@localhost:27017";
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.get("/moods", async (req, res) => {
  try {
    const connection = await getDatabase();
    const getMoods = await connection
      .db("karen-ipsum")
      .collection("karens")
      .find({})
      .project({ _id: 1, name: "$style" })
      .toArray();

    res.status(200).json({
      message: "Successfully retrieved all Karen moods",
      data: getMoods,
    });
  } catch (error) {
    res.status(500).json({
      message: "Unexpected Error",
      data: [],
      error: error.toString(),
    });
  }
});

app.get("/ipsum", async (req, res) => {
  try {
    const id = Number(req.query.id)
    const karenId = ObjectId.createFromHexString(req.query.id);
    const filter = {
        _id: karenId,
    };
    const connection = await getDatabase();
    const getIpsum = await connection

    .db("karen-ipsum")
    .collection("karens")
    .findOne(filter)
    
    

    res.json({message: " Succesfully retrtieved ", data: getIpsum.quotes})




  } catch (error) {
    res.status(500).json({
      message: "Unexpected Error",
      data: [],
      error: error.toString(),
    });
  }
});

app.listen(port);
