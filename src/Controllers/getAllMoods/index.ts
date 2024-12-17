import { getDatabase } from "../../Services/databaseConnector";
import { Request, Response } from "express";

export async function getAllMoods(req: Request, res: Response): Promise<void>{
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
}