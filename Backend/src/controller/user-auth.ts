import { Request, Response } from "express";
import client from "../model/postgres";
export async function userAuth(req: Request, res: Response): Promise<any> {
  try {
    console.log('inside post method');



    const { name, email, password } = req.body

    console.log(email, 'Email is here');

    const isEmailExist = await client.query(`SELECT email FROM Users WHERE email='${email}'`)

    console.log(isEmailExist, 'is email exist is what');

    console.log(isEmailExist.rows[0]?.email, 'is email exist is what');


    const result = isEmailExist.rows[0]?.email ? { message: 'email already exists', statusCode: 409 } : { message: "SignUp success", statusCode: 201 }

    console.log(result, 'Result is showing');

    if (result.statusCode === 201) {
      const isInserted = await client.query(`INSERT INTO Users 
        (name,email,password)
        VALUES('${name}','${email}','${password}')
        `)
      console.log(isInserted, 'is inserted');

    }

    res.status(result.statusCode).json({ message: result.message })

  } catch (error) {
    console.log(error, 'Error caught in user-auth.ts');
  }
}

