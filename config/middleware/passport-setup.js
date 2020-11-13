const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
// keys file import
const keys = require('./keys');
// importing user model
const user = require('../../models/user.model');
const User = require('../../models/user.model');

passport.use(
    new GoogleStrategy({
        // options for the Google strat
        callbackURL: '/auth/google/redirect',
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret,
    }, (accessToken, refreshToken, profile, done) => {
        // check if user already exists in our db
        User.findOne({googleID: profile.id}).then((currentUser) => {
            if(currentUser){
                // already have the user
                console.log('user is: ', currentUser)
            } else {
                // if not, create new user in our db
                new User({
                    username: profile.displayName,
                    googleID: profile.id
                }).save().then((newUser) => {
                    console.log('new user created: ' + newUser)
                })
            }
        })
        // function to make add user to db using mongoose 
        
    })
)