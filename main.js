"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const cors = require('cors');
const { MongoClient, ObjectId } = require('mongodb');
const url = "mongodb://root:password@localhost:27017";
const app = express();
const port = 3001;
app.use(cors());
app.use(express.json());
const dbDetails = {
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'demo'
};
app.get('/styles', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connection = yield MongoClient.connect(url);
        const getStyles = connection
            .db("karen-ipsum")
            .collection("karens");
        const styles = yield getStyles.distinct("style");
        res.json({ message: "Got styles", data: { styles } });
    }
    catch (error) {
        res
            .status(500)
            .json({
            message: "Unexpected Error",
            data: [],
            error: error.toString(),
        });
    }
}));
app.listen(port);
