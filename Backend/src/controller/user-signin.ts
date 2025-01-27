import { Request, Response } from "express"
import querying from "../model/postgres"
import client from "../model/postgres"

export default async function userSignin(req: Request, res: Response) {

    const { email, password } = req.body
    console.log(email, password, 'is showing here');

    const isUserExist = await client.query(`SELECT email,password FROM Users WHERE email='${email}'`)

    console.log(isUserExist.rows[0], 'user data');
    const isEmailExist = isUserExist.rows[0]?.email ? isUserExist.rows[0].password : ""

    let result
    if (isEmailExist.length > 0) {
        result = isUserExist.rows[0].password === password ? { statusCode: 202, message: "user login success" } : { statusCode: 403, message: "user credential wrong" }
    } else {
        result = { statusCode: 302, message: "invalid user credentials" }
    }

    res.status(result.statusCode).json({ message: result.message })

}