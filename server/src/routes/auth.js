// noinspection JSCheckFunctionSignatures,JSUnresolvedFunction

const express = require('express')
const router = express.Router();
const User = require('../models/user')
const jwt = require('jsonwebtoken')

router.post('/signup', async (req, res) => {
    const {email, password} = req.body;
    try {
        const user = new User({email, password});
        await user.save()
        const token = jwt.sign({user: {id: user.id}}, 'MY_SECRET_KEY',)
        res.send({token})
    } catch (err) {
        console.error(err);
        res.status(422).send(err.message);
    }
});


router.post('/signin', async (req, res) => {
    const {email, password} = req.body;
    if (!email || !password)
        return res.status(422).send({error: 'Must provide email and password'});
    console.log('server: ', email, password)
    try {
        const user = await User.findOne({email});
        if (!user)
            return res.status(400).send({error: 'Email not found '})
        await user.comparePassword(password);
        const token = jwt.sign(
            {
                user: {id: user.id}
            },
            'MY_SECRET_KEY'
        );
        return res.send({token});
    } catch (error) {
        return res.status(422).send({error: 'Something went wrong'});
    }
});

module.exports = router;