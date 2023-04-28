const { Router } = require('express');
const router = Router();

const {getNotes, createNote, getNote, updateNote, deleteNote} = require('../controllers/notes.controller');

router.route('/') //agregar u obtener
    .get(getNotes)
    .post(createNote)

router.route('/:id') //instrucciones en donde son necesarias un id
    .delete(deleteNote)
    .put(updateNote)
    .get(getNote)
    

module.exports = router;
