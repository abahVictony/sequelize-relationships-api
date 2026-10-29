const express = require('express')
const { newPost, getAllPosts, updatePost, deletePost, getOnePost } = require('../controller/postControler')
const router = express.Router()

router.post('/newPost', newPost)
router.get('/allPosts', getAllPosts)
router.patch('/updatePost/:id', updatePost)
router.delete('/deletePost/:id', deletePost)
router.get('/getOnePost/:id', getOnePost)

module.exports = router