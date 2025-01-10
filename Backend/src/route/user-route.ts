import express from "express";
import { userAuth } from "../controller/user-auth";

const route = express.Router()

route.get('/login', userAuth)

export default route
