import { getDatabase } from "./src/Services/databaseConnector";

const express = require("express");
const cors = require("cors");
const { MongoClient, ObjectId } = require("mongodb");
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
    const id = Number(req.query.id);
    const karenId = ObjectId.createFromHexString(req.query.id);
    const sentences = Number(req.query.sentences) || 5;
    const parragraphs = Number(req.query.parragraphs) | 1;
    const filter = {
      _id: karenId,
    };

    if (!ObjectId.isValid(karenId)) {
      return res.status(400).json({ message: "Invalid ID" });
    }

    const connection = await getDatabase();
    const getIpsum = await connection
      .db("karen-ipsum")
      .collection("karens")
      .findOne(filter);

    const quotes: string[] = getIpsum?.quotes || [];

    const result: string[][] = [];

    for (let i = 0; i < parragraphs; i++) {
        const parragraph: string[] = []
      for (let i = 0; i < sentences; i++) {
        const random = Math.floor(Math.random() * quotes.length);
        parragraph.push(quotes[random]);
      }
      result.push(parragraph);
    }

    res.status(200).json({ message: " Succesfully retrieved ", data: result });
  } catch (error) {
    res.status(500).json({
      message: "Unexpected Error",
      data: [],
      error: error.toString(),
    });
  }
});

app.listen(port);
