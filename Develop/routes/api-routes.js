const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const fs = require ("fs");

//get request to '/api/notes
router.get('/api/notes', async (req, res) => {
    const dbJson = await JSON.parse(fs.readFileSync("Develop/db/db.json", "utf8"));
    res.json(dbJson);
});

// post request to '/api/notes
router.post('/api/notes', (req, res) => {
    const dbJson = JSON.parse(fs.readFileSync("Develop/db/db.json","utf8"));
    const newFeedback = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4(),
    };
    dbJson.push(newFeedback);
    fs.writeFileSync("Develop/db/db.json",JSON.stringify(dbJson));
    res.json(dbJson);
});

router.delete('/api/notes/:id', (req, res) => {
    let data = fs.readFileSync("Develop/db/db.json", "utf8");
    const dataJSON = JSON.parse(data);
    const newNotes = dataJSON.filter((note) => {
        return note.id !== req.params.id;
    });
    fs.writeFileSync("Develop/db/db.json",JSON.stringify(newNotes));
    res.json("Note deleted.");
});

module.exports = router;

