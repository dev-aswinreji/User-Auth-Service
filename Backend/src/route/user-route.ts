import express, { Router } from "express";
import { userAuth } from "../controller/user-auth";
import userSignin from "../controller/user-signin";

const route: Router = express.Router()

route.post('/login', userAuth)
route.post('/signin', userSignin)

export default route
