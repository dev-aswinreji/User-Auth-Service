import express, { Router } from "express";
import { userAuth } from "../controller/user-auth";
import userSignin from "../controller/user-signin";
import UserHome from "../controller/user-home";

const route: Router = express.Router()

route.post('/login', userAuth)
route.post('/signin', userSignin)
route.get('/home',UserHome)

export default route
