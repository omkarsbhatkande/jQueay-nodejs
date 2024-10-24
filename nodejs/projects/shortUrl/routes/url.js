const express = require('express');
const router = express.Router();

const {handleGenerateShortUrl,handleGetAnalytics} =require('../controllers/url');


router.post('/', handleGenerateShortUrl);

router.use('/analytics',handleGetAnalytics)


module.exports =router;