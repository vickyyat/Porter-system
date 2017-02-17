const express = require('express');
const router = express.Router();
var db = require('../models');

const {
  Room
} = db;

router.get('/:id', findRoom, (req, res) => {
  let room = req.room;
  res.status(200).send(room);
});

router.get('/', (req, res) => {
  Room.findAll()
  .then(rooms => {
    res.status(200).send(rooms);
  });
});

router.delete('/:id', findRoom, (req, res) => {
  let room = req.room;
  room.destroy()
  .then(() => res.sendStatus(200))
  .catch(() => res.sendStatus(500));
});

router.post('/', (req, res) => {
  let room = req.body;
  Room.create(room).then((room) => {
    if (!room) {
      return res.sendStatus(500);
    }
    res.status(200).send(room);
  });
});

// router.post('/', function (req, res) {
//   Room.create({ number: req.body.number,
//                 available: req.body.available,
//                 capacity: req.body.capacity})
//     .then(function (room) {
//       res.json(room);
//     });
// });

router.put('/:id', findRoom, (req, res) => {
  let room = req.room;
  let roomParams = req.body;
  room.update(roomParams).then((updatedRoom) => {
    res.status(200).send(updatedRoom);
  });
});

function findRoom(req, res, next) {
  Room.findById(req.params.id).then((room) => {
    if (!room) {
      return res.sendStatus(404);
    }
    req.room = room;
    next();
  });
}

module.exports = router;
