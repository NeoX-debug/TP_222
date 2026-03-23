const dotenv = require('dotenv').config()
const express = require('express')

const connectDB = require('./config/db')
const port = 5000

const app = express()

//Connection à la BD
//Middleware qui permet de traiter les données de la req
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/api/articles", require("./routes/post.routes"))

// Gestion des routes non connues (Erreur 400)
app.use((req, res) => {
    res.status(400).json({ message: "❌ Requête mal formulée ou route inconnue" })
})

//Connection à la BD
const startServer = async () => {
    try {
        await connectDB();
        //lancer le serveur
        app.listen(port, () => {
            console.log(`✅✅Server is running on port ${port}`)
        })
    } catch (err) {
        console.error("❌ Le serveur n'a pas pu démarrer :");
        console.error(err);
    }
};
startServer();
