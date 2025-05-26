const User= require('../models/user');

const createNewUser = async (req, res) => {
    try {
        const { userName, password, name, email,phone} = req.body;
        if (!userName || !password) {
            return res.status(400).json({ message: 'userName and password is required' })
        }

        const UserNameArr = (await User.find().lean()).map(e => { e.userName })
        if (UserNameArr.includes(userName))
            return res.status(201).json("userName must be unique");
        const user = await User.create({ userName, password, name, email,phone})
        return res.json(user)
}   catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }}

    const getAllUsers=async(req, res)=> {
        // just manager
        if (req.user.roles != "manager")
            return res.status(401).json({ message: 'Unauthorized' });

        const users = await User.find({}, { password: 0 }).lean();
        if (!users?.length) {
            return res.status(400).json({ message: "no user found" });
        }
        res.json(users);
    }

    async function getUserById(req, res) {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ message: "no user found" });
        }
        const user = await User.find({ _id: id }, { password: 0 });
        res.json(user);
    }

module.exports = { createNewUser, getAllUsers, getUserById }