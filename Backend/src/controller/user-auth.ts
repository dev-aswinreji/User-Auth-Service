import { Request, Response } from "express";
import client from "../model/postgres";
export async function userAuth(req: Request, res: Response): Promise<any> {
  try {
    console.log('inside post method');

    // const datas = req.body

    // console.log(datas,'Email is here');

    // const data = await client.query(`SELECT * from Users`)
    // console.log(data,'Data is showing here of queriying email');

    return res.status(200).json({ message: "Login auth success" });

  } catch (error) {
    console.log(error, 'Error caught in user-auth.ts');
  }
}

