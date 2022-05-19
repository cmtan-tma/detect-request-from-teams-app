const express = require('express');
const router = express.Router();

router.get('/teams', (req, res) => {
    console.log(req.cookies);
    res.send(req.cookies);
});

module.exports = router;