const bcrypt = require('bcrypt')
const models = require('../models');

const registerUser = async (req, res) => {
    try {
        const { name, user_name, email, password, dob, status } = req.body
        
        const user = await models.Users.findOne({ where: { email: email } })
        if (user) {
            res.json({ msg: "Warning - Oops! Email Already Registered!!" })
        } else {
            models.Users.create({
                name: name,
                user_name: user_name,
                email: email,
                password: await bcrypt.hash(password, 10),
                dob: dob,
                status: status
            }).then(result => {
                 res.status(200).json({ status:200, msg: "Success - User register successfully !!", data: result })
            }).catch(err => {
                res.status(500).json({ status:500, msg: "Error - Internal Server Error !!", data: err })
            })
        }
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

const userLogin = async (req, res) => {
    try {
        const user = await models.Users.findOne({ where: { email: req.body.email } })
        if(user){
            const password = await models.Users.findOne({ where })
        }

    } catch (error) {

    }
}

const getUser = async (req, res) => {
    try {
        const data = models.Users.findAll()
        res.json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Server error' });
    }
};

module.exports = {
    registerUser,
    getUser
}