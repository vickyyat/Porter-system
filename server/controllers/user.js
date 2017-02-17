const express = require('express');
const router = express.Router();
var db = require('../models');

const {
  User
} = db;

router.get('/:id', findUser, (req, res) => {
  let user = req.user;
  res.status(200).send(user);
});

router.get('/', (req, res) => {
  User.findAll()
    .then(users => {
      res.status(200).send(users);
    })
});

router.delete('/:id', findUser, (req, res) => {
  let user = req.user;
  user.destroy()
    .then(() => res.sendStatus(200))
    .catch(() => res.sendStatus(500));
});

router.post('/', (req, res) => {
  let user = req.body;
  User.create(user).then((user) => {
    if (!user) {
      return res.sendStatus(500);
    }
    res.status(200).send(user);
  });
});

// router.put('/:id', gamesMatch, findUser, (req, res) => {
//   let user = req.user;
//   let userParams = req.body;
//   // gameParams.playersCountRange[0]--;
//   // gameParams.playingTimeRange[0]--;
//   // game.update(gameParams).then((updatedGame) => {
//   //   updatedGame.playersCountRange[0]++;
//   //   updatedGame.playingTimeRange[0]++;
//   //   res.status(200).send(updatedGame);
//   // });
// });

function findUser(req, res, next) {
  User.findById(req.params.id).then((user) => {
    if (!user) {
      return res.sendStatus(404);
    }
    req.user = user;
    next();
  });
}

module.exports = router;
