const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');

passport.use(
    new GoogleStrategy({
        // options for the Google strat
        // from Google dev console for Grocery List project
        clientID: '622929773837-s2qstapjimpu7sbrm3v5b6s95ra50h17.apps.googleusercontent.com',
        clientSecret: 'OVerzm1yARB0kwbKHGJhVQqP',
    }), () => {
        // passport callback function
    })
)