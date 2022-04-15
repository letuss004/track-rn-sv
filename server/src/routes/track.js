// noinspection JSUnresolvedFunction

const express = require('express')
const auth = require('../middlewares/auth')
const Track = require('../models/Track')

//
const router = express.Router()

//
router.get('/tracks', auth, async (req, res) => {
    console.log(req.user.id);
    try {
        const tracks = await Track.find({userId: req.user.id});
        return res.send(tracks);
    } catch (err) {
        console.log(err)
        res.send(err.message)
    }
});

router.post('/tracks', auth, async (req, res) => {
    const {name, location} = req.body;

    if (!name || !location) {
        return res.status(422).send({error: 'You must provide a name and locations'})
    }

    try {
        const track = new Track({name, location, userId: req.user.id});
        await track.save();
        return res.send(track);
    } catch (err) {
        return res.status(422).send(err.message);
    }


});


module.exports = router;

