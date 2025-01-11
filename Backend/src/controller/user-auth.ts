import { Request, Response } from "express";
import client from "../model/postgres";
export async function userAuth(req: Request, res: Response): Promise<any> {
  try {

    const data = await client.query("SELECT * FROM Users")
    console.log(data, 'data is here');
    return res.status(200).json({ message: "Login auth success" });

  } catch (error) {
    console.log(error, 'Error caught in user-auth.ts');
  }
}

