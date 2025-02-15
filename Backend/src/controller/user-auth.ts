import { Request, Response } from "express";
import client from "../model/postgres";
export async function userAuth(req: Request, res: Response): Promise<any> {
  try {
    const { name, email, password } = req.body

    const isEmailExist = await client.query(`SELECT email FROM Users WHERE email='${email}'`)

    const result = isEmailExist.rows[0]?.email ? { message: 'email already exists', statusCode: 409 } : { message: "SignUp success", statusCode: 201 }

    if (result.statusCode === 201) {
      await client.query(`INSERT INTO Users 
        (name,email,password)
        VALUES('${name}','${email}','${password}')
        `)
    }

    res.status(result.statusCode).json({ message: result.message })

  } catch (error) {
    console.log(error, 'Error caught in user-auth.ts');
  }
}

