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

// DELETE /api/notes/:id
// get one specific note, req.body.id, readfile db.json, find entry that matches that id
router.delete("/notes/:id", (req, res) => {
    // rewrite data and return only elements that DON'T match deleted note ID
    data = data.filter((el) => el.id !== req.params.id);
    fs.writeFile(
      path.join(__dirname, "../../db/db.json"),
      JSON.stringify(data),
      function (err) {
        if (err) {
          res.status(404).json({ error: err });
        }
        res.json(data);
      }
    );
  });





// router.delete('/api/notes/:id', (req, res) => {
//     let data = fs.readFileSync("Develop/db/db.json", "utf8");
//     const dataJSON = JSON.parse(data);
//     const newNotes = dataJSON.filter((note) => {
//         return note.id !== req.params.id;
//     });
//     fs.writeFileSync("Develop/db/db.json",JSON.stringify(newNotes));
//     res.json("Note deleted.");
// });

module.exports = router;

