const { posts, Users} = require('../models');
const users = require('../models/users');


const newPost = async (req, res) => {
    try {
        const { title, content, status, visibility, userId } = req.body;

        const newPost = await posts.create({
            title,
            content,
            status,
            visibility,
            userId
        })

        res.status(201).json({
            message: 'Posted successfully',
            data: newPost
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const getAllPosts = async (req, res) => {
    try {
        const post = await posts.findAll();

        res.status(200).json({
            message: `All students and the total is: ${post.length}`,
            data: post
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}


const updatePost = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, content, status, visibility, userId } = req.body;
        const updatedPost = await posts.update({ title, content, status, visibility, userId }, { where: { id } });
        res.status(200).json({
            message: 'Student updated successfully',
            data: updatedPost
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}


const deletePost = async (req, res) => {
    try {
        const { id } = req.params;
        const post = await posts.findOne({where: {id}});
        if (!post) {
            return res.status(404).json({
                message: 'Post not found'
            })
        }
        await Users.destroy({where: {id}});
        res.status(200).json({
            message: 'Post deleted successfully'
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const getOnePost = async (req, res) => {
    try {
        const { id } = req.params;
        const post = await posts.findByPk(id, {
            include: [{
                attributes: ['firstName', 'lastName', 'email', 'username'],
                model: Users,
                as: 'Users'
            }]
        });
        if (!post) {
            return res.status(404).json({
                message: "Post not found"
            })
        }
        res.status(200).json({
            message: 'Post Found',
            data: post
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

module.exports = {
    newPost,
    getAllPosts,
    updatePost,
    deletePost,
    getOnePost
}