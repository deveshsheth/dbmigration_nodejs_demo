const bcrypt = require('bcrypt')
const models = require('../models');

const registerUser = async (req, res) => {
    try {

        const {name, user_name, email, password, dob, status} = req.body

        models.Users.create({
            name:name,
            user_name:user_name,
            email:email,
            password:password,
            dob:dob,
            status:status
        }).then(result => {
            res.json(result)
        }).catch(err => {
            console.log(err);
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};

const getUser = async (req, res) => {
    try{
        const data = models.Users.findAll()
        res.json(data);
    } catch(error) {
        console.log(error);
        res.status(500).json({ error: 'Server error' });
    }
};

module.exports = {
    registerUser,
    getUser
}