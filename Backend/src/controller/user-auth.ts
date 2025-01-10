import { Request, Response } from "express";
export async function userAuth(req: Request, res: Response): Promise<any> {
  return res.status(200).json({ message: "Login auth success" });
}
