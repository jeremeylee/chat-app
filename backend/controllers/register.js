const registerRouter = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../models/user');

registerRouter.post('/register', async (req, res, next) => {
  const { body } = req;
  try {
    bcrypt.genSalt(10, (err, salt) => {
      if (err) {
        next(err);
      }
      bcrypt.hash(body.password, salt, async (error, hash) => {
        if (error) {
          next(error);
        }
        const newUser = new User({
          username: body.username,
          password: hash,
        });
        const savedUser = await newUser.save();
        res.status(200).json(savedUser.toJSON());
      });
    });
  } catch (exception) {
    next(exception);
  }
});

module.exports = registerRouter;
