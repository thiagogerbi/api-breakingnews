const userService = require('../services/user.service')
const mongoose = require('mongoose')

const create = async (req, res) => {
    const {name, username, email, password, avatar, background} = req.body;

    if (!name || !username || !email || !password || !avatar || !background){
        res.status(400).send({message:"Submit all fields for registration"})
    }

    const user = await userService.createService(req.body);

    if (!user){
        return res.status(400).send({message: "Error creating User"});
    }

    res.status(201).send({
        message: "User created successfully",
        user: {
            id: user._id,
            name,
            username,
            email,
            avatar,
            background,
        },
    });
};

const findAll = async (req, res) => {
    const users = await userService.findAllService();

    if (users.length === 0){
        return res.status(400).send({message: "There aren't registered users"});
    }

    res.send(users)
};

const findById = async (req, res) => {
    const userId = req.params.id

    if (!mongoose.Types.ObjectId.isValid(userId)){
        return res.status(400).send({message: "Invalid ID"});
    }

    const user = await userService.findByIdService(userId)

    if (!user) {
        return res.status(400).send({message: "User not found"})
    }

    res.send(user)
};

const update = async (req, res) => {
    const {name, username, email, password, avatar, background} = req.body;

    if (!name && !username && !email && !password && !avatar && !background){
        res.status(400).send({message:"Submit at least one field for update"})
    }

    const userId = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(userId)){
        return res.status(400).send({message: "Invalid ID"});
    }

    const user = await userService.findByIdService(userId)

    if (!user) {
        return res.status(400).send({message: "User not found"})
    }

    await userService.updateService(
        userId,
        name,
        username, 
        email, 
        password, 
        avatar, 
        background
    );

    res.send({message: "User successfully updated!"})

}

module.exports = { create, findAll, findById, update };