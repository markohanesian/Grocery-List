const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
// keys file import
const keys = require('./keys');
// importing user model
const user = require('../../models/user.model');

passport.use(
    new GoogleStrategy({
        // options for the Google strat
        callbackURL: '/auth/google/redirect',
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret,
    }, (accessToken, refreshToken, profile, done) => {
        // passport callback function
        console.log('passport callback function fired');
        console.log(profile)
    })
)