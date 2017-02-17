const express = require('express');
const router = express.Router();

router.use('/rooms', require('./room.js'));
router.use('/users', require('./user.js'));

module.exports = router;
