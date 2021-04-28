const router = require('express').Router()
const feeds = require('../controllers/feeds');

router.get('/getFeeds' , feeds.getFeeds);

router.post('/postFeeds' , feeds.postFeeds);


module.exports = router