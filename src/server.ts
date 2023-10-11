import "dotenv/config"
import { AppDataSource } from "./data-source"
import { app } from "./app"

AppDataSource.initialize()
  .then(async () => {
    console.log("Database connected.")

    const PORT: number = Number(process.env.PORT) || 3000
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`)
    })
  })
  .catch((err: any) => console.error(err))