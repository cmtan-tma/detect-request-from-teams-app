const express = require('express');
const router = express.Router();
const path = require('path');
router.get('/teams', (req, res) => {
    res.sendFile(path.join(__dirname + '/deep-link.html'));
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