import "express-async-errors"
import express, { Application } from "express"
import { handleErrors } from "./errors"
import { userRouter } from "./routes/users.routes"
import { loginRouter } from "./routes/login.routes"
import { artistsRouter } from "./routes/artists.routes"
import { musicalGroupRouter } from "./routes/musicalGroup.routes"

export const app: Application = express()
app.use(express.json())

app.use("/users", userRouter)
app.use("/login", loginRouter)
app.use("/artists", artistsRouter)
app.use("/musicalGroup", musicalGroupRouter)

app.use(handleErrors)