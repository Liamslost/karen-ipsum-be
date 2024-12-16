const express = require('express');
const cors = require('cors');
const {MongoClient, ObjectId}  = require('mongodb');
const url = "mongodb://root:password@localhost:27017";
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json())

const dbDetails = {
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'demo'
}

app.get('/styles', async (req,res)=>{
    try{
        const connection = await MongoClient.connect(url)
        const getStyles = connection
        .db("karen-ipsum")
        .collection("karens")
        
        const styles = await getStyles.distinct("style")
        res.json({message: "Got styles" ,data: {styles}})

    }catch(error){
        res
        .status(500)
        .json({
          message: "Unexpected Error",
          data: [],
          error: error.toString(),
        });
    }
})
app.listen(port);