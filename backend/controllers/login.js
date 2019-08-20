const loginRouter = require('express').Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const config = require('../utils/config');
const User = require('../models/user');

loginRouter.post('/login', async (req, res, next) => {
  const { body } = req;
  try {
    const user = await User.findOne({ username: body.username });
    console.log(user);
    const passwordCorrect = user === null
      ? false
      : await bcrypt.compare(body.password, user.password);

    if (!(user && passwordCorrect)) {
      return res.status(401).json({
        error: 'invalid username or password',
      });
    }
    
    const token = jwt.sign(body, config.PRIVATE_KEY);

    res.status(200).send({ token, username: user.username });
  } catch (exception) {
    next(exception);
  }
});

module.exports = loginRouter;
