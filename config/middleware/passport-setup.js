const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
// keys file import
const keys = require('./keys');

passport.use(
    new GoogleStrategy({
        // options for the Google strat
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret,
    }), () => {
        // passport callback function
    })
)