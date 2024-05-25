import express from "express"
import userRouter from './routes/userRoutes.js'
// crear servidor en app
const app = express()
//ejecuta el middleware json para entender datos json()
app.use(express.json())
// rutas del que va a escuchar el servidor app
app.get("/", (req, res) => {
    res.json("Pagina principal")
})

app.use("/users",userRouter)
//app.use("/auth",router)

export default app