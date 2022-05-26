const express = require('express');
const router = express.Router();

router.get('/teams', (req, res) => {
    console.log(req.cookies);
    res.send(req.cookies);
});

router.post('/teams', (req, res) => {
    const inTeamsFromSessionStorage = req.body
    const inTeamsFromCookie = req.cookies

    const data = {
        fromCookie: inTeamsFromCookie,
        fromSessionStorage: inTeamsFromSessionStorage
    }
    res.send(data)
});

module.exports = router;