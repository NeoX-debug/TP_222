const express = require('express')
const router = express.Router()
const {setPosts, getPosts, getOneArticle, editArticle, deleteArticle, deleteAllArticles, searchArticles} = require("../controllers/articles.controller")


router.get("/", getPosts)
router.get("/search", searchArticles)
router.get("/:id", getOneArticle)

router.post("/", setPosts)

router.put("/:id", editArticle)

router.delete("/", deleteAllArticles)
router.delete("/:id", deleteArticle)

router.patch("/like-post/:id", (req, res) =>{
    res.json ({ messageId : `Post ${req.params.id} liké` })
})

router.patch("/unlike-post/:id", (req, res) =>{
    res.json ({ messageId : `Post ${req.params.id} disliké` })
})

module.exports = router