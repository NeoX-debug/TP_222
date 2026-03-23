const PostModel = require("../models/articles")

module.exports.getPosts = async (req, res) => {
    const posts = await PostModel.find()
    res.status(200).json(posts)
}

module.exports.getOneArticle = async (req, res) => {
    if (isNaN(req.params.id)) {
        return res.status(400).json({ message: "❌ L'ID doit être un nombre" })
    }
    const post = await PostModel.findOne({ id: req.params.id })
    if (!post) {
        return res.status(404).json({ message: "❌Article non trouvé" })
    }
    res.status(200).json(post)
}

module.exports.searchArticles = async (req, res) => {
    const { query } = req.query
    if (!query) {
        return res.status(400).json({ message: "❌Merci de fournir un terme de recherche" })
    }

    const posts = await PostModel.find({
        titre: { $regex: query, $options: "i" }
    })

    res.status(200).json(posts)
}

module.exports.editArticle = async (req, res) => {
    if (isNaN(req.params.id)) {
        return res.status(400).json({ message: "❌ L'ID doit être un nombre" })
    }
    const article = await PostModel.findOne({ id: req.params.id })

    if (!article) {
        return res.status(404).json({ message: "❌Cet article n'existe pas" })
    }

    const updateArticle = await PostModel.findOneAndUpdate(
        { id: req.params.id },
        req.body,
        { new: true }
    )

    res.status(200).json(updateArticle)
}

module.exports.deleteArticle = async (req, res) => {
    if (isNaN(req.params.id)) {
        return res.status(400).json({ message: "❌ L'ID doit être un nombre" })
    }
    const article = await PostModel.findOne({ id: req.params.id })

    if (!article) {
        return res.status(404).json({ message: "❌Cet article n'existe pas" })
    }

    await article.deleteOne()
    res.status(200).json({ message: "✅Article supprimé avec succès" })
}

module.exports.deleteAllArticles = async (req, res) => {
    await PostModel.deleteMany({})
    res.status(200).json({ message: "✅Tous les articles ont été supprimés" })
}

module.exports.setPosts = async (req, res) => {
    if (!req.body.titre) {
        return res.status(400).json({ message: "❌Merci d'ajouter un titre et un auteur" })
    }
    if(!req.body.id){
        return res.status(400).json({ message: "❌Merci d'ajouter un id" })
    }
    if(!req.body.categorie){
        return res.status(400).json({ message: "❌Merci d'ajouter une catégorie" })
    }

    const post = await PostModel.create({
        id : req.body.id,
        titre: req.body.titre,
        auteur: req.body.auteur,
        categorie: req.body.categorie,
    })

    res.status(201).json("✅ Article ajouté")
}