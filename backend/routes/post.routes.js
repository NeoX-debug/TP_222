const express = require('express')
const router = express.Router()
const {setPosts} = require("../controllers/post.controller")


router.get("/", (req, res) => {
    res.json({ message: "Voici les données" })
})

router.post("/", setPosts)

router.put("/:id", (req, res) =>{
    res.json ({ messageId : req.params.id })
})

router.delete("/:id", (req, res) =>{
    res.json ({ messageId : `Post ${req.params.id} supprimé` })
})

router.patch("/like-post/:id", (req, res) =>{
    res.json ({ messageId : `Post ${req.params.id} liké` })
})

router.patch("/unlike-post/:id", (req, res) =>{
    res.json ({ messageId : `Post ${req.params.id} disliké` })
})

module.exports = router