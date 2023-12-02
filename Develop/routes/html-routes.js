const router = require('express').Router();
const path = require('path');

//sends response when GET request is made to 'index.html
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

//sends response when GET request is made to 'notes.html'
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
});

module.exports = router;