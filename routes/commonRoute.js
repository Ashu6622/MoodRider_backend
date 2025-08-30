const express = require('express');
const router = express.Router();
const userRoute = require('./userRoute');
const adminRoute = require('./adminRoute')

router.use('/api/user', userRoute)
router.use('/api/admin', adminRoute)


module.exports = router;