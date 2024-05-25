import express from "express"
import { getUsers, getUser, userDelete, userInsert, userUpdate } from '../controllers/userController.js'

// crear servidor en app
const  router = express.Router()
// rutas de usuarios
router.get("/", getUsers)
router.get("/:id", getUser)
router.post("/", userInsert)
router.patch("/:email", userUpdate)
router.delete("/:id",userDelete )
export default router