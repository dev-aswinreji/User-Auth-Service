import { Request,Response } from "express";
export default function UserHome(req:Request,res:Response){
   res.status(200).json({message:"user auth success to home"})
}