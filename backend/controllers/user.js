
const userRouter = require('express').Router()

const jwt = require("jsonwebtoken");
// bcrypt is used to hash passwords so 
// you don't store straight into the database
const bcrypt = require('bcrypt')
require('dotenv').config()

const keys = require("../config/keys");

// Load input validation
const validateRegisterInput = require("../validation/signup");
const validateLoginInput = require("../validation/login");

const User = require('../models/user')

userRouter.post('/signup', (req, res, next) => {

    const { errors, isValid } = validateRegisterInput(req.body);
   // Check validation
      if (!isValid) {
       return res.status(400).json(errors);
     }

     User.findOne({ username: req.body.username }).then(user => {
        if (user) {
          return res.status(400).json({ username: "Username already exists" });
        } else {
          const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
          });
    // Hash password before saving in database
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) throw err;
              newUser.password = hash;
              newUser
                .save()
                .then(user => res.json(user))
                .catch(err => console.log(err));
            });
          });
        }
      });
      next();
    })

    userRouter.post("/login", (req, res) => {
        // Form validation
      const { errors, isValid } = validateLoginInput(req.body);
      // Check validation
        if (!isValid) {
          return res.status(400).json(errors);
        }
      const username = req.body.username;
        const password = req.body.password;
      // Find user by email
        User.findOne({ username }).then(user => {
          // Check if user exists
          if (!user) {
            return res.status(404).json({ usernamenotfound: "Username not found" });
          }
      // Check password
          bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
              // User matched
              // Create JWT Payload
              const payload = {
                id: user.id,
                username: user.username
              };
      // Sign token
              jwt.sign(
                payload,
                keys.secretOrKey,
                {
                  expiresIn: 31556926 // 1 year in seconds
                },
                (err, token) => {
                  res.json({
                    success: true,
                    token: "Bearer " + token

                  });
                  
                }
              );
            } else {
              return res
                .status(400)
                .json({ passwordincorrect: "Password incorrect" });
            }
          });
        });
     
})

module.exports = userRouter