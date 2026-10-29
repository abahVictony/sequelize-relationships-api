const { Users, posts } = require('../models');


const newUser = async (req, res) => {
    try {
        const { firstName, lastName, email, gender, username, isVerified } = req.body;

        const user = await Users.findOne({ where: { email } });

        if (user) {
            return res.status(400).json({
                message: `user with Email: ${email} already exists`
            })
        }

        const newUser = await Users.create({
            firstName,
            lastName,
            email,
            gender,
            username,
            isVerified
        })

        res.status(201).json({
            message: 'User created successfully',
            data: newUser
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const getAllUsers = async (req, res) => {
    try {
        const user = await Users.findAll();

        res.status(200).json({
            message: `All students and the total is: ${user.length}`,
            data: user
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}


const getOneUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await Users.findByPk(id, {
            include: [{
                attributes: ['title', 'content', 'status', 'visibility'],
                model: posts,
                as: 'posts'
            }]
        });
        if (!user) {
            return res.status(404).json({
                message: "User not Found"
            })
        }
        res.status(200).json({
            message: 'User Found',
            data: user
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}


const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { firstName, lastName, email, gender, username, isVerified} = req.body;
        const updatedUser = await Users.update({ lastName, gender, email, firstName, username, isVerified }, { where: { id } });
        res.status(200).json({
            message: 'Student updated successfully',
            data: updatedUser
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}


const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await Users.findOne({where: {id}});
        if (!user) {
            return res.status(404).json({
                message: 'User not found'
            })
        }
        await Users.destroy({where: {id}});
        res.status(200).json({
            message: 'User deleted successfully'
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

module.exports = {
    newUser,
    getAllUsers,
    getOneUser,
    updateUser,
    deleteUser
}