
const postModel = require("../models/post.model")


const createPost = (req, res) => {
    const userId = req.user.userId
    const { title, content } = req.body
    const post = {
        title: title,
        content: content,
        userId: userId
    }

    postModel.create(post).then((data) => {
        res.send(data).status(200)

    }).catch((error) => {
        console.log("error happened", error)
        res.send("ther is some error happende here")

    })
}






const deletePost = (req, res) => {
     postModel.findByPk(req.params.id).then((data) => {
        console.log("excute this please")
        const idFromToken = req.user.userId
        const idFromPost = data.userId
        console.log("posts from both is as follows",typeof(idFromToken),typeof(idFromPost))
        if (idFromToken != idFromPost) {
            return res.status(401).json({ message: "Unauthorized" })
        }
        postModel.destroy({ where: { id: req.params.id } }).then((data) => {
        res.status(200).send("Delete successful")
        }).catch((error) => {
            res.send("Unable to delete")
        })

    }).catch((error) => {
        console.log(error)
        res.status(404).json({ message: "post not found" })
    })
}






const getPosts = (req, res) => {
    posts = postModel.findAll({ where: {} }).then((data) => {
        res.send(data)
    }).catch((error) => {

        res.send("Unable to get posts")
    })


}

module.exports ={ deletePost, createPost, getPosts }
