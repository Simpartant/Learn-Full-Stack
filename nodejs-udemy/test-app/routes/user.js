const express = require('express');
const rootPath = require('../util/path');
const path = require('path');
const router = express.Router();

router.get('/users', (req, res, next) => {
    res.sendFile(path.join(rootPath, 'views', 'user.html'));
});

module.exports = router;