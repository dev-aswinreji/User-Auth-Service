import express, { Router } from "express";
import { userAuth } from "../controller/user-auth";

const route: Router = express.Router()

route.post('/login', userAuth)

export default route
