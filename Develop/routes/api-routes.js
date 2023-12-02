const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const fs = require ("fs");

//get request to '/api/notes
router.get('/api/notes', async (res, res) => {
    const dbJson = await JSON.parse(fs.readFileSync("db/db.json", "utf8"));
    res.json(dbJson);
});

// post request to '/api/notes
router.post('/api/notes', (req, res) => {
    const dbJson = JSON.parse(fs.readFileSync("db/db.json","utf8"));
    const newFeedback = {
        title: req.body.title,
        text:req.body.text,
        id: uuidv4(),
    };
    dbJson.push(newFeedback);
    fs.writeFileSync("db/db.json",JSON.stringify(dbJson));
    res.json(dbJson);
});