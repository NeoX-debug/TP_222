const express = require("express")
const connectDB = require("./config/db")
const dotenv = require("dotenv").config()
const port = 5000
const app = express()

//Connection à la BD
connectDB()

//Middleware qui permet de traiter les données de la req
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/post", require("./routes/post.routes"))

//lancer le serveur
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
