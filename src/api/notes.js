const express = require('express');

const { Notes } = require('../models');


const router = express.Router();

router.get('/', async (req, res) => {
  res.body = await Notes.find({});
  res.status(200).send(res.body);
});

router.post('/', async (req, res) => {
  const { title, text } = req.body;
  await Notes.create({ title, text });
  res.status(201).send();
});

router.get('/:note_id', async (req, res) => {
  const note = await Notes.findById(req.params.note_id);

  if (!note) {
    res.status(400).send();
  } else {
    res.status(200).send(note);
  }
});

router.put('/:note_id', async (req, res) => {
  const { title, text } = req.body;
  const note_id = req.params.note_id;

  if (!(await Notes.findById(note_id))) {
    res.status(400).send();
  } else {
    await Notes.updateOne({ _id: note_id }, {
      $set: { title, text, dateOfUpdate: Date.now()},
    });
    res.status(200).send(await Notes.findById(note_id));
  }
});

module.exports = router;